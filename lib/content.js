import connectToDatabase from "@/lib/mongodb";
import Post from "@/lib/models/Post";

const CONTENT_FETCH_TIMEOUT_MS = 10000;

const formatDisplayDate = (value) =>
    new Date(value).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
    });

const mapPost = (post) => ({
    id: post._id,
    title: post.title,
    summary: post.summary,
    content: post.content,
    date: formatDisplayDate(post.createdAt),
    fullDate: new Date(post.createdAt).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    }),
    createdAt: post.createdAt,
    readTime: post.readTime || "5 min read",
    category: post.category || "General",
    slug: `/blog/${post._id}`,
});

const withTimeout = (promise, timeoutMessage) =>
    Promise.race([
        promise,
        new Promise((_, reject) => {
            setTimeout(() => reject(new Error(timeoutMessage)), CONTENT_FETCH_TIMEOUT_MS);
        }),
    ]);

export async function getPosts({ limit } = {}) {
    await connectToDatabase();
    let query = Post.find().sort({ createdAt: -1 });
    if (typeof limit === "number") {
        query = query.limit(limit);
    }

    const rawPosts = await query;
    return JSON.parse(JSON.stringify(rawPosts)).map(mapPost);
}

export async function getPostsWithFallback(options) {
    try {
        const posts = await withTimeout(
            getPosts(options),
            "Timed out fetching posts from MongoDB"
        );
        return posts;
    } catch (error) {
        console.error("Failed to fetch posts from MongoDB:", error);
        return [];
    }
}

export async function getPostById(id) {
    await connectToDatabase();
    const rawPost = await Post.findById(id);
    if (!rawPost) {
        return null;
    }

    return mapPost(JSON.parse(JSON.stringify(rawPost)));
}

export async function getPostByIdWithFallback(id) {
    try {
        return await getPostById(id);
    } catch (error) {
        console.error("Failed to fetch post from MongoDB:", error);
        return null;
    }
}

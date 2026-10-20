import connectToDatabase from "@/lib/mongodb";
import Post from "@/lib/models/Post";
import Project from "@/lib/models/Project";

const CONTENT_FETCH_TIMEOUT_MS = 10000;

const sampleProjects = [
    {
        id: 1,
        title: "Burma Medical Association",
        description: "Built a WordPress site with custom CSS so a cross-border health network can publish news, programme information, health data and job vacancies, with a media centre, resources library and contact form.",
        imageUrl: "https://res.cloudinary.com/dznkec5x0/image/upload/v1756629016/bma_dvypky.png",
        projectUrl: "https://www.bmahq.org/",
    },
    {
        id: 2,
        title: "Four Rivers ACTS Foundation",
        description: "Built a bilingual (English/Burmese) WordPress site with custom CSS for a Mae Sot community organisation, covering its activities, partners, news and resources.",
        imageUrl: "https://res.cloudinary.com/dznkec5x0/image/upload/v1756629016/4rivers_eb2cxh.png",
        projectUrl: "https://www.4rivers-acts.org/",
    },
    {
        id: 3,
        title: "Health Information System Working Group",
        description: "Built the website for a network of ethnic health organisations, publishing caseload reports, research and HIS training material, with a resources library and caseload dashboard.",
        imageUrl: "https://res.cloudinary.com/dznkec5x0/image/upload/v1756629016/hiswg_fu9cc8.png",
        projectUrl: "https://www.hiswg.org/",
    },
    {
        id: 4,
        title: "Shun & Ye Wedding",
        description: "A digital wedding invitation built with Next.js and deployed on Vercel, with RSVP, photo gallery, event schedule and a guest message form.",
        imageUrl: "https://res.cloudinary.com/dznkec5x0/image/upload/v1768719152/Screenshot_from_2026-01-18_13-52-02_movgha.png",
        projectUrl: "https://wedding-invitation-ys.vercel.app/",
    },
];

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

const mapProject = (project) => ({
    id: project._id,
    title: project.title,
    description: project.description,
    imageUrl: project.imageUrl,
    projectUrl: project.projectUrl,
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

export async function getProjects({ limit } = {}) {
    await connectToDatabase();
    let query = Project.find().sort({ order: 1, createdAt: -1 });
    if (typeof limit === "number") {
        query = query.limit(limit);
    }

    const rawProjects = await query;
    return JSON.parse(JSON.stringify(rawProjects)).map(mapProject);
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

export async function getProjectsWithFallback(options) {
    try {
        const projects = await withTimeout(
            getProjects(options),
            "Timed out fetching projects from MongoDB"
        );
        return projects.length > 0 ? projects : sampleProjects;
    } catch (error) {
        console.error("Failed to fetch projects from MongoDB:", error);
        return sampleProjects;
    }
}

import connectToDatabase from "@/lib/mongodb";
import Post from "@/lib/models/Post";
import Project from "@/lib/models/Project";

const CONTENT_FETCH_TIMEOUT_MS = 1200;

const samplePosts = [
    {
        id: 1,
        title: "Building Resilient IT Infrastructure for Clinics",
        summary:
            "Learn how I combine my healthcare background with system engineering principles to design bullet-proof workflows for medical environments.",
        content:
            "This is a sample summary for the blog post.\n\nYou can format your code blocks like this using markdown:\n\n```python\n# Sample python script\ndef hello_world():\n    print(\"Hello world!\")\n```\n\n```bash\n# Sample bash command\nnpm install react-markdown\n```\n\nAnd it will be beautifully formatted with syntax highlighting and a copy button!",
        date: "Feb 15, 2026",
        fullDate: "February 15, 2026",
        createdAt: "2026-02-15T00:00:00.000Z",
        readTime: "5 min read",
        category: "Infrastructure",
        slug: "/blog/1",
    },
    {
        id: 2,
        title: "From Stethoscope to Server Rack: My Career Transition",
        summary:
            "A personal look into why I shifted from a final-year medical student to becoming an IT systems builder. The lessons, challenges, and parallel diagnostic skills.",
        content:
            "This is a sample summary for the blog post.\n\nYou can format your code blocks like this using markdown:\n\n```python\n# Sample python script\ndef hello_world():\n    print(\"Hello world!\")\n```\n\n```bash\n# Sample bash command\nnpm install react-markdown\n```\n\nAnd it will be beautifully formatted with syntax highlighting and a copy button!",
        date: "Jan 28, 2026",
        fullDate: "January 28, 2026",
        createdAt: "2026-01-28T00:00:00.000Z",
        readTime: "8 min read",
        category: "Career",
        slug: "/blog/2",
    },
    {
        id: 3,
        title: "Automating Daily Operations with Bash and Python",
        summary:
            "Step-by-step guide to some of the scripts I run daily to manage 300+ users securely and efficiently across multiple devices.",
        content:
            "This is a sample summary for the blog post.\n\nYou can format your code blocks like this using markdown:\n\n```python\n# Sample python script\ndef hello_world():\n    print(\"Hello world!\")\n```\n\n```bash\n# Sample bash command\nnpm install react-markdown\n```\n\nAnd it will be beautifully formatted with syntax highlighting and a copy button!",
        date: "Dec 10, 2025",
        fullDate: "December 10, 2025",
        createdAt: "2025-12-10T00:00:00.000Z",
        readTime: "6 min read",
        category: "Automation",
        slug: "/blog/3",
    },
];

const sampleProjects = [
    {
        id: 1,
        title: "Burma Medical Association",
        description: "I made this with Wordpress and custom css",
        imageUrl: "https://res.cloudinary.com/dznkec5x0/image/upload/v1756629016/bma_dvypky.png",
        projectUrl: "https://www.bmahq.org/",
    },
    {
        id: 2,
        title: "Fours Rivers ACTS Foundation",
        description: "I made this with Wordpress and custom css",
        imageUrl: "https://res.cloudinary.com/dznkec5x0/image/upload/v1756629016/4rivers_eb2cxh.png",
        projectUrl: "https://www.4rivers-acts.org/",
    },
    {
        id: 3,
        title: "Health Information System Working Group",
        description: "I made this with Wordpress and custom css",
        imageUrl: "https://res.cloudinary.com/dznkec5x0/image/upload/v1756629016/hiswg_fu9cc8.png",
        projectUrl: "https://www.hiswg.org/",
    },
    {
        id: 4,
        title: "Shun & Ye Wedding",
        description: "I made this with Next.js",
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
        return posts.length > 0 ? posts : samplePosts;
    } catch (error) {
        console.error("Failed to fetch posts from MongoDB:", error);
        return samplePosts;
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

export function getSamplePostById(id) {
    return samplePosts.find((post) => String(post.id) === String(id)) || null;
}

export async function getPostByIdWithFallback(id) {
    try {
        const post = await getPostById(id);
        return post || getSamplePostById(id);
    } catch (error) {
        console.error("Failed to fetch post from MongoDB:", error);
        return getSamplePostById(id);
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

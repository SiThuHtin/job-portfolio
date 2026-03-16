"use client";
import React, { useState, useEffect } from "react";
import { Trash2, Edit2, Lock, LogOut, Layout, FileText } from "lucide-react";

export default function AdminPanel() {
    const [activeTab, setActiveTab] = useState("posts"); // 'posts' or 'projects'

    // Data State
    const [posts, setPosts] = useState([]);
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [editId, setEditId] = useState(null);

    // Auth State
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [passwordInput, setPasswordInput] = useState("");
    const [adminToken, setAdminToken] = useState("");
    const [authLoading, setAuthLoading] = useState(true);

    const [postFormData, setPostFormData] = useState({
        title: "", summary: "", content: "", category: "General", readTime: "5 min read",
    });

    const [projectFormData, setProjectFormData] = useState({
        title: "", description: "", imageUrl: "", projectUrl: "", order: 0,
    });

    // Fetch data
    const fetchData = async () => {
        setLoading(true);
        try {
            const [postsRes, projectsRes] = await Promise.all([
                fetch("/api/posts"),
                fetch("/api/projects")
            ]);

            const postsData = await postsRes.json();
            const projectsData = await projectsRes.json();

            if (postsData.posts) setPosts(postsData.posts);
            if (projectsData.projects) setProjects(projectsData.projects);
        } catch (error) {
            console.error("Failed to fetch data:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        const token = sessionStorage.getItem("adminToken");
        if (token) {
            setAdminToken(token);
            setIsAuthenticated(true);
        }
        fetchData();
        setAuthLoading(false);
    }, []);

    const handleLogin = async (e) => {
        e.preventDefault();
        setSaving(true);
        try {
            const res = await fetch("/api/auth", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ password: passwordInput })
            });

            if (res.ok) {
                setAdminToken(passwordInput);
                sessionStorage.setItem("adminToken", passwordInput);
                setIsAuthenticated(true);
                setPasswordInput("");
            } else {
                alert("Incorrect database password!");
            }
        } catch (error) {
            alert("Error connecting to auth service.");
        } finally {
            setSaving(false);
        }
    };

    const handleLogout = () => {
        sessionStorage.removeItem("adminToken");
        setAdminToken("");
        setIsAuthenticated(false);
        setPasswordInput("");
    };

    const handlePostChange = (e) => {
        const { name, value } = e.target;
        setPostFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleProjectChange = (e) => {
        const { name, value } = e.target;
        setProjectFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSaving(true);

        const isPost = activeTab === "posts";
        const url = editId
            ? (isPost ? `/api/posts/${editId}` : `/api/projects/${editId}`)
            : (isPost ? "/api/posts" : "/api/projects");

        const method = editId ? "PUT" : "POST";
        const bodyData = isPost ? postFormData : projectFormData;

        try {
            const res = await fetch(url, {
                method: method,
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${adminToken}`
                },
                body: JSON.stringify(bodyData),
            });

            if (res.status === 401) {
                alert("Session unauthorized. Please log in again.");
                handleLogout();
                return;
            }

            if (res.ok) {
                alert(`${isPost ? "Post" : "Project"} ${editId ? "updated" : "created"} successfully!`);
                handleCancelEdit();
                fetchData(); // Reload all data
            } else {
                alert(`Failed to ${editId ? "update" : "create"} ${isPost ? "post" : "project"}.`);
            }
        } catch (error) {
            console.error(error);
            alert("Error saving data");
        } finally {
            setSaving(false);
        }
    };

    const handleEdit = (item) => {
        if (activeTab === "posts") {
            setPostFormData({
                title: item.title,
                summary: item.summary,
                content: item.content,
                category: item.category || "General",
                readTime: item.readTime || "5 min read",
            });
        } else {
            setProjectFormData({
                title: item.title,
                description: item.description,
                imageUrl: item.imageUrl,
                projectUrl: item.projectUrl,
                order: item.order || 0,
            });
        }
        setEditId(item._id);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleCancelEdit = () => {
        if (activeTab === "posts") {
            setPostFormData({ title: "", summary: "", content: "", category: "General", readTime: "5 min read" });
        } else {
            setProjectFormData({ title: "", description: "", imageUrl: "", projectUrl: "", order: 0 });
        }
        setEditId(null);
    };

    const handleDelete = async (id) => {
        const isPost = activeTab === "posts";
        if (!confirm(`Are you sure you want to delete this ${isPost ? "post" : "project"}?`)) return;

        try {
            const url = isPost ? `/api/posts/${id}` : `/api/projects/${id}`;
            const res = await fetch(url, {
                method: "DELETE",
                headers: {
                    "Authorization": `Bearer ${adminToken}`
                }
            });

            if (res.status === 401) {
                alert("Session unauthorized. Please log in again.");
                handleLogout();
                return;
            }

            if (res.ok) {
                if (isPost) {
                    setPosts(posts.filter((post) => post._id !== id));
                } else {
                    setProjects(projects.filter((proj) => proj._id !== id));
                }
            } else {
                alert(`Failed to delete ${isPost ? "post" : "project"}.`);
            }
        } catch (error) {
            console.error(error);
            alert("Error deleting item");
        }
    };

    if (authLoading) return <div className="min-h-screen bg-black" />;

    if (!isAuthenticated) {
        return (
            <div className="min-h-screen bg-black flex items-center justify-center px-4 relative z-50">
                <div className="bg-black/60 backdrop-blur-lg border border-white/20 rounded-2xl p-8 max-w-md w-full shadow-[0_0_15px_rgba(250,204,21,0.1)]">
                    <div className="flex justify-center mb-6">
                        <Lock className="w-12 h-12 text-yellow-400" />
                    </div>
                    <h2 className="text-3xl font-bold text-white text-center mb-2">Admin Portal</h2>
                    <p className="text-gray-400 text-center mb-6 text-sm">Enter the secret password to manage your content.</p>

                    <form onSubmit={handleLogin} className="space-y-4">
                        <div>
                            <input
                                type="password"
                                value={passwordInput}
                                onChange={(e) => setPasswordInput(e.target.value)}
                                required
                                className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 transition-all text-center tracking-widest"
                                placeholder="••••••••"
                            />
                        </div>
                        <button
                            type="submit"
                            disabled={saving}
                            className="w-full py-4 rounded-xl bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-bold text-lg shadow-lg hover:scale-[1.02] transition-all duration-300 disabled:opacity-50"
                        >
                            {saving ? "Verifying..." : "Unlock"}
                        </button>
                    </form>
                </div>
            </div>
        );
    }

    const currentList = activeTab === "posts" ? posts : projects;

    return (
        <div className="min-h-screen bg-black pt-24 px-4 pb-12">

            {/* Tab Navigation */}
            <div className="max-w-5xl mx-auto mb-8 flex gap-4 border-b border-white/10 pb-4">
                <button
                    onClick={() => { setActiveTab("posts"); handleCancelEdit(); }}
                    className={`flex items-center gap-2 px-6 py-3 rounded-lg font-bold transition-all ${activeTab === "posts" ? "bg-yellow-500 text-black" : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white"}`}
                >
                    <FileText className="w-5 h-5" /> Blog Posts
                </button>
                <button
                    onClick={() => { setActiveTab("projects"); handleCancelEdit(); }}
                    className={`flex items-center gap-2 px-6 py-3 rounded-lg font-bold transition-all ${activeTab === "projects" ? "bg-yellow-500 text-black" : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white"}`}
                >
                    <Layout className="w-5 h-5" /> Projects
                </button>

                <div className="ml-auto">
                    <button
                        onClick={handleLogout}
                        className="flex items-center gap-2 px-6 py-3 rounded-lg text-red-400 hover:bg-red-500/10 font-bold transition-colors"
                    >
                        <LogOut className="w-5 h-5" /> Logout
                    </button>
                </div>
            </div>

            <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">

                {/* Left Side: Create/Edit Form */}
                <div className="bg-black/60 backdrop-blur-lg border border-white/20 rounded-2xl p-8 shadow-[0_0_15px_rgba(250,204,21,0.1)]">
                    <h2 className="text-3xl font-bold text-white mb-6 border-b border-white/10 pb-4">
                        {editId ? `Edit ${activeTab === "posts" ? "Post" : "Project"}` : `Create New ${activeTab === "posts" ? "Post" : "Project"}`}
                    </h2>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        {/* POSTS FORM */}
                        {activeTab === "posts" && (
                            <>
                                <div>
                                    <label className="block text-gray-400 text-sm font-semibold mb-2">Title</label>
                                    <input
                                        type="text"
                                        name="title"
                                        value={postFormData.title}
                                        onChange={handlePostChange}
                                        required
                                        className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 transition-all"
                                        placeholder="Awesome Post Title"
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-400 text-sm font-semibold mb-2">Summary</label>
                                    <textarea
                                        name="summary"
                                        value={postFormData.summary}
                                        onChange={handlePostChange}
                                        required
                                        rows={2}
                                        className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 transition-all"
                                        placeholder="A brief overview of the post..."
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-400 text-sm font-semibold mb-2">Full Content</label>
                                    <textarea
                                        name="content"
                                        value={postFormData.content}
                                        onChange={handlePostChange}
                                        required
                                        rows={6}
                                        className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 transition-all"
                                        placeholder="Write your tech article here..."
                                    />
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-gray-400 text-sm font-semibold mb-2">Category</label>
                                        <input
                                            type="text"
                                            name="category"
                                            value={postFormData.category}
                                            onChange={handlePostChange}
                                            required
                                            className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-yellow-400 transition-all"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-gray-400 text-sm font-semibold mb-2">Read Time</label>
                                        <input
                                            type="text"
                                            name="readTime"
                                            value={postFormData.readTime}
                                            onChange={handlePostChange}
                                            className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-yellow-400 transition-all"
                                        />
                                    </div>
                                </div>
                            </>
                        )}

                        {/* PROJECTS FORM */}
                        {activeTab === "projects" && (
                            <>
                                <div>
                                    <label className="block text-gray-400 text-sm font-semibold mb-2">Project Title</label>
                                    <input
                                        type="text"
                                        name="title"
                                        value={projectFormData.title}
                                        onChange={handleProjectChange}
                                        required
                                        className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 transition-all"
                                        placeholder="Ex: Next.js SaaS Platform"
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-400 text-sm font-semibold mb-2">Description</label>
                                    <textarea
                                        name="description"
                                        value={projectFormData.description}
                                        onChange={handleProjectChange}
                                        required
                                        rows={3}
                                        className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 transition-all"
                                        placeholder="Built with React and Tailwind..."
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-400 text-sm font-semibold mb-2">Image URL (Cloudinary / Google Drive Link)</label>
                                    <input
                                        type="text"
                                        name="imageUrl"
                                        value={projectFormData.imageUrl}
                                        onChange={handleProjectChange}
                                        required
                                        className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-yellow-400 transition-all"
                                        placeholder="Ex: https://res.cloudinary.com/... or https://drive.google.com/uc?id=..."
                                    />
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-gray-400 text-sm font-semibold mb-2">Live URL</label>
                                        <input
                                            type="url"
                                            name="projectUrl"
                                            value={projectFormData.projectUrl}
                                            onChange={handleProjectChange}
                                            required
                                            className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-yellow-400 transition-all"
                                            placeholder="https://mywebsite.com"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-gray-400 text-sm font-semibold mb-2">Sort Order</label>
                                        <input
                                            type="number"
                                            name="order"
                                            value={projectFormData.order}
                                            onChange={handleProjectChange}
                                            className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-yellow-400 transition-all"
                                        />
                                    </div>
                                </div>
                            </>
                        )}

                        <div className="flex gap-4 mt-6">
                            <button
                                type="submit"
                                disabled={saving}
                                className={`flex-1 py-4 rounded-xl font-bold text-lg shadow-lg hover:scale-[1.02] transition-all duration-300 disabled:opacity-50 ${editId
                                    ? "bg-blue-500 text-white hover:bg-blue-600 hover:shadow-[0_0_20px_rgba(59,130,246,0.4)]"
                                    : "bg-gradient-to-r from-yellow-500 to-yellow-600 text-black hover:shadow-[0_0_20px_rgba(250,204,21,0.4)]"
                                    }`}
                            >
                                {saving ? (editId ? "Updating..." : "Publishing...") : (editId ? "Update" : "Publish")}
                            </button>
                            {editId && (
                                <button
                                    type="button"
                                    onClick={handleCancelEdit}
                                    className="px-6 py-4 rounded-xl bg-gray-600 text-white font-bold text-lg shadow-lg hover:bg-gray-500 hover:scale-[1.02] transition-all duration-300"
                                >
                                    Cancel
                                </button>
                            )}
                        </div>
                    </form>
                </div>

                {/* Right Side: Manage Items */}
                <div className="bg-black/60 backdrop-blur-lg border border-white/20 rounded-2xl p-8 h-fit max-h-[85vh] overflow-y-auto custom-scrollbar flex flex-col">
                    <div className="flex justify-between items-center mb-6 border-b border-white/10 pb-4 shrink-0">
                        <h2 className="text-3xl font-bold text-white capitalize">Manage {activeTab}</h2>
                    </div>

                    {loading ? (
                        <div className="text-yellow-400 animate-pulse text-center py-10 mt-10">Loading Database...</div>
                    ) : currentList.length === 0 ? (
                        <div className="text-gray-500 text-center py-10 mt-10">No {activeTab} in the database yet.</div>
                    ) : (
                        <div className="space-y-4 overflow-y-auto pr-2">
                            {currentList.map((item) => (
                                <div key={item._id} className="bg-white/5 border border-white/10 rounded-xl p-4 flex justify-between items-center hover:border-yellow-400/50 transition-colors">
                                    <div className="truncate pr-4 flex flex-col">
                                        <h3 className="text-lg font-bold text-white truncate">{item.title}</h3>
                                        {activeTab === "posts" ? (
                                            <p className="text-xs text-gray-400 mt-1">
                                                {new Date(item.createdAt).toLocaleDateString()} • {item.category}
                                            </p>
                                        ) : (
                                            <p className="text-xs text-blue-400 mt-1 truncate">
                                                Order: {item.order} • {item.projectUrl}
                                            </p>
                                        )}
                                    </div>

                                    <div className="flex gap-2">
                                        <button
                                            onClick={() => handleEdit(item)}
                                            className="p-3 bg-blue-500/10 text-blue-400 hover:bg-blue-500 hover:text-white rounded-lg transition-all"
                                            title="Edit"
                                        >
                                            <Edit2 className="w-5 h-5" />
                                        </button>
                                        <button
                                            onClick={() => handleDelete(item._id)}
                                            className="p-3 bg-red-500/10 text-red-500 hover:bg-red-500 hover:text-white rounded-lg transition-all"
                                            title="Delete"
                                        >
                                            <Trash2 className="w-5 h-5" />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

            </div>
        </div>
    );
}

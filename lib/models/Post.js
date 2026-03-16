import mongoose, { Schema } from "mongoose";

const postSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
        },
        summary: {
            type: String,
            required: true,
        },
        content: {
            type: String,
            required: true,
        },
        category: {
            type: String,
            required: true,
            default: "General",
        },
        readTime: {
            type: String,
            default: "5 min read",
        },
    },
    {
        timestamps: true, // Automatically adds createdAt and updatedAt
    }
);

// Check if the model already exists to prevent OverwriteModelError in Next.js development
const Post = mongoose.models.Post || mongoose.model("Post", postSchema);

export default Post;

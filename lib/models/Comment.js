import mongoose, { Schema } from "mongoose";

const commentSchema = new Schema(
    {
        postId: {
            type: String,
            required: true,
            index: true,
        },
        author: {
            type: String,
            required: true,
        },
        content: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

const Comment = mongoose.models.Comment || mongoose.model("Comment", commentSchema);

export default Comment;

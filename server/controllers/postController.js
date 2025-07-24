const Post = require("../models/Post");

const LIMIT = 5;

// Get all posts
const getPosts = async(req, res) => {
    try {
        const { search = "", page = 1 } = req.query;
        const posts = await Post.find({ title:  { $regex: search, $options: "i" } }).skip((page - 1) * LIMIT).limit(LIMIT);
        res.status(200).json(posts);
    } catch (err) {
        console.log("Error while getting posts", err);
        res.status(500).json({ message: "Error while getting posts" });
    }
}

// Create a new post
const createPost = async(req, res) => {
    try {
        const post = req.body;
        const newPost = new Post(post);
        await newPost.save();
        res.status(201).json(newPost);
    } catch (error) {
        console.log("Error while creating post");
        res.status(500).json({ message: "Error while creating posts" });
    }
}

// Delete a post
const deletePost = async(req, res) => {
    try {
        const { id } = req.params;
        await Post.findByIdAndDelete(id);
        res.status(200).json({ message: "Post deleted successfully" });
    } catch (error) {
        console.log("Error while deleting post");
        res.status(500).json({ message: "Error while deleting posts" });
    }
}

module.exports = {
    getPosts,
    createPost,
    deletePost
}
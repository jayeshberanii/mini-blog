const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    tags: {
        type: [String],
    }
}, {
    timestamps: true
})

const Post = mongoose.model('Post', postSchema);
module.exports = Post;
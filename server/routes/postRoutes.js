const express = require('express');
const middleware = require('../middleware/errorHandler');
const { getPosts, createPost, deletePost } = require('../controllers/postController');

const router = express.Router();

// Get all posts
router.get('/', middleware, getPosts)

// Create a new post
router.post('/', middleware, createPost)

// Delete a post
router.delete('/:id', middleware, deletePost)

module.exports = router;

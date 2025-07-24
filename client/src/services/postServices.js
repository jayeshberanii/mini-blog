import { axiosInstance } from "./axios";


// Get all posts with search and page number
export const getPosts = async(search, page) => {
    try {
        let url = "/posts?";
        if (search) {
            url += `search=${search}&`;
        }
        if (page) {
            url += `page=${page}`;
        }
        const response = await axiosInstance.get(url);
        return response.data;
    } catch (error) {
        console.log("Error while getting posts");
    }
}

export const getPost = async(id) => {
    try {
        const response = await axiosInstance.get(`/posts/${id}`);
        return response.data;
    } catch (error) {
        console.log("Error while getting post");
    }
}

// Create new post
export const createPost = async(post) => {
    try {
        const response = await axiosInstance.post('/posts', post);
    } catch (error) {
        console.log("Error while creating post");
    }
}

// Delete post 
export const deletePost = async(id) =>{
    try {
        const response = await axiosInstance.delete(`/posts/${id}`);
        return response.data;
    } catch (error) {
        console.log("Error while deleting post");
    }
}
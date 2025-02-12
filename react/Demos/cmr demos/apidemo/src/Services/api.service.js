import axios from "axios";

const BASE_URL = "https://jsonplaceholder.typicode.com";

const ApiService = {
  // Get all posts
  getAllPosts: async () => {
    try {
      const response = await axios.get(`${BASE_URL}/posts`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // Get single post
  getPost: async (id) => {
    try {
      const response = await axios.get(`${BASE_URL}/posts/${id}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // Create post
  createPost: async (postData) => {
    try {
      const response = await axios.post(`${BASE_URL}/posts`, postData);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};

export default ApiService;

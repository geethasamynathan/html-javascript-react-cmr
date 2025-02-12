import React, { useState, useEffect } from "react";
import ApiService from "../Services/api.service";

const PostDetail = ({ id }) => {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchPost();
  }, [id]);

  const fetchPost = async () => {
    try {
      const data = await ApiService.getPost(id);
      setPost(data);
      setLoading(false);
    } catch (err) {
      setError("Failed to fetch post");
      setLoading(false);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (!post) return <div>No post found</div>;

  return (
    <div className="post-detail">
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
};

export default PostDetail;

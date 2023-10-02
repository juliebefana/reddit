import React from "react";
import PostItem from "./PostItem";
import { Link } from "react-router-dom";

function Posts({ posts }) { 
  return (
    <div className="posts">
      {Array.isArray(posts) ? (
        posts.map((post) => (
          <Link to={`/post/${post.id}`} key={post.id}>
            <PostItem post={post} />
          </Link>
        ))
      ) : (
        <p>No posts available</p>
      )}
    </div>
  );
}

export default Posts;


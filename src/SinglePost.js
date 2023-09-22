import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./SinglePost.css";

function SinglePost() {
  const { postId } = useParams();
  const [post, setPost] = useState(null);
  const [author, setAuthor] = useState(null);
  const [comments, setComments] = useState([]);
  const [reactions, setReactions] = useState(0);
  const [newComment, setNewComment] = useState(""); // State for the new comment input

  useEffect(() => {
    // Fetch the data for the selected post
    fetch(`https://dummyjson.com/posts/${postId}`)
      .then((res) => res.json())
      .then((data) => {
        console.log("Post data:", data);
        setPost(data);
        setReactions(data.reactions);
      });
  }, [postId]);

  useEffect(() => {
    if (post) {
      // Fetch the author data for the post
      fetch(`https://dummyjson.com/users/${post.userId}`)
        .then((res) => res.json())
        .then((data) => {
          console.log("Author data:", data);
          setAuthor(data);
        });
    }
  }, [post]);

  useEffect(() => {
    // Fetch comments data for the selected post
    fetch(`https://dummyjson.com/comments?postId=${postId}`)
      .then((res) => res.json())
      .then((data) => {
        console.log("Comments data:", data);
        setComments(data.comments);
      });
  }, [postId]);

  const handleAddComment = () => {
    if (!newComment) {
      alert("Please enter your comment.");
      return;
    }

    // Prepare the comment data
    const commentData = {
      body: newComment,
      postId: postId,
      userId: 5, // Replace with the actual user ID or logic to get the user ID
    };

    // Send a POST request to add the new comment
    fetch("https://dummyjson.com/comments/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(commentData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("New Comment:", data);
        setComments([...comments, data]); // Add the new comment to the local state
        setNewComment(""); // Clear the comment input
      })
      .catch((error) => {
        console.error("Error adding comment:", error);
      });
  };

  return (
    <div className="single-post">
      {post && (
        <>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
          <p>Tags: {post.tags.join(", ")}</p>
          {author && <p>Author: {author.firstName} {author.lastName}</p>}
          {reactions > 0 && <p>Total Reactions: {reactions}</p>}
          {/* Display comments */}
          <div className="comments">
            <h3>Comments</h3>
            <ul>
              {comments.map((comment) => (
                <li key={comment.id}>
                  <p>{comment.body}</p>
                  <p>Comment by: {comment.user.username}</p>
                </li>
              ))}
            </ul>
          </div>
          {/* Comment input form */}
          <div className="comment-input">
            <input
              type="text"
              placeholder="Add a comment..."
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
            />
            <button onClick={handleAddComment}>Add Comment</button>
          </div>
        </>
      )}
    </div>
  );
}

export default SinglePost;

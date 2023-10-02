import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'; 
import SideNav from './SideNav'; 
import Main from './Main'; 
import Header from './Header'; 
import Posts from './Posts'; 
import SinglePost from './SinglePost'; 
import NewPost from './NewPost'; 
import RightSidebar from './RightSidebar';

function App() {
  const [showNewPostForm, setShowNewPostForm] = useState(false);
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch users' data from the API
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data.users);
      })
      .catch((error) => console.error("Error fetching users:", error));
  }, []);

  useEffect(() => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data.posts);
      })
      .catch((error) => console.error("Error fetching posts:", error));
  }, []);

  function handlePostCreated(newPostData) {
    console.log("New post created:", newPostData);
    setPosts((prevPosts) => [newPostData, ...prevPosts]);
  }

  return (
    <Router>
      <div className="App container">
        <SideNav />
        <Main>
          <Header />
          <button onClick={() => setShowNewPostForm(!showNewPostForm)}>Create New Post</button>
          {showNewPostForm && <NewPost users={users} onPostCreated={handlePostCreated} />}
          <Routes>
            <Route path="/" element={<Posts posts={posts} />} />
            <Route path="/post/:postId" element={<SinglePost />} />
          </Routes>
        </Main>
        <RightSidebar />
      </div>
    </Router>
  );
}

export default App;

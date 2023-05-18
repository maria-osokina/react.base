import React, { useState } from "react";
import './styles/App.css';
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";


function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'Javascript', body: 'Description' },
    { id: 2, title: 'Typescript', body: 'Description' },
    { id: 3, title: 'React', body: 'Description' }
  ])

  const createPost = (newPost) => {
    setPosts([...posts, {...newPost}]);
  }

  const removePost = (post) => {
    setPosts([...posts.filter(p => p.id !== post.id)])
  }

  return (
    <div className="App">
      <PostForm create={createPost} />
      <PostList posts={posts} remove={removePost} title="Посты про JS" />
    </div>
  );
}

export default App;

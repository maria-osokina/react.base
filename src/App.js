import React, { useMemo, useState } from "react";
import './styles/App.css';
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";



function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'Javascript', body: 'a Description' },
    { id: 2, title: 'Typescript', body: 'b Description' },
    { id: 3, title: 'React', body: 'c Description' }
  ])

  const [filter, setFilter] = useState({sort: '', query: ''})

  const sortedPosts = useMemo(() => {
    return filter.sort ? [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort])) : posts;
   }, [filter.sort, posts])

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query.toLowerCase()));
  }, [filter.query, sortedPosts])

  const createPost = (newPost) => {
    setPosts([...posts, {...newPost}]);
  }

  const removePost = (post) => {
    setPosts([...posts.filter(p => p.id !== post.id)]);
  }

  return (
    <div className="App">
      <PostForm create={createPost} />
      <hr style={{margin: "15px 0"}} />
      <PostFilter filter={filter} setFilter={setFilter} />
      <PostList posts={sortedAndSearchedPosts} remove={removePost} title="Посты про JS" />
    </div>
  );
}

export default App;

import React, { useState } from "react";
import './styles/App.css';
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";


function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'Javascript', body: 'a Description' },
    { id: 2, title: 'Typescript', body: 'b Description' },
    { id: 3, title: 'React', body: 'c Description' }
  ])

  const [selectedSort, setSelectedSort] = useState("")

  const createPost = (newPost) => {
    setPosts([...posts, {...newPost}]);
  }

  const removePost = (post) => {
    setPosts([...posts.filter(p => p.id !== post.id)]);
  }

  const sortPosts = (sort) => {
    setSelectedSort(sort);
    setPosts([...posts].sort((a,b)=>a[sort].localeCompare(b[sort])))
  }

  return (
    <div className="App">
      <PostForm create={createPost} />
      <hr style={{margin: "15px 0"}} />
      <div>
        <MySelect
          value={selectedSort}
          onChange={sort => sortPosts(sort)}
          defaultValue="Сортировка по"
          options={[
            { value: 'title', name: 'По названию' },
            { value: 'body', name: 'По описанию' }
          ]}
        />
      </div>
      {posts.length > 0
        ? <PostList posts={posts} remove={removePost} title="Посты про JS" />
        : <h1 style={{textAlign: "center", marginTop: 15}}>Посты еще не написали!</h1>
      }

    </div>
  );
}

export default App;

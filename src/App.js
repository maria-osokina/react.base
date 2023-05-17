import React, { useRef, useState } from "react";
import './styles/App.css';
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";


function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'Javascript', body: 'Description' },
    { id: 2, title: 'Typescript', body: 'Description' },
    { id: 3, title: 'React', body: 'Description' }
  ])

  const bodyInputRef = useRef();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const addNewPost = (event) => {
    event.preventDefault();
    console.log(bodyInputRef.current.value)
  }

  return (
    <div className="App">
      <form>
        {/* Управляемый компонент */}
        <MyInput
          type="text"
          placeholder="Название поста"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        {/* Неуправляемый / Неконтролируемый компонент */}
        <MyInput
          ref={bodyInputRef}
          type="text"
          placeholder="Описание поста"
        />
        <MyButton onClick={addNewPost}>Создать пост</MyButton>
      </form>
      <PostList posts={posts} title="Посты про JS" />
    </div>
  );
}

export default App;

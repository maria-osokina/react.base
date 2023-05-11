import React from "react";
// import ClassCounter from "./components/ClassCounter";
import './styles/App.css';
import PostItem from "./components/PostItem";

function App() {
  return (
    <div className="App">
      <PostItem post={{ id: 1, title: 'Javascript', body: 'Description' }} />
      <PostItem post={{ id: 2, title: 'Typescript', body: 'Description' }} />
      <PostItem post={{ id: 3, title: 'React', body: 'Description' }} />

      {/* <ClassCounter /> */}
    </div>
  );
}

export default App;

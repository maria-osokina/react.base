import React from "react";
// import ClassCounter from "./components/ClassCounter";
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <div className="post">
        <div className="post__content">
          <strong>1. Javascript</strong>
          <div>Javascript - это язык программирования</div>
        </div>
        <div className="post__btns">
          <button>Удалить</button>
        </div>
      </div>
      {/* <ClassCounter /> */}
    </div>
  );
}

export default App;

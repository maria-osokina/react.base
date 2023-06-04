import React from "react";
import './styles/App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navigate } from 'react-router'
import About from "./pages/About";
import Posts from "./pages/Posts";
import Error from "./pages/Error";
import Navbar from "./components/UI/navbar/Navbar";


function App() {
  return (
    <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/error" element={<Error />} />
      </Routes>
      <Navigate to="/error" />
    </BrowserRouter>
  )
}

export default App;

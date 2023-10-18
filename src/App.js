import React from "react";
import Navbar from "./components/Navbar";
import Scanner from "./components/Scanner";
import Register from "./components/Register";
import Login from "./components/Login";
import Chat from "./components/Chat";
import Image from "./components/Image";

import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index path="/" element={<Scanner />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/chat" element={<Chat />}></Route>
        <Route path="/image" element={<Image />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;

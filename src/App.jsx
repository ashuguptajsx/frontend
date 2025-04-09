import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Explore from "./components/Explore";
import Likes from "./components/Likes";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <div className="flex text-white">
      <Sidebar />
      <div className="max-w-7xl my-5  text-white mx-auto transition-all duration-300 flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/likes" element={<Likes />} />
        </Routes>
        <Toaster/>
        <Footer />
      </div>
    </div>
  );
};

export default App;

/* eslint-disable no-unused-vars */
import React from "react";
import Login from "./components/pages/Login";
import Home from "./components/pages/Home";
import Register from "./components/pages/Register";
import Dashboard from "./components/pages/Dashboard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Preview from "./components/pages/Preview";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/preview" element={<Preview />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;

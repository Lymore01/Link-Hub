/* eslint-disable no-unused-vars */
import React from "react";
import Login from "./components/pages/Login";
import Home from "./components/pages/Home";
import Register from "./components/pages/Register";
import Dashboard from "./components/pages/Dashboard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Preview from "./components/pages/Preview";
import Profile from "./components/pages/Profile";
import ForgotPassword from "./components/pages/ForgotPassword";
import Analytics from "./components/pages/Analytics";

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
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;

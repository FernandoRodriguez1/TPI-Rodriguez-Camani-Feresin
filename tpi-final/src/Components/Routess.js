import React from "react";
import Register from "./Pages/Register";
import Home from "./Pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import Error404 from "./Pages/Error404";
function Routess() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route path="*" element={<Error404 />} />
        <Route exact path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default Routess;

// {props.state ? (
//   <Route path="" element={<Home />} />
// ) : (
//   <Route path="/login" element={<Login />} />
// )}

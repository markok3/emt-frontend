import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-elements">
        <Link to="/">Home</Link>
        <Link to="/book/add">Add Book</Link>
        <Link to="/categories">Categories</Link>
      </div>
    </div>
  );
};

export default Navbar;

import React from "react";
import navbar_img from "../images/navbar.png";
import { Link } from "react-router-dom";
import Register from "./Register";

import "./Navbar.css";

const Navbar = () => {
  return (
    <nav style={{ height: "15vh" }} className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img
            src={navbar_img}
            style={{ height: "12vh", width: "auto", maxWidth: "100%" }} // Adjusted for responsiveness
            alt=""
          />
        </Link>
        <div className="d-flex">
          <button className="btn btn-outline-light ml-auto" type="button">
            <Link to="/Register" style={{ textDecoration: "none", color: "white" }} className="register-nav-link" > Register </Link>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

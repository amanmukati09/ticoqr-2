import React from "react";
import navbar_img from "../images/navbar.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav className="navbar navbar-expand-lg mb-5">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src={navbar_img} style={{ height: "10vh", width: "10vh" }} alt="" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
          <form className="d-flex m-2" role="search">
            <button
              className="btn btn-outline-dark mx-2"
              onClick={(e) => {
                e.preventDefault();
                navigate("/Chat");
              }}
              type="button"
            >
              Chat
            </button>
            <button
              className="btn btn-outline-dark mx-2"
              onClick={(e) => {
                e.preventDefault();
                navigate("/Image");
              }}
              type="button"
            >
              AI Image
            </button>
            <button
              className="btn btn-outline-dark"
              onClick={(e) => {
                e.preventDefault();
                navigate("/Register");
              }}
              type="button"
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light ">
        <div className="container">
          {/* <img src={Osans} alt="" width="40"/> */}
          <a className="navbar-brand" href="##">
            OSans
          </a>
          <button
            className="navbar-toggler toggle"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ml-auto">
              <Link to="/register">
                <a className="nav-item nav-link one nounderline" href="##">
                  Register
                </a>
              </Link>
              <Link to="/login">
                <a className="nav-item nav-link nounderline" href="##">
                  Login
                </a>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

import React from "react";
import "./NavFixTop.css";
import { Link } from "react-router-dom";

const NavFixTop = () => {
  return (
    <div className="">
      <nav class="navbar sticky-top navbar-light fixtop">
        <a class="navbar-brand" href="##">
          OSans
        </a>
        <div className=" ml-auto">
          <Link to="/">
            <i class="fa fa-home" style={{fontSize: "30px",color: "black"}}/>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default NavFixTop;

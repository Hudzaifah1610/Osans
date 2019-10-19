import React from "react";
import "./NavTop2.css";
import mountain from "../../../Image/mountain.jpeg";

const NavTop2 = () => {
  return (
    <div className="row in-chatt">
      <div className="col ">
          <div className="wrapp-nav-all">
            <img src={mountain} alt="" className="float-left"/>
            <div className="wrapp-desc">
          <h5>Abdillah Al-Atsary</h5>
          <p>Online</p>
          </div>
          </div>
        </div>
      </div>
  );
};

export default NavTop2;

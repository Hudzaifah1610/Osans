import React from "react";
import "./Description.css";
import phonee from "../../../Image/phonee.svg";

const Description = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col desc">
          <div className="row">
            <div className="col-lg-3">
              <img src={phonee} alt="" width="300" className="image" />
            </div>
            <div className="col-lg-7 twoo">
              <h3 className="title">Your account is guaranteed safe</h3>
              <p className="in-title">
                We believe that privacy is essential to honest self-expression.
                It’s hard to be yourself without a sense of security! That’s why
                O Sans was designed to share minimal data — safely, and only
                with your permission
              </p>
              <div className="row">
              <div className="col-lg-4">
              <i className="fa fa-check-square-o mr-1 float-left">
              </i>
              <h6 className="title-icon"> Guaranteed Quality</h6>
              <p  className="in-title-icon">Insha Allah You will feel the quality that is different from other applications</p>
              </div>
              <div className="col-lg-4 ">
              <i className="fa fa-linux mr-1 float-left">
              </i>
              <h6 className="title-icon">Your Profil</h6>
              <p  className="in-title-icon">Your profile can be changed anytime and anywhere and share the story with it</p>
              </div>
              <div className="col-lg-4 ">
              <i className="fa fa-weixin mr-1 float-left">
              </i>
              <h6 className="title-icon">Chatt Room</h6>
              <p className="in-title-icon">Osans provides a minimalist and elegant chat room for you to share with your friends</p>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;

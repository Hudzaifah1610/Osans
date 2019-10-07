import React from "react";
import "./TwoDesc.css";
import phooon from "../../../Image/phooon.png";

const TwoDesc = () => {
  return (
    <div className="container ">
      <div className="row">
        <div className="col twoDesc">
          <div className="row">
            <div className="col-lg text">
              <h5>
                Chatt{" "}
                <a href="###" alt="" className="btn btn-outline-info btn-sans">
                  sans
                </a>{" "}
              </h5>
              <h2>Relaxed with a chat in OSans</h2>
              <p className="inn-title">
                Begin to share their favorite moments from your application with
                their friends on the Osans application.
              </p>
              <i className="fa fa-weixin on-title"><p className="float-right ml-1 oni-title"> Comfortable Chatt</p></i>
              <p className="onn-title">
                enter the casual chat room to chat with your friends and family
                and enjoy the sensation ..
                <br />
                This chat room is still in beta, in the future God willing will
                be updated to a better one
              </p>
              <a href="##" className="btn btn-primary fa fa-desktop btn-os"> Dekstop</a>
              <a href="##" className="btn btn-outline-primary fa fa-android btn-os"> Android</a>
            </div>
            <div className="col-lg imagee">
              <img src={phooon} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TwoDesc;

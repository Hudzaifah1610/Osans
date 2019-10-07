import React from "react";
import "./Panel.css";
import key from "../../../Image/key.jpg";
import call from "../../../Image/call.png";
import chat from "../../../Image/chat.png";
import profile from "../../../Image/profile.png";

const Panel = () => {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-10 panel">
          <div className="row">
            <div className="col-lg one">
              <img src={key} alt="" width="100" />
              <p>
                Login{" "}
                <a href="###" className="btn btn-outline-primary">
                  sans
                </a>{" "}
              </p>
            </div>
            <div className="col-lg two">
              <img src={call} alt="" width="75" />
              <p>
                Call{" "}
                <a href="###" className="btn btn-outline-primary">
                  sans
                </a>{" "}
              </p>
            </div>
            <div className="col-lg three">
              <img src={chat} alt="" width="75" />
              <p>
                Chatt{" "}
                <a href="###" className="btn btn-outline-primary">
                  sans
                </a>{" "}
              </p>
            </div>
            <div className="col-lg four">
              <img src={profile} alt="" width="75" />
              <p className="end">
                Update{" "}
                <a href="###" className="btn btn-outline-primary">
                  sans
                </a>{" "}
              </p>
            </div>
          </div>
          <div className="row text-panel">
            <div className="col-lg">
              <p>
                complete and easy features that make you always comfortable to
                interact with others-
                <br />
                What are you waiting for, let's start now using the OSans
                application.<br/>
                 We put customer satisfaction first
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Panel;

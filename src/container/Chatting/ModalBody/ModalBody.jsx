import React from "react";
import "./ModalBody.css";

const ModalBody = () => {
  return (
    <div className="row modalbody">
      <div className="col">
        <div className="row onne inbox">
          <i className="fa fa-inbox"></i>
          <p>Inbox</p>
        </div>
        <div className="row inbox">
          <i className="fa fa-star"></i>
          <p>Privacy</p>
        </div>
        <div className="row inbox">
          <i className="fa fa-envelope"></i>
          <p>Email</p>
        </div>
        <div className="row inbox">
          <i className="fa fa-cog"></i>
          <p>Setting</p>
        </div>
        <div className="row inbox">
          <i className="fa fa-sign-out"></i>
          <p>Log Out</p>
        </div>
      </div>
    </div>
  );
};

export default ModalBody;

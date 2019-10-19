import React from "react";
import "./NavTop.css";
import human5 from "../../../Image/human5.jpeg";
import ModalBody from "../ModalBody/ModalBody";

const NavTop = () => {
  return (
    <div className="navtop">
      <div className="row in-profile">
        <div className="col ">
          <button
            type="button"
            className="btn btn-demo shadow-none"
            data-toggle="modal"
            data-target="#myModal"
          >
            <i className="fa fa-bars float-left icon"></i>
            <h2 className="float-left">OSans</h2>
          </button>
          {/* <!-- Modal --> */}
          <div
            className="modal left fade"
            id="myModal"
            tabindex="-1"
            role="dialog"
            aria-labelledby="myModalLabel"
          >
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <nav class="navbar fixed-top navbar-light">
                    <a class="navbar-brand" href="###">
                      {" "}
                    </a>
                  </nav>
                  <div className="imagesy float-left">
                    <label for="upload">
                      <i
                        className="fa fa-camera"
                        aria-hidden="true"
                        style={{ cursor: "pointer" }}
                      ></i>
                      <input
                        type="file"
                        id="upload"
                        style={{ display: "none" }}
                      />
                    </label>
                  </div>
                </div>
                <nav class="navbar navbar-toggleable-md navbar-light uniq">
                  <div
                    class="down"
                    type=""
                    data-toggle="collapse"
                    data-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavDropdown"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <p className="float-left pe-email">Osans2019@gmail.com</p>
                    <i className="fa fa-caret-down iconn"></i>
                  </div>
                  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                      <a class="nav-item nav-link" href="##">
                        Account <span class="sr-only">(current)</span>
                      </a>
                      <a class="nav-item nav-link" href="##">
                        Reference
                      </a>
                      <a class="nav-item nav-link" href="##">
                        Password
                      </a>
                    </div>
                  </div>
                </nav>

                <div className="modal-body">
                  <ModalBody />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavTop;

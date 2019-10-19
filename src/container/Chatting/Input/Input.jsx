import React, { Component } from "react";
import "./Input.css";
import Emoji from "./Emoji";

class Input extends Component {
  state = {};
  render() {
    return (
      <div className="innput">
        <div className="row">
          <div className="col">
            <div className="row">
              <div className="col featur-input">
                <i
                  className="fa fa-emoji"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                ></i>

                <div class="dropdown-menu">
                  <Emoji />
                </div>
                <div className="imagesy float-left">
                  <label for="upload">
                    <i
                      className="fa fa-paperclip"
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
                <input type="text" placeholder="Kirim Pesan . . ." />
                <i className="fa fa-send"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Input;

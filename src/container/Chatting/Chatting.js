import React from "react";
import "./Chatting.css";
import NavTop from "./NavTop/NavTop";
import NavTop2 from "./NavTop/NavTop2";
import List from "./List/List";
import ChatRoom from "./ChatRoom/ChatRoom";
import Input from "./Input/Input";

const Chatting = () => {
  return (
    <div className="chatting">
      <div className="containered">
        <div className="row">
          <div className="col">
            <div className="row">
              <div className="col-lg-3 sattu">
                <NavTop />
              </div>
              <div className="col-lg duwwa">
                <NavTop2 />
              </div>
            </div>
            <div className="row">
              <div className="col-lg-3 tigga">
                <List />
              </div>
              <div className="col-lg emmpat">
                <ChatRoom />
              </div>
            </div>
            <div className="row">
              <div className="col-lg-3 limma"></div>
              <div className="col-lg ennam">
                <Input />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chatting;

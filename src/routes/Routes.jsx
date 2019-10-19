import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Chatting from "../container/Chatting/Chatting";

function Routes() {
  return (
    <Router>
      <Chatting/>
    </Router>
  );
}
export default Routes;

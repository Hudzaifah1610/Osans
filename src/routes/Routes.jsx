import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LandingPage from "../components/LandingPage/LandingPage";
import Register from "../container/Register/Register";
import Login from "../container/Login/Login";

function Routes() {
  return (
    <Router>
      <Route exact path="/" component={LandingPage} />
      <Route path="/register" component={Register} />
      <Route path="/login" component={Login} />
    </Router>
  );
}
export default Routes;

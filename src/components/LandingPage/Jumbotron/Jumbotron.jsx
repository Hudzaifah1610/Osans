import React from "react";
import { Link } from "react-router-dom";
import "./Jumbotron.css";

const Jumbotron = () => {
  return (
    <>
      <div class="jumbotron jumbotron-fluid">
        <div class="container">
          <h1 class="display-4">
            Messages Relaxed.
            <br />
            Safe.Comfortable.
          </h1>
          <p class="lead">
            Interact casually through chat with everyone
            <br />
            With OSans, get the fast, simple and <br />
            secure messaging and calling application for free
          </p>
          <Link to="/register">
            <button type="button" class="btn btn-primary">
              Join Us
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Jumbotron;

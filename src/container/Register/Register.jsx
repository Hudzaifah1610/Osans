import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Register.css";
import compeny from "../../Image/compeny.png";
import logo from "../../Image/logo.png";
import man from "../../Image/man.ico";
import Footer from "../../components/LandingPage/Footer/Footer";
import NavFixTop from "../NavFixTop/NavFixTop";

class Register extends Component {
  state = {};
  render() {
    return (
      <div className="boody">
        <NavFixTop />
        <div className="container register">
          <div className="row">
            <div className="col all">
              <div className="row">
                <div className="col-lg-4 image">
                  <h1>Register</h1>
                  <p>Let's join in our application</p>
                  <img src={compeny} className="img-fluid" alt="" />
                </div>
                <div className="col-lg-6 innput">
                  {" "}
                  <img src={man} alt="" width="40" className="float-right" />
                  <img src={logo} alt="" className="ml-1" />
                  <p className="ml-1">Change the world with your hands</p>
                  <form autocomplete="off">
                    <div className="form-group">
                      <div className="icon">
                        <i className="fa fa-user"></i>
                        <input
                          type="text"
                          className="form-control  shadow-none"
                          style={{ fontWeight: "100", fontFamily: "Domine" }}
                          id="exampleInputPassword1"
                          placeholder="Username"
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="icon">
                        <i className="fa fa-envelope-open icon"></i>
                        <input
                          type="email"
                          className="form-control  shadow-none"
                          style={{ fontWeight: "100", fontFamily: "Domine" }}
                          id="exampleInputPassword1"
                          placeholder="Email"
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="icon">
                        <i className="fa fa-key icon"></i>
                        <input
                          type="password"
                          className="form-control  shadow-none"
                          style={{ fontWeight: "100", fontFamily: "Domine" }}
                          id="exampleInputPassword1"
                          placeholder="Password"
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="icon">
                        <i className="fa fa-key icon"></i>
                        <input
                          type="password"
                          className="form-control  shadow-none"
                          style={{ fontWeight: "100", fontFamily: "Domine" }}
                          id="exampleInputPassword1"
                          placeholder="Re-Password"
                        />
                      </div>
                    </div>
                    <button type="submit" className="btn btn-primary">
                      Submit
                    </button>
                    <Link to="/login">
                      <small>Already Have an Account?</small>
                    </Link>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Register;

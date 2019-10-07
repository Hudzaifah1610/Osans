import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import compeny from "../../Image/compeny.png";
import logo from "../../Image/logo.png";
import man from "../../Image/man.ico";
import Footer from "../../components/LandingPage/Footer/Footer";
import NavFixTop from "../NavFixTop/NavFixTop";

const Login = () => {
  return (
    <div className="boody">
      <NavFixTop />
      <div className="container register">
        <div className="row">
          <div className="col all">
            <div className="row">
              <div className="col-lg-4 image">
                <h1>Login</h1>
                <p>Let's join in our application</p>
                <img src={compeny} className="img-fluid" alt="" />
              </div>
              <div className="col-lg-6 innput">
                {" "}
                <img src={man} alt="" width="40" className="float-right" />
                <img src={logo} alt="" className="ml-1" />
                <p className="ml-1">Change the world with your hands</p>
                <form autocomplete="off">
                  <div className="form-group e-mail">
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
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                  <div className="col-lg">
                    <Link to="/register">
                      <small className="small-login">Create an account</small>
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;

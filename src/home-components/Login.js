import React from "react";
import AVATAR from "../images/avatar.svg";
import { Link } from "react-router-dom";

const Login = (props) => {
  return (
    <div className="login">
      <form>
        <h3>Welcome</h3>
        <img className="avatar" src={AVATAR} />
        <div className="input-box one">
          <div className="input-image">
            <i className="fas fa-user"></i>
          </div>
          <div className="input-field">
             <input
              placeholder="Username"
              className="input"
              onChange={(e) => props.handleChange(e)}
              name="name"
              type="text"
            />
          </div>
        </div>
        <div className="input-box two">
          <div className="input-image">
            <i className="fas fa-lock"></i>
          </div>
          <div className="input-field">
       
            <input
              placeholder="Password"
              className="input"
              onChange={(e) => props.handleChange(e)}
              name="password"
              type="password"
            />
          </div>
        </div>
        <Link
          to="/"
          className="sub-btn"
          onClick={(e) => {
            props.handleLogin();
          }}
        >
          Submit
        </Link>
        <p className="toggle">
          Don't have an account? sign up{" "}
          <span onClick={props.toggleForm}>Here</span>
        </p>
      </form>
    </div>
  );
};

export default Login;

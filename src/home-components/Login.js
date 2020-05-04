import React from "react";
import AVATAR from "../images/avatar.svg";

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
            <label>Username</label>
            <input
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
            <label>Password</label>
            <input
              className="input"
              onChange={(e) => props.handleChange(e)}
              name="password"
              type="password"
            />
          </div>
        </div>
        <button
          className="sub-btn"
          onClick={(e) => {
            e.preventDefault();
            props.handleLogin();
          }}
        >
          Submit
        </button>
        <p className="toggle">
          Don't have an account? sign up{" "}
          <span onClick={props.toggleForm}>Here</span>
        </p>
      </form>
    </div>
  );
};

export default Login;

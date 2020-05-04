import React from "react";
import AVATAR from "../images/avatar.svg";

const Signup = (props) => {
  return (
    <div className="signup">
      <form>
        <h3>Sign Up</h3>
        <img className="avatar" src={AVATAR} />
        <div className="input-box one">
          <div className="input-image">
            <i className="fas fa-user"></i>
          </div>
          <div className="input-field">
            <label>Name</label>
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
            <i className="fas fa-user"></i>
          </div>
          <div className="input-field">
            <label>Email</label>
            <input
              className="input"
              onChange={(e) => props.handleChange(e)}
              name="email"
              type="email"
            />
          </div>
        </div>
        <div className="input-box two">
          <div className="input-image">
            <i className="fas fa-user"></i>
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
            props.handleSignup();
          }}
        >
          Submit
        </button>
        <p className="toggle">
          Have an account already? Log in
          <span onClick={props.toggleForm}> Here</span>
        </p>
      </form>
    </div>
  );
};

export default Signup;

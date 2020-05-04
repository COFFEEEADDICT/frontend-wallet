import React from "react";

const Signup = (props) => {
  return (
    <div className="signup">
      <h3>Don't have an account? Sign up now!</h3>
      <div className="input-box">
        <label>Name</label>
        <input
          onChange={(e) => props.handleChange(e)}
          name="name"
          type="text"
        />
      </div>
      <div className="input-box">
        <label>Email</label>
        <input
          onChange={(e) => props.handleChange(e)}
          name="email"
          type="email"
        />
      </div>
      <div className="input-box">
        <label>Password</label>
        <input
          onChange={(e) => props.handleChange(e)}
          name="password"
          type="password"
        />
      </div>
      <button onClick={props.handleSignup}>Submit</button>
    </div>
  );
};

export default Signup;

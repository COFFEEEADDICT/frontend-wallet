import React from "react";

const Login = (props) => {
  return (
    <div className="login">
      <h3>Sign In</h3>
      <div className="input-box">
        <label>Name</label>
        <input
          onChange={(e) => props.handleChange(e)}
          name="name"
          type="text"
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
      <button onClick={props.handleLogin}>Submit</button>
    </div>
  );
};

export default Login;

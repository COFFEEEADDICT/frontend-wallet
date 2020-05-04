import React from "react";
import Login from "../home-components/Login";
import Signup from "../home-components/Signup";

const Auth = (props) => {
  return (
    <div className="auth">
      <Login
        handleLogin={props.handleLogin}
        handleChange={props.handleChange}
      />
      <Signup
        handleSignup={props.handleSignup}
        handleChange={props.handleChange}
      />
    </div>
  );
};

export default Auth;

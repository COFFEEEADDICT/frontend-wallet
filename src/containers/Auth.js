import React, { Component } from "react";
import Login from "../home-components/Login";
import Signup from "../home-components/Signup";
import BG from "../images/bg.svg";
import Wave from "../images/wave.png";

class Auth extends Component {
  constructor() {
    super();
    this.state = {
      gotAccount: true,
    };
  }

  toggleForm = () => {
    this.setState({
      gotAccount: !this.state.gotAccount,
    });
  };

  render() {
    return (
      <div className="auth">
        <img class="wave" src={Wave} />
        <div className="auth-container">
          <div className="img">
            <img src={BG} />
          </div>
          {this.state.gotAccount ? (
            <Login
              handleLogin={this.props.handleLogin}
              handleChange={this.props.handleChange}
              toggleForm={this.toggleForm}
            />
          ) : (
            <Signup
              handleSignup={this.props.handleSignup}
              handleChange={this.props.handleChange}
              toggleForm={this.toggleForm}
            />
          )}
        </div>
      </div>
    );
  }
}

export default Auth;

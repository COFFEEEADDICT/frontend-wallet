import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Auth from "./containers/Auth";
import Dashboard from "./containers/Dashboard";
import Transactions from "./containers/Transactions";
import "./css/app.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      signedIn: false,
      user: null,
      name: "",
      email: "",
      password: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSignup = () => {
    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: this.state.name,
        email: this.state.email,
        password: this.state.password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        this.setState({
          signedIn: true,
          user: { name: data.name, email: data.email, balance: data.balance },
        });
      });
  };

  handleLogin = () => {
    fetch("http://localhost:3000/users")
      .then((res) => res.json())
      .then((data) => {
        const user = data.filter(
          (u) => u.name == this.state.name && u.password == this.state.password
        );
        console.log(user);
        if (user.length == 1) {
          this.setState({
            signedIn: true,
            user: {
              name:
                user[0].name.charAt(0).toUpperCase() + user[0].name.slice(1),
              email: user[0].email,
              balance: user[0].balance,
              transactions: user[0].transactions,
            },
          });
        }
      });
  };

  handleSignOut = () => {
    this.setState({
      signedIn: false,
      user: null,
    });
  };

  render() {
    return (
      <Router>
        <div className="app">
          <nav>
            <h5>
              Wallet <span>App</span>
            </h5>
            <ul>
              <li>
                <Link to="/">Dashboard</Link>
              </li>
              {this.state.signedIn ? (
                <li>
                  <Link to="/transactions">Transactions</Link>
                </li>
              ) : null}
              {this.state.signedIn ? (
                <li onClick={this.handleSignOut}>
                  <a href="#">Sign Out</a>
                </li>
              ) : (
                <li>
                  <Link to="/login">Login</Link>
                </li>
              )}
            </ul>
          </nav>
          <Switch>
            <Route path="/login">
              <Auth
                handleLogin={this.handleLogin}
                handleSignup={this.handleSignup}
                handleChange={this.handleChange}
              />
            </Route>
            <Route path="/transactions">
              <Transactions user={this.state.user} />
            </Route>
            <Route path="/">
              <Dashboard
                signedIn={this.state.signedIn}
                user={this.state.user}
              />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;

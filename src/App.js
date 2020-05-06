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
      users: [],
      currencies: [],
    };
  }

  componentDidMount() {
    this.fetchCurrencies();
  }

  fetchCurrencies = () => {
    fetch("http://localhost:3000/currencies")
      .then((res) => res.json())
      .then((data) => this.setState({ currencies: data }));
  };

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
        name: this.state.name.trim(),
        email: this.state.email.trim(),
        password: this.state.password.trim(),
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          signedIn: true,
          user: {
            id: data.id,
            name: data.name.charAt(0).toUpperCase() + data.name.slice(1),
            email: data.email,
            balance: data.balance,
          },
          users: data,
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
        if (user.length == 1) {
          this.setState({
            signedIn: true,
            user: {
              id: data.id,
              name:
                user[0].name.charAt(0).toUpperCase() + user[0].name.slice(1),
              email: user[0].email,
              balance: user[0].balance,
              transactions: user[0].transactions,
            },
            users: data,
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
                  <a href="/login">Sign Out</a>
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
              <Transactions
                currencies={this.state.currencies}
                users={this.state.users}
                user={this.state.user}
              />
            </Route>
            <Route path="/">
              <Dashboard
                users={this.state.users}
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

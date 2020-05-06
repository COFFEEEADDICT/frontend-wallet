import React, { Component } from "react";

import Chart from "../components/Chart";
import Form from "../components/Form";

import "../css/dashboard.css";

const API = "https://api.coindesk.com/v1/bpi/currentprice/GBP.json";

class Dashboard extends Component {
  state = {
    coin: "",
    updateTime: "",
    amount: 0,
    message: "",
    currency: "",
  };

  componentDidMount() {
    fetch(API)
      .then((res) => res.json())
      .then((data) =>
        this.setState({
          coin: data.bpi.GBP.rate,
          updateTime: data.time.updateduk,
        })
      );
  }

  render() {
    return (
      <div className="dashboard">
        <h2 className="dash-head">Welcome Back!</h2>
        <div className="chart">
          <p className="d-info">
            <span>Price Per ₿itcoin:</span> £{this.state.coin.slice(0, -5)}{" "}
            <br />
            <span>Last Updated On:</span> {this.state.updateTime}
          </p>
          <Chart />
        </div>
        <div className="chartFix form">
          <Form />
        </div>
      </div>
    );
  }
}
export default Dashboard;

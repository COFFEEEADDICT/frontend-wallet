import React, { Component } from "react";
import TransactionList from "../transaction-components/TransactionList";
import Transfer from "../transaction-components/Transfer";
import Filter from "../transaction-components/Filter";
import "../css/transaction.css";

class Transactions extends Component {
  constructor(props) {
    super();
    this.state = {
      user: props.user,
      filteredCurrency: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      filteredCurrency: e.target.value,
    });
  };

  render() {
    return this.state.user ? (
      <div className="transactions">
        <div className="transfers">
          <h2>Welcome {this.state.user.name}</h2>
          <p>View your recent transactions.</p>
          <Filter handleChange={this.handleChange} />
          <TransactionList transactions={this.state.user.transactions} />
        </div>
        <div className="make-payment">
          <Transfer user={this.state.user} />
        </div>
      </div>
    ) : null;
  }
}

export default Transactions;

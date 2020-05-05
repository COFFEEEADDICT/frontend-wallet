import React, { Component } from "react";
import TransactionList from "../transaction-components/TransactionList";
import Filter from "../transaction-components/Filter";
import "../css/transaction.css";

class Transactions extends Component {
  constructor(props) {
    super();
    this.state = {
      user: props.user,
      filteredCurrency: "",
      filteredDate: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      filteredCurrency: e.target.value,
    });
  };

  renderTransactions = () => {
    if (this.state.user != null) {
      return this.state.user.transactions.map((t) => {
        return (
          <tr className="t-card">
            <td>
              <i className="fas fa-lock"></i>
            </td>
            <td>{t.date.slice(0, -14)}</td>
            <td>{t.amount} </td>
            <td>Ben</td>
          </tr>
        );
      });
    }
  };

  render() {
    return this.state.user ? (
      <div className="transactions">
        <h2>{this.state.user.name}'s recent transactions.</h2>
        <div className="t-container">
          <Filter handleChange={this.handleChange} />
          <TransactionList renderTransactions={this.renderTransactions} />
        </div>
      </div>
    ) : null;
  }
}

export default Transactions;

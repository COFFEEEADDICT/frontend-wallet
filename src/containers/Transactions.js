import React, { Component } from "react";
import TransactionList from "../transaction-components/TransactionList";
import Filter from "../transaction-components/Filter";
import Modal from "react-modal";

import "../css/transaction.css";

class Transactions extends Component {
  constructor(props) {
    super();
    this.state = {
      user: props.user,
      filteredCurrency: "",
      filteredDate: "",
      tSelected: false,
      selectedT: [],
    };
  }

  handleChange = (e) => {
    this.setState({
      filteredCurrency: e.target.value,
    });
  };

  openModal = (t) => {
    this.setState({
      tSelected: true,
      selectedT: t,
    });
  };

  closeModal = () => {
    console.log("hi");
    this.setState({
      tSelected: false,
      selectedT: [],
    });
  };

  renderTransactions = () => {
    if (this.state.user != null) {
      return this.state.user.transactions.map((t) => {
        return (
          <tr onClick={(e) => this.openModal(t)} className="t-card">
            <td>
              <i className="fas fa-lock"></i>
            </td>
            <td>{t.date.slice(0, -14)}</td>
            <td>{t.amount} </td>
            <td>Ben </td>
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
          <Modal
            isOpen={this.state.tSelected}
            style={{
              content: {
                border: "1px solid rgb(59, 211, 159)",
              },
            }}
          >
            {this.state.tSelected ? (
              <div className="modal">
                <p>{this.state.selectedT.date.slice(0, -14)}</p>
                <p>Amount: {this.state.selectedT.amount}</p>
                <button onClick={this.closeModal}>close</button>
              </div>
            ) : null}
          </Modal>
          <Filter handleChange={this.handleChange} />
          <TransactionList renderTransactions={this.renderTransactions} />
        </div>
      </div>
    ) : null;
  }
}

export default Transactions;

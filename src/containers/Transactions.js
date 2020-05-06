import React, { Component } from "react";
import TransactionList from "../transaction-components/TransactionList";
import Filter from "../transaction-components/Filter";
import Modal from "react-modal";

import "../css/transaction.css";
import { findRenderedDOMComponentWithClass } from "react-dom/test-utils";

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

  findUser = (id) => {
    return this.props.users.filter((u) => u.id == id)[0].name;
  };

  findCurrency = (id) => {
    console.log(id);
    return this.props.currencies.filter((c) => c.id == id)[0].name;
  };

  filterTransactions = (transactions) => {
    return transactions.filter(
      (t) => t.currency_id == this.state.filteredCurrency
    );
  };

  renderTransactions = () => {
    if (this.state.user != null) {
      if (this.state.filteredCurrency.length > 0) {
        return this.filterTransactions(this.state.user.transactions).map(
          (t) => {
            return (
              <tr onClick={(e) => this.openModal(t)} className="t-card">
                <td>{this.findCurrency(t.currency_id)}</td>
                <td>{t.date.slice(0, -14)}</td>
                <td>{t.amount} </td>
                <td>{this.findUser(t.user_id)}</td>
                <td>{t.status.charAt(0).toUpperCase() + t.status.slice(1)}</td>
              </tr>
            );
          }
        );
      } else {
        return this.state.user.transactions.map((t) => {
          return (
            <tr onClick={(e) => this.openModal(t)} className="t-card">
              <td>{this.findCurrency(t.currency_id)}</td>
              <td>{t.date.slice(0, -14)}</td>
              <td>{t.amount} </td>
              <td>{this.findUser(t.user_id)}</td>
              <td>{t.status.charAt(0).toUpperCase() + t.status.slice(1)}</td>
            </tr>
          );
        });
      }
    }
  };

  render() {
    return this.state.user ? (
      <div className="transactions">
        <h2>{this.state.user.name}'s Transactions.</h2>
        <div className="t-container">
          <Modal
            isOpen={this.state.tSelected}
            style={{
              content: {
                border: "1px solid rgb(59, 211, 159)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "rgb(59, 211, 159)",
              },
            }}
          >
            {this.state.tSelected ? (
              <div className="modal">
                <h2>Transaction Summary</h2>
                <div className="t-card-content">
                  <p>
                    Status:{" "}
                    {this.state.selectedT.status.charAt(0).toUpperCase() +
                      this.state.selectedT.status.slice(1)}
                  </p>
                  <p>Date: {this.state.selectedT.date.slice(0, -14)}</p>
                  <p>Amount: {this.state.selectedT.amount}</p>
                  <p>{this.findCurrency(this.state.selectedT.currency_id)}</p>
                </div>
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

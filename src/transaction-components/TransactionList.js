import React from "react";

const TransactionList = (props) => {
  return (
    <div className="transaction-list">
      <table className="t-table">
        <thead className="t-head">
          <tr>
            <th>Type</th>
            <th>Date</th>
            <th>Amount</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>{props.renderTransactions()}</tbody>
      </table>
    </div>
  );
};

export default TransactionList;

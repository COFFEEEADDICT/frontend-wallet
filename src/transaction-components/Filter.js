import React from "react";

const Filter = (props) => {
  return (
    <div className="filter">
      <h3>Filter Options</h3>
      <select className="select" onChange={(e) => props.handleChange(e)}>
        <option disabled selected>
          Currency
        </option>
        <option value="">All</option>
        <option value="bitcoin">Bitcoin</option>
        <option value="ethereum">Ethereum</option>
      </select>
    </div>
  );
};

export default Filter;

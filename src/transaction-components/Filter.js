import React from "react";

const Filter = (props) => {
  return (
    <div className="filter">
      <select onChange={(e) => props.handleChange(e)}>
        <option value="">All</option>
        <option value="bitcoin">Bitcoin</option>
        <option value="ethereum">Ethereum</option>
      </select>
    </div>
  );
};

export default Filter;

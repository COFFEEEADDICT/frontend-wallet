import React from "react";

const Filter = (props) => {
  return (
    <div className="filter">
      <div className="t-input">
        <label>Currency</label>
        <select className="select" onChange={(e) => props.handleChange(e)}>
          <option value="">All</option>
          <option value="1">Bitcoin</option>
          <option value="2">Ethereum</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;

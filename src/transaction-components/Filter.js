import React from "react";

const Filter = (props) => {
  return (
    <div className="filter">
      <div className="t-input">
        <label>Currency</label>
        <select className="select" onChange={(e) => props.handleChange(e)}>
          <option value="">All</option>
          <option value="bitcoin">Bitcoin</option>
          <option value="ethereum">Ethereum</option>
        </select>
      </div>
      <div className="t-input">
        <label>User</label>
        <select className="select">
          <option disabled selected>
            User
          </option>
        </select>
      </div>
    </div>
  );
};

export default Filter;

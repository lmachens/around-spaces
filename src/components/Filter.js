import React from "react";

function Filter(props) {
  return (
    <select className="filter">
      <option>{props.filter.name}</option>
      <option>Filter 2</option>
      <option>Filter 3</option>
    </select>
  );
}

export default Filter;

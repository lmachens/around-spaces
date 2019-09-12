import React from "react";

function Filter(props) {
  return (
    <select className="filter">
      <option>{props.filter.name}</option>
      {props.filter.options.map(option => {
        return <option key={option}>{option}</option>;
      })}
    </select>
  );
}

export default Filter;

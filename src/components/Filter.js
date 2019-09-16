import React from "react";

function Filter(props) {
  return (
    <select
      className="filter"
      onChange={event => {
        props.onChange(props.filter.name, event.target.value);
      }}
    >
      <option>{props.filter.name}</option>
      {props.filter.options.map(option => {
        return <option key={option}>{option}</option>;
      })}
    </select>
  );
}

export default Filter;

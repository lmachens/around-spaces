import React from "react";
import styled from "styled-components";

const Dropdown = styled.select`
  width: 20%;
  height: 25px;
  border: solid #874c62 3px;
  border-radius: 5px;
  text-align: center;
  &:focus {
    outline: none;
  }
`;

function Filter({ onChange, filter, selectedValue }) {
  return (
    <Dropdown
      className="filter"
      onChange={event => {
        onChange(filter.name, event.target.value);
      }}
      value={selectedValue}
    >
      <option value="">Select {filter.name}</option>
      {filter.options.map(option => {
        return (
          <option key={option} value={option}>
            {option}
          </option>
        );
      })}
    </Dropdown>
  );
}

export default Filter;

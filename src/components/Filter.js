import React from "react";
import styled from "styled-components";

const Dropdown = styled.select`
  width: 25%;
  height: 25px;
  border-style: solid;
  border-width: 2px;
  border-color: ${props =>
    props.value ? props.theme.highlight : props.theme.secondary};
  border-radius: 5px;
  color: ${props => props.theme.text};
  background: ${props => props.theme.secondary};
  text-align: center;
  box-shadow: 0 5px 10px ${props => props.theme.shadow};
  &:focus {
    outline: none;
  }
`;

function Filter({ onChange, filter, selectedValue }) {
  return (
    <Dropdown
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

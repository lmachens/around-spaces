import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const ToggleButton = styled.span`
  height: 22px;
  width: 22px;
  border-radius: 11px;
  padding: 0px;
  font-size: 20px;
  cursor: pointer;
  position: absolute;
  right: 5px;
  top: 22px;
  &:focus {
    outline: none;
  }
`;

function DarkmodeToggleButton({ toggleTheme }) {
  return (
    <ToggleButton onClick={toggleTheme}>
      <span role="img" aria-label="darkmode toggle">
        🌗
      </span>
    </ToggleButton>
  );
}

export default DarkmodeToggleButton;

ToggleButton.propTypes = {
  toggleTheme: PropTypes.func.isRequired
};

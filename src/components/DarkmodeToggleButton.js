import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const ToggleButton = styled.span`
  height: 30px;
  border-radius: 11px;
  padding: 0px;
  font-size: 20px;
  cursor: pointer;
  &:focus {
    outline: none;
  }
`;

function DarkmodeToggleButton({ onToggleTheme }) {
  return (
    <ToggleButton onClick={onToggleTheme}>
      <span role="img" aria-label="darkmode toggle">
        🌗
      </span>
    </ToggleButton>
  );
}

export default DarkmodeToggleButton;

DarkmodeToggleButton.propTypes = {
  onToggleTheme: PropTypes.func.isRequired
};

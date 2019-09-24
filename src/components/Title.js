import React from "react";
import styled from "styled-components";
import DarkmodeToggleButton from "./DarkmodeToggleButton";

const Header = styled.header`
  z-index: 10;
  flex-shrink: 0;
  height: 70px;
  width: 100%;
  color: #fff;
  background: ${props => props.theme.main};
  text-align: center;
  box-shadow: 0 5px 5px ${props => props.theme.shadow};
  position: relative;
`;

function Title({ toggleTheme }) {
  return (
    <Header>
      <h1>around spaces</h1>
      <DarkmodeToggleButton toggleTheme={toggleTheme} />
    </Header>
  );
}

export default Title;

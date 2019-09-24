import React from "react";
import styled from "styled-components";
import DarkmodeToggleButton from "./DarkmodeToggleButton";

const Header = styled.header`
  z-index: 10;
  flex-shrink: 0;
  height: 40px;
  width: 100%;
  color: #fff;
  background: ${props => props.theme.main};
  text-align: center;
  box-shadow: 0 5px 5px ${props => props.theme.shadow};
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Headline = styled.h1`
  margin: 0;
  font-size: 1.6em;
`;

function Title({ toggleTheme }) {
  return (
    <Header>
      <Headline>around spaces</Headline>
      <DarkmodeToggleButton toggleTheme={toggleTheme} />
    </Header>
  );
}

export default Title;

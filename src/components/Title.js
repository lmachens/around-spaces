import React from "react";
import styled from "styled-components";
import DarkmodeToggleButton from "./DarkmodeToggleButton";
import Add from "../icons/Add";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Header = styled.header`
  z-index: 10;
  height: 40px;
  color: #fff;
  background: ${props => props.theme.main};
  box-shadow: 0 5px 5px ${props => props.theme.shadow};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;

const Headline = styled.h1`
  margin: 0;
  font-size: 1.6em;
`;

const AddLink = styled(Link)`
  height: 30px;
`;

const AddButton = styled(Add)`
  height: 30px;
  fill: #fff;
`;

export default function Title({ onToggleTheme }) {
  return (
    <Header>
      <AddLink to="/new">
        <AddButton />
      </AddLink>
      <Headline>around spaces</Headline>
      <DarkmodeToggleButton onToggleTheme={onToggleTheme} />
    </Header>
  );
}

Title.propTypes = {
  onToggleTheme: PropTypes.func
};

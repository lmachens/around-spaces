import React from "react";
import styled from "styled-components";
import Add from "../icons/Add";

const Button = styled.button`
  background: ${props => props.theme.background};
  border-radius: 50%;
  outline: none;
  border: none;
  padding: 0px;
  cursor: pointer;
  width: 61px;
  height: 61px;
  fill: ${props => props.theme.contrastText};
  display: flex;
  justify-content: center;
`;

const InnerCircle = styled.div`
  background: ${props => props.theme.highlight};
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-left: 1px;
  display: flex;
`;

const AddIcon = styled(Add)`
  height: 24px;
  width: 24px;
  margin: auto;
`;

export default function AddButton({ onClick }) {
  return (
    <Button onClick={onClick}>
      <InnerCircle>
        <AddIcon />
      </InnerCircle>
    </Button>
  );
}

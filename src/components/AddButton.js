import React from "react";
import styled from "styled-components";
import Add from "../icons/Add";
// import PropTypes from "prop-types";

const ModalButton = styled.button`
  background: ${props => props.theme.background};
  border-radius: 50%;
  outline: none;
  border: none;
  padding: 10px;
  cursor: pointer;
  width: 60px;
  height: 60px;
  fill: ${props => props.theme.contrastText};
  display: flex;
`;

const InnerButton = styled.div`
  background: ${props => props.theme.highlight};
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  margin: auto;
`;

const AddIcon = styled(Add)`
  height: 24px;
  width: 24px;
  margin: auto;
`;

export default function AddButton() {
  return (
    <ModalButton>
      <InnerButton>
        <AddIcon />
      </InnerButton>
    </ModalButton>
  );
}

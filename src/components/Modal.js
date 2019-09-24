import React from "react";
import styled from "styled-components";
import { Close } from "../icons/Close";
import Check from "../icons/Check";
import PropTypes from "prop-types";

const Container = styled.div`
  background: ${props => props.theme.secondary};
  box-shadow: 0 0 10px ${props => props.theme.shadow};
  border-radius: 10px;
  display: ${props => (props.show ? "flex" : "none")};
  flex-direction: column;
  align-items: center;
  padding: 20px 10px 60px 10px;
  width: calc(100% - 52px);
  margin: 40px 20px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 11;
`;

const ModalButton = styled.button`
  background: ${props => props.theme.highlight};
  border-radius: 50%;
  outline: none;
  border: none;
  padding: 10px;
  cursor: pointer;
  width: 44px;
  height: 44px;
  fill: ${props => props.theme.contrastText};
`;

const CloseButton = styled(ModalButton)`
  position: absolute;
  right: -22px;
  top: -22px;
`;

const AcceptButton = styled(ModalButton)`
  position: absolute;
  left: calc(50% - 22px);
  bottom: -22px;
`;

const Backdrop = styled.div`
  display: ${props => (props.show ? "block" : "none")};
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  background: #6f6f6fde;
  z-index: 10;
`;

export default function Modal({
  children,
  show = true,
  hideBackdrop,
  onClose,
  onAccept
}) {
  return (
    <>
      <Container show={show}>
        {children}
        <CloseButton onClick={onClose}>
          <Close />
        </CloseButton>
        <AcceptButton onClick={onAccept}>
          <Check />
        </AcceptButton>
      </Container>
      {!hideBackdrop && <Backdrop onClick={onClose} show={show} />}
    </>
  );
}

Modal.propTypes = {
  children: PropTypes.node,
  show: PropTypes.bool,
  hideBackdrop: PropTypes.bool,
  onShow: PropTypes.func,
  onAccept: PropTypes.func
};

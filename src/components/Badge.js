import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";

const BadgeDiv = styled.div`
  display: inline-block;
  border-radius: 5px;
  padding: 3px 10px;
  border: solid 1px rgb(84, 127, 179);
  ${props =>
    props.active
      ? css`
          background: rgb(84, 127, 179);
          color: rgb(255, 255, 255);
        `
      : css`
          background: rgb(255, 255, 255);
          color: rgb(84, 127, 179);
        `}
  margin: 5px;
`;

export default function Badge({ active = true, children }) {
  return <BadgeDiv active={active}>{children}</BadgeDiv>;
}

Badge.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.node.isRequired
};

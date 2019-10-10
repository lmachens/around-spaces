import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Favorite from "../icons/Favorite";

const RatingButton = styled.button`
  border: none;
  fill: ${props => (props.active ? "#547FB3" : "#BABABA")};
  padding: 0;
  height: 38px;
  width: 38px;
  cursor: pointer;
  background: none;
`;

export default function QualityRatingButton({ active, className, onClick }) {
  return (
    <RatingButton onClick={onClick} active={active} className={className}>
      <Favorite />
    </RatingButton>
  );
}

QualityRatingButton.propTypes = {
  active: PropTypes.bool
};

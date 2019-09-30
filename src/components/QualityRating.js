import React from "react";
import styled from "styled-components";
import QualityRatingButton from "./QualityRatingButton";
import PropTypes from "prop-types";
import Flex from "./Flex";

const QualityRatingButtonStyled = styled(QualityRatingButton)`
  margin: 4px;
`;

export default function QualityRating({ rating, onClick, onChildClick }) {
  function handleClick(event) {
    onChildClick(event.target.name);
  }
  return (
    <Flex>
      <QualityRatingButtonStyled onClick={onClick} active={rating >= 1} />
      <QualityRatingButtonStyled onClick={onClick} active={rating >= 2} />
      <QualityRatingButtonStyled onClick={onClick} active={rating >= 3} />
      <QualityRatingButtonStyled onClick={onClick} active={rating >= 4} />
      <QualityRatingButtonStyled onClick={onClick} active={rating >= 5} />
    </Flex>
  );
}

QualityRating.propTypes = {
  rating: PropTypes.number.isRequired
};

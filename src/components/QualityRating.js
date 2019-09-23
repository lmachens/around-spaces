import React from "react";
import styled from "styled-components";
import QualityRatingButton from "./QualityRatingButton";
import PropTypes from "prop-types";

const QualityRatingContainer = styled.div`
  display: flex;
`;

const QualityRatingButtonStyled = styled(QualityRatingButton)`
  margin: 4px;
`;

export default function QualityRating({ rating }) {
  return (
    <QualityRatingContainer>
      <QualityRatingButtonStyled active={rating >= 1} />
      <QualityRatingButtonStyled active={rating >= 2} />
      <QualityRatingButtonStyled active={rating >= 3} />
      <QualityRatingButtonStyled active={rating >= 4} />
      <QualityRatingButtonStyled active={rating >= 5} />
    </QualityRatingContainer>
  );
}

QualityRating.propTypes = {
  rating: PropTypes.number.isRequired
};

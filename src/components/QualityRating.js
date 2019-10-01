import React from "react";
import styled from "styled-components";
import QualityRatingButton from "./QualityRatingButton";
import PropTypes from "prop-types";
import Flex from "./Flex";

const QualityRatingButtonStyled = styled(QualityRatingButton)`
  margin: 4px;
`;

export default function QualityRating({ rating, onClick }) {
  return (
    <Flex>
      <QualityRatingButtonStyled
        onClick={() => onClick(1)}
        active={rating >= 1}
      />
      <QualityRatingButtonStyled
        onClick={() => onClick(2)}
        active={rating >= 2}
      />
      <QualityRatingButtonStyled
        onClick={() => onClick(3)}
        active={rating >= 3}
      />
      <QualityRatingButtonStyled
        onClick={() => onClick(4)}
        active={rating >= 4}
      />
      <QualityRatingButtonStyled
        onClick={() => onClick(5)}
        active={rating >= 5}
      />
    </Flex>
  );
}

QualityRating.propTypes = {
  rating: PropTypes.number.isRequired
};

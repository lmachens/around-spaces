import React from "react";
import styled from "styled-components";
import QualityRatingButton from "./QualityRatingButton";
import PropTypes from "prop-types";
import Flex from "./Flex";

const QualityRatingButtonStyled = styled(QualityRatingButton)`
  margin: 4px;
`;

export default function QualityRating({ rating, onClick }) {
  const ratingArray = [1, 2, 3, 4, 5];
  return (
    <Flex>
      {ratingArray.map(number => (
        <QualityRatingButtonStyled
          key={number}
          onClick={() => onClick(number)}
          active={rating >= number}
        />
      ))}
    </Flex>
  );
}

QualityRating.propTypes = {
  rating: PropTypes.number.isRequired
};

import React from "react";
import PropTypes from "prop-types";
import Flex from "./Flex";
import IconButton from "./IconButton";
import Favorite from "../icons/Favorite";

export default function QualityRatingSelect({ value, onChange }) {
  return (
    <Flex>
      {[1, 2, 3, 4, 5].map(rating => (
        <IconButton
          key={rating}
          onClick={() => onChange(rating)}
          active={value >= rating}
        >
          <Favorite />
        </IconButton>
      ))}
    </Flex>
  );
}

QualityRatingSelect.propTypes = {
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired
};

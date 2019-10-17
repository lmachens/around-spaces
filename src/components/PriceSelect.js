import React from "react";
import Euro from "../icons/Euro";
import PropTypes from "prop-types";
import Flex from "./Flex";
import IconButton from "./IconButton";

export default function PriceSelect({ value, onChange, className }) {
  return (
    <Flex className={className}>
      {[1, 2, 3].map(price => (
        <IconButton
          key={price}
          onClick={() => onChange(price)}
          active={value >= price}
        >
          <Euro />
        </IconButton>
      ))}
    </Flex>
  );
}

PriceSelect.propTypes = {
  className: PropTypes.string,
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired
};

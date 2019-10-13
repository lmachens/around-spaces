import React from "react";
import Euro from "../icons/Euro";
import PropTypes from "prop-types";
import Flex from "./Flex";
import styled from "styled-components";

const EuroIcon = styled(Euro)`
  fill: ${props => (props.active ? "#547FB3" : "#BABABA")};
  height: 24px;
  width: 24px;
`;

export default function Price({ value, className }) {
  return (
    <Flex className={className}>
      {[1, 2, 3].map(price => (
        <EuroIcon key={price} active={value >= price} />
      ))}
    </Flex>
  );
}

Price.propTypes = {
  value: PropTypes.number
};

import React from "react";
import Euro from "../icons/Euro";
import PropTypes from "prop-types";
import styled from "styled-components";
import Flex from "./Flex";

const EuroIcon = styled(Euro)`
  fill: ${props => (props.active ? "#547FB3" : "#BABABA")};
  width: 24px;
  height: 24px;
`;

export default function Price({ value, onClick, callbackFunction }) {
  return (
    <Flex>
      <EuroIcon
        value={1}
        parentCallback={callbackFunction}
        onClick={onClick}
        active={value > 0}
      />
      <EuroIcon value={2} onClick={onClick} active={value > 1} />
      <EuroIcon value={3} onClick={onClick} active={value > 2} />
    </Flex>
  );
}

Price.propTypes = {
  value: PropTypes.number.isRequired
};

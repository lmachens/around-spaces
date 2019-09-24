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

export default function Price({ value }) {
  return (
    <Flex>
      <EuroIcon active={value > 0} />
      <EuroIcon active={value > 1} />
      <EuroIcon active={value > 2} />
    </Flex>
  );
}
Price.propTypes = {
  value: PropTypes.number.isRequired
};

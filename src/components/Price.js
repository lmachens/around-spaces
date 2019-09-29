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
      <EuroIcon
        value={2}
        kackpopel={event => console.log(event.target)}
        active={value > 0}
      />
      <EuroIcon
        value={2}
        kackpopel={() => console.log("Hallo2")}
        active={value > 1}
      />
      <EuroIcon
        value={3}
        kackpopel={() => console.log("Hallo3")}
        active={value > 2}
      />
    </Flex>
  );
}

Price.propTypes = {
  value: PropTypes.number.isRequired
};

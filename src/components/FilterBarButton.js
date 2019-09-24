import styled from "styled-components";
import PropTypes from "prop-types";

const FilterBarButton = styled.button`
  width: 60px;
  height: 60px;
  background-color: ${props => (props.active ? "#547fb3" : "white")};
  border-radius: 10px;
  border: none;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.15);
  fill: ${props => (props.active ? "white" : "#547fb3")};
  padding-top: 2px;
  outline: none;
`;

FilterBarButton.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.node.isRequired
};

export default FilterBarButton;

import styled from "styled-components";

const IconButton = styled.button`
  border: none;
  outline: none;
  fill: ${props => (props.active ? "#547FB3" : "#BABABA")};
  padding: 0;
  height: 38px;
  width: 38px;
  cursor: pointer;
  background: none;
  margin: 4px;
`;

export default IconButton;

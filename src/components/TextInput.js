import styled from "styled-components";

const TextInput = styled.input`
  border: #547fb3 solid 2.5px;
  border-radius: 12px;
  color: #303030;
  text-align: center;
  font-weight: bold;
  font-size: 16px;
  padding: 10px;
  width: 100%;

  &::placeholder {
    color: #707070;
  }
`;

export default TextInput;

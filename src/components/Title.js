import React from "react";
import styled from "styled-components";

const Header = styled.header`
  z-index: 10;
  flex-shrink: 0;
  height: 70px;
  width: 100%;
  background: #874c62;
  text-align: center;
  box-shadow: 0 5px 5px rgba(87, 59, 69, 0.6);
`;

function Title() {
  return (
    <Header>
      <h1>around spaces</h1>
    </Header>
  );
}

export default Title;

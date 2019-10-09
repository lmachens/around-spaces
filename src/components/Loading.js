import React from "react";
import styled from "styled-components";
import { keyframes } from "styled-components";

const jump = keyframes`
0% {
  bottom: 0px;
}
25% {
  bottom: 10px;
}
50% {
  bottom: 0px;
}
`;

const JumpAnimated = styled.span`
  position: relative;
  font-size: 30px;
  animation: ${jump} 1.5s ease-in-out ${props => props.delay} infinite;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function Loading({ children }) {
  return (
    <Container>
      <div>
        <JumpAnimated delay="0s">.</JumpAnimated>
        <JumpAnimated delay="0.1s">.</JumpAnimated>
        <JumpAnimated delay="0.2s">.</JumpAnimated>
        <JumpAnimated delay="0.3s">.</JumpAnimated>
      </div>
      {children && <div>{children}</div>}
    </Container>
  );
}

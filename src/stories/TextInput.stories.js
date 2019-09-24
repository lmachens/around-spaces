import React from "react";
import TextInput from "../components/TextInput";
import styled from "styled-components";

const Container = styled.div`
  width: 400px;
`;

export default {
  title: "Text Input"
};

export const Default = () => (
  <Container>
    <TextInput />
  </Container>
);

export const Placeholder = () => (
  <Container>
    <TextInput placeholder="Bitte Restaurant Namen eingeben" />
  </Container>
);

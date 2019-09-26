import React from "react";
import styled from "styled-components";
import Badge from "./Badge";

const BadgeContainer = styled.div`
  display: flex;
  width: 100%;
  overflow-x: auto;
  padding: 3 px;
`;

export default function BadgeBar({ categories }) {
  return (
    <BadgeContainer>
      {categories.map(category => (
        <Badge active={true}>{category}</Badge>
      ))}
    </BadgeContainer>
  );
}

import React from "react";
import styled from "styled-components";
import Price from "./Price";
import BadgeBar from "./BadgeBar";

const Card = styled.article`
  width: 100%;
  height: 150px;
  display: flex;
  margin-bottom: 20px;
  background: ${props => props.theme.secondary};
  color: ${props => props.theme.text};
  border-radius: 10px;
  box-shadow: 0 5px 10px ${props => props.theme.shadow};
`;

const CardImgContainer = styled.div`
  width: 33%;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  overflow: hidden;
`;

const CardImg = styled.img`
  height: 160px;
  max-width: 100%;
  object-fit: cover;
  object-position: top center;
`;

const InfoContainer = styled.div`
  height: 100%;
  width: 67%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 10px 10px 10px 20px;
`;

const CardTitle = styled.h2`
  font-size: 24px;
  color: ${props => props.theme.text};
  margin: 10px;
`;

const DetailsContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
`;

const DetailsPrice = styled(Price)`
  width: 18px;
  height: 18px;
`;

function Restaurant(props) {
  return (
    <Card odd={props.odd}>
      <CardImgContainer>
        <CardImg src={props.restaurant.imgSrc} alt={props.restaurant.title} />
      </CardImgContainer>
      <InfoContainer>
        <CardTitle>{props.restaurant.title}</CardTitle>

        <BadgeBar categories={props.restaurant.categories} />
        <DetailsContainer>
          <DetailsPrice value={props.restaurant.price} />
        </DetailsContainer>
      </InfoContainer>
    </Card>
  );
}

export default Restaurant;

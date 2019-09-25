import React, { useState } from "react";
import TextInput from "../components/TextInput";
import Badge from "../components/Badge";
import Price from "../components/Price";
import QualityRating from "../components/QualityRating";
import Modal from "../components/Modal";
import ModalTitle from "../components/ModalTitle";
import ModalSection from "../components/ModalSection";
import Add from "../icons/Add";
import styled from "styled-components";
import { getCategoryOptions } from "../api/filters";
import Flex from "../components/Flex";
import { postRestaurant } from "../api/restaurants";

const AddCircleIcon = styled(Add)`
  width: 40px;
  height: 40px;
  fill: ${props => props.theme.primary};
  border: 1.5px solid ${props => props.theme.primary};
  border-radius: 50%;
`;

export default function New() {
  function handleAccept() {
    postRestaurant({
      imgSrc:
        "https://static.lieferando.de/images/restaurants/de/OPROO0P/logo_465x320.png",
      title: titleValue,
      categories: ["pizza", "salad", "pasta"],
      distance: 6,
      rating: 3.1,
      description: "Eat italian"
    });
  }
  // const [category, setCategory] = useState("");
  const [titleValue, setTitleValue] = useState("");
  // const [ratings, setRatings] = useState("");
  // const [prices, setPrices] = useState("");
  return (
    <Modal hideBackdrop onAccept={handleAccept}>
      <AddCircleIcon />
      <ModalTitle>Add Restaurant</ModalTitle>
      <ModalSection>Name</ModalSection>
      <TextInput
        placeholder="Enter restaurant name"
        value={titleValue}
        onChange={event => setTitleValue(event.target.value)}
      />
      <ModalSection>Categories</ModalSection>
      <Flex>
        {getCategoryOptions().map(option => (
          <Badge key={option}>{option}</Badge>
        ))}
      </Flex>
      <ModalSection>Price</ModalSection>
      <Price
        // value={prices}
        price={0}
        // onChange={event => setPrices(event.target.value)}
      />
      <ModalSection>Rating</ModalSection>
      <QualityRating
        // value={ratings}
        rating={0}
        // onChange={event => setRatings(event.target.value)}
      />
    </Modal>
  );
}

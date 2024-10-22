import React, { useState } from "react";
import TextInput from "../components/TextInput";
import Badge from "../components/Badge";
import PriceSelect from "../components/PriceSelect";
import QualityRatingSelect from "../components/QualityRatingSelect";
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

export default function New({ history }) {
  const [title, setTitle] = useState("");
  const [qualityRating, setQualityRating] = useState(1);
  const [priceRating, setPriceRating] = useState(1);
  const [cuisines, setCuisines] = useState([]);

  function handleAccept() {
    postRestaurant({
      imgSrc:
        "https://static.lieferando.de/images/restaurants/de/OPROO0P/logo_465x320.png",
      title: title,
      categories: cuisines,
      distance: 6,
      rating: qualityRating,
      priceRating: priceRating,
      description: "Eat italian"
    }).then(redirectHome);
  }

  function redirectHome() {
    history.push("/");
  }

  function handleCuisinesClick(newCuisine) {
    const cuisinesArr = [...cuisines];
    if (cuisinesArr.includes(newCuisine)) {
      cuisinesArr.splice(cuisinesArr.indexOf(newCuisine), 1);
    } else {
      cuisinesArr.push(newCuisine);
    }

    setCuisines(cuisinesArr);
  }

  return (
    <Modal hideBackdrop onAccept={handleAccept} onClose={redirectHome}>
      <AddCircleIcon />
      <ModalTitle>Add Restaurant</ModalTitle>
      <ModalSection>Name</ModalSection>
      <TextInput
        placeholder="Enter restaurant name"
        value={title}
        onChange={event => setTitle(event.target.value)}
      />
      <ModalSection>Categories</ModalSection>
      <Flex>
        {getCategoryOptions().map(option => {
          return (
            <Badge
              onClick={() => handleCuisinesClick(option)}
              key={option}
              active={cuisines.includes(option)}
            >
              {option}
            </Badge>
          );
        })}
      </Flex>
      <ModalSection>Price</ModalSection>
      <PriceSelect value={priceRating} onChange={setPriceRating} />
      <ModalSection>Rating</ModalSection>
      <QualityRatingSelect value={qualityRating} onChange={setQualityRating} />
    </Modal>
  );
}

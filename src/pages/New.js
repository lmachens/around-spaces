import React from "react";
import TextInput from "../components/TextInput";
import Badge from "../components/Badge";
import Price from "../components/Price";
import QualityRating from "../components/QualityRating";
import Modal from "../components/Modal";
import ModalTitle from "../components/ModalTitle";
import ModalSection from "../components/ModalSection";

export default function New() {
  return (
    <Modal>
      <ModalTitle>Add Restaurant</ModalTitle>
      <ModalSection>Name</ModalSection>
      <TextInput />
      <ModalSection>Categories</ModalSection>

      <Badge>Sushi</Badge>
      <Badge>Wraps</Badge>
      <Badge>Burritos</Badge>
      <ModalSection>Price</ModalSection>
      <Price value={0} />
      <ModalSection>Rating</ModalSection>
      <QualityRating rating={0} />
    </Modal>
  );
}

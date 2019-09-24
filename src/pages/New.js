import React from "react";
import TextInput from "../components/TextInput";
import Badge from "../components/Badge";
import Price from "../components/Price";
import QualityRating from "../components/QualityRating";
import Modal from "../components/Modal";

export default function New() {
  return (
    <Modal>
      <div>
        Name:
        <TextInput />
      </div>
      <div>
        Categories:
        <Badge>Sushi</Badge>
        <Badge>Wraps</Badge>
        <Badge>Burritos</Badge>
      </div>
      <div>
        Price:
        <Price value={0} />
      </div>
      <div>
        Rating:
        <QualityRating rating={0} />
      </div>
    </Modal>
  );
}

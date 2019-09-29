import React from "react";
import Restaurant from "../components/Restaurant";

export default {
  title: "Restaurant"
};

const restaurant = {
  imgSrc:
    "https://static.lieferando.de/images/chains/de/bento_box/logo_465x320.png",
  title: "Bento Box",
  categories: ["japanese", "sushi"],
  distance: 1,
  rating: 3,
  description: "Long waiting time"
};

export const Card = () => (
  <Restaurant key={restaurant.title} odd={!!(1 % 2)} restaurant={restaurant}>
    Türkisch
  </Restaurant>
);

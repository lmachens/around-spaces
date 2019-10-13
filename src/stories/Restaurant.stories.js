import React from "react";
import Restaurant from "../components/Restaurant";

export default {
  title: "Restaurant"
};

const restaurant = {
  imgSrc:
    "https://images.unsplash.com/photo-1562158147-f8d6fbcd76f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
  title: "Bento Box",
  categories: ["japanese", "sushi"],
  distance: 1,
  rating: 3,
  price: 2,
  description: "Long waiting time"
};

export const Card = () => <Restaurant odd={false} restaurant={restaurant} />;

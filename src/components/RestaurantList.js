import React from "react";
import Restaurant from "./Restaurant";
import { restaurants } from "../api/restaurants";

function RestaurantList() {
  return (
    <section className="list__restaurant">
      {restaurants.map(restaurant => {
        return <Restaurant key={restaurant.title} restaurant={restaurant} />;
      })}
    </section>
  );
}

export default RestaurantList;

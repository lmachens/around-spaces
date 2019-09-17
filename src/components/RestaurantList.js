import React from "react";
import Restaurant from "./Restaurant";
import { restaurants } from "../api/restaurants";

function RestaurantList({ selectedFilters }) {
  console.log(selectedFilters);
  const filteredRestaurants = restaurants.filter(restaurant => {
    let keepRestaurant = true;
    if (selectedFilters.distance) {
      switch (selectedFilters.distance) {
        case "< 2min":
          keepRestaurant = restaurant.distance < 2;
          break;
        case "< 5min":
          keepRestaurant = restaurant.distance < 5;
          break;
        case "< 10min":
          keepRestaurant = restaurant.distance < 10;
          break;
        default:
          break;
      }
    }
    if (keepRestaurant && selectedFilters.rating) {
      keepRestaurant = restaurant.rating >= selectedFilters.rating.length;
    }
    if (keepRestaurant && selectedFilters.category) {
      keepRestaurant = restaurant.categories.includes(selectedFilters.category);
    }
    return keepRestaurant;
  });
  return (
    <section className="list__restaurant">
      {filteredRestaurants.map(restaurant => {
        return <Restaurant key={restaurant.title} restaurant={restaurant} />;
      })}
    </section>
  );
}

export default RestaurantList;

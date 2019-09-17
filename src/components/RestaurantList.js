import React from "react";
import Restaurant from "./Restaurant";
import { restaurants } from "../api/restaurants";

function RestaurantList({ selectedFilters }) {
  console.log(selectedFilters);
  const filteredRestaurants = restaurants.filter(restaurant => {
    // todo apply all filters
    return true;
    // if (!selectedFilters) {
    //   return true;
    // }
    // if (selectedFilters.name === "distance") {
    //   switch (selectedFilters.value) {
    //     case "< 2min":
    //       return restaurant.distance < 2;
    //     case "< 5min":
    //       return restaurant.distance < 5;
    //     case "< 10min":
    //       return restaurant.distance < 10;
    //     default:
    //       break;
    //   }
    //   return restaurant.distance < 3;
    // }
    // if (selectedFilters.name === "rating") {
    //   return restaurant.rating >= selectedFilters.value.length;
    // }
    // if (selectedFilters.name === "category") {
    //   return restaurant.categories.includes(selectedFilters.value);
    // }
    // return true;
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

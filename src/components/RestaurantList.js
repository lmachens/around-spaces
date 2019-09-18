import React from "react";
import Restaurant from "./Restaurant";
import { restaurants } from "../api/restaurants";
import styled from "styled-components";

const List = styled.section`
  flex-grow: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: transparent;
`;

function RestaurantList({ selectedFilters }) {
  console.log(selectedFilters);
  const filteredRestaurants = restaurants.filter(restaurant => {
    if (selectedFilters.distance) {
      switch (selectedFilters.distance) {
        case "< 2min":
          if (restaurant.distance >= 2) {
            return false;
          }
          break;
        case "< 5min":
          if (restaurant.distance >= 5) {
            return false;
          }
          break;
        case "< 10min":
          if (restaurant.distance >= 10) {
            return false;
          }
          break;
        default:
          break;
      }
    }
    if (selectedFilters.rating) {
      if (restaurant.rating < selectedFilters.rating.length) {
        return false;
      }
    }
    if (selectedFilters.category) {
      if (!restaurant.categories.includes(selectedFilters.category)) {
        return false;
      }
    }
    return true;
  });
  return (
    <List>
      {filteredRestaurants.map(restaurant => {
        return <Restaurant key={restaurant.title} restaurant={restaurant} />;
      })}
    </List>
  );
}

export default RestaurantList;

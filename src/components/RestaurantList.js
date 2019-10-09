import React from "react";
import Restaurant from "./Restaurant";
import styled from "styled-components";

const List = styled.section`
  flex-grow: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: transparent;
`;

function RestaurantList({ filteredRestaurants }) {
  return (
    <List>
      {filteredRestaurants.map((restaurant, index) => {
        return (
          <Restaurant
            key={restaurant.title}
            odd={!!(index % 2)}
            restaurant={restaurant}
          />
        );
      })}
    </List>
  );
}

export default RestaurantList;

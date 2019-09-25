import React from "react";
import Restaurant from "./Restaurant";
import { getRestaurantsByFilters } from "../api/restaurants";
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
  const [filteredRestaurants, setFilteredRestaurants] = React.useState([]);

  React.useEffect(() => {
    getRestaurantsByFilters(selectedFilters).then(newFilteredRestaurants => {
      setFilteredRestaurants(newFilteredRestaurants);
    });
  }, [selectedFilters]);

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

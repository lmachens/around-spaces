import React from "react";
import FilterList from "../components/FilterList";
import RestaurantList from "../components/RestaurantList";
import Title from "../components/Title";
import styled from "styled-components";

const Main = styled.main`
  flex-grow: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: auto;
  padding-bottom: 25px;
`;

export default function Home({ history, location, toggleTheme }) {
  const params = new URLSearchParams(location.search);
  const [filters, setFilters] = React.useState({
    category: params.get("category") || "",
    distance: params.get("distance") || "",
    rating: params.get("rating") || ""
  });

  function handleFilterChange(name, value) {
    // Create a copy of filters object
    const newFilters = { ...filters }; // or Object.assign({}, filters);
    params.delete(name);
    if (value) {
      newFilters[name] = value;
      params.append(name, value);
    } else {
      delete newFilters[name];
    }
    setFilters(newFilters);
    history.push(`${location.pathname}?${params.toString()}`);
  }

  return (
    <>
      <Title toggleTheme={toggleTheme} />
      <Main>
        <FilterList
          selectedFilters={filters}
          onFilterChange={handleFilterChange}
        />
        <RestaurantList selectedFilters={filters} />
      </Main>
    </>
  );
}

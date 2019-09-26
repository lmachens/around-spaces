import React from "react";
import FilterBar from "../components/FilterBar";
import RestaurantList from "../components/RestaurantList";
import Title from "../components/Title";
import styled from "styled-components";
import { postAnalytics } from "../api/analytics";

const Main = styled.main`
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: auto;
  width: 100%;
`;

const StyledFilterBar = styled(FilterBar)`
  width: 100%;
  padding: 20px 10px;
`;

export default function Home({ history, location, toggleTheme }) {
  const params = new URLSearchParams(location.search);
  const [filters, setFilters] = React.useState({
    category: params.get("category") || "",
    distance: params.get("distance") || "",
    rating: params.get("rating") || ""
  });

  React.useEffect(() => {
    postAnalytics({
      selectedFilters: filters,
      time: Date.now()
    });
  }, [location.search]);

  React.useEffect(() => {
    const newParams = new URLSearchParams();
    Object.entries(filters).forEach(([key, value]) => {
      if (value) {
        newParams.append(key, value);
      }
    });
    history.push(`${location.pathname}?${newParams.toString()}`);
  }, [filters]);

  function handleFilterChange(name, value) {
    const newFilters = { ...filters };
    if (value) {
      newFilters[name] = value;
    } else {
      delete newFilters[name];
    }
    setFilters(newFilters);
  }

  return (
    <>
      <Title toggleTheme={toggleTheme} />
      <StyledFilterBar
        selectedFilters={filters}
        onFilterChange={handleFilterChange}
      />
      <Main>
        <RestaurantList selectedFilters={filters} />
      </Main>
    </>
  );
}

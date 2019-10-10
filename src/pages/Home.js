import React from "react";
import FilterBar from "../components/FilterBar";
import RestaurantList from "../components/RestaurantList";
import Title from "../components/Title";
import styled from "styled-components";
import { postAnalytics } from "../api/analytics";
import { getRestaurantsByFilters } from "../api/restaurants";
import Loading from "../components/Loading";

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
  const [filteredRestaurants, setFilteredRestaurants] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    getRestaurantsByFilters(filters).then(newFilteredRestaurants => {
      setFilteredRestaurants(newFilteredRestaurants);
      setLoading(false);
    });
  }, [filters]);

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
        {loading && <Loading>Load restaurants</Loading>}
        {!loading && (
          <RestaurantList filteredRestaurants={filteredRestaurants} />
        )}
      </Main>
    </>
  );
}

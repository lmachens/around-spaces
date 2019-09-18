import React from "react";
import "./App.css";
import FilterList from "./components/FilterList";
import RestaurantList from "./components/RestaurantList";
import Title from "./components/Title";
import styled from "styled-components";
import GlobalStyles from "./GlobalStyles";

const App = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Main = styled.main`
  flex-grow: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: auto;
  padding-bottom: 25px;
`;

function App() {
  const [filters, setFilters] = React.useState({
    distance: "< 2min",
    rating: "***",
    category: "salad"
  });

  function handleFilterChange(name, value) {
    // Create a copy of filters object
    const newFilters = { ...filters }; // or Object.assign({}, filters);
    if (value) {
      newFilters[name] = value;
    } else {
      delete newFilters[name];
    }
    setFilters(newFilters);
  }

  return (
    <App>
      <GlobalStyles />
      <Title />
      <Main>
        <FilterList
          selectedFilters={filters}
          onFilterChange={handleFilterChange}
        />
        <RestaurantList selectedFilters={filters} />
      </Main>
    </App>
  );
}

export default App;

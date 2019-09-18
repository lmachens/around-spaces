import React from "react";
import "./App.css";
import FilterList from "./components/FilterList";
import RestaurantList from "./components/RestaurantList";
import Header from "./components/Header";

function App() {
  const [filters, setFilters] = React.useState({});

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
    <div className="App">
      <Header />
      <main className="main">
        <FilterList onFilterChange={handleFilterChange} />
        <RestaurantList selectedFilters={filters} />
      </main>
    </div>
  );
}

export default App;

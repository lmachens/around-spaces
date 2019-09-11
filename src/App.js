import React from "react";
import "./App.css";
import FilterList from "./components/FilterList";
import RestaurantList from "./components/RestaurantList";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main">
        <FilterList />
        <RestaurantList />
      </main>
    </div>
  );
}

export default App;

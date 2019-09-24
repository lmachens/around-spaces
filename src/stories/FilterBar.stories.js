import React from "react";
import FilterBar from "../components/FilterBar";

export default {
  title: "FilterBar"
};

export function OneFilterSelected() {
  return (
    <FilterBar
      selectedFilters={{
        category: "sushi"
      }}
    />
  );
}

export function TwoFiltersSelected() {
  return (
    <FilterBar
      selectedFilters={{
        distance: "< 10min",
        category: "sushi"
      }}
    />
  );
}

export function NoFilterSelected() {
  return <FilterBar selectedFilters={{}} />;
}

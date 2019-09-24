import React from "react";
import Filter from "./Filter";
import { filters } from "../api/filters";
import styled from "styled-components";

const List = styled.section`
  height: 80px;
  width: 80%;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: transparent;
`;

function FilterList({ onFilterChange, selectedFilters }) {
  return (
    <List>
      {filters.map(filter => {
        return (
          <Filter
            key={filter.name}
            filter={filter}
            onChange={onFilterChange}
            selectedValue={selectedFilters[filter.name]}
          />
        );
      })}
    </List>
  );
}

export default FilterList;

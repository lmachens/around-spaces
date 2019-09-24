import React from "react";
import styled from "styled-components";
import FilterBarButton from "./FilterBarButton";
import Walk from "../icons/Walk";
import Favorite from "../icons/Favorite";
import Euro from "../icons/Euro";
import Food from "../icons/Food";
import PropTypes from "prop-types";
import Modal from "./Modal";
import { getFilterByName } from "../api/filters";
import Filter from "./Filter";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default function FilterBar({
  className,
  selectedFilters,
  onFilterChange
}) {
  const [focusedFilterName, setFocusedFilterName] = React.useState(null);
  const focusedFilter = focusedFilterName && getFilterByName(focusedFilterName);

  return (
    <Container className={className}>
      <FilterBarButton
        active={!!selectedFilters.distance}
        onClick={() => setFocusedFilterName("distance")}
      >
        <Walk />
      </FilterBarButton>
      <FilterBarButton
        active={!!selectedFilters.price}
        onClick={() => setFocusedFilterName("price")}
      >
        <Euro />
      </FilterBarButton>
      <FilterBarButton
        active={!!selectedFilters.category}
        onClick={() => setFocusedFilterName("category")}
      >
        <Food />
      </FilterBarButton>
      <FilterBarButton
        active={!!selectedFilters.rating}
        onClick={() => setFocusedFilterName("rating")}
      >
        <Favorite />
      </FilterBarButton>
      <Modal
        show={!!focusedFilter}
        onClose={() => setFocusedFilterName(null)}
        onAccept={() => setFocusedFilterName(null)}
      >
        {focusedFilter && (
          <Filter
            key={focusedFilter.name}
            filter={focusedFilter}
            onChange={onFilterChange}
            selectedValue={selectedFilters[focusedFilter.name]}
          />
        )}
      </Modal>
    </Container>
  );
}

FilterBar.propTypes = {
  className: PropTypes.string,
  selectedFilters: PropTypes.object.isRequired,
  onFilterChange: PropTypes.func
};

import React from "react";
import styled from "styled-components";
import IconButton from "./IconButton";
import Walk from "../icons/Walk";
import Favorite from "../icons/Favorite";
import Euro from "../icons/Euro";
import Food from "../icons/Food";
import PropTypes from "prop-types";

const FilterBarContainer = styled.nav`
  display: flex;
  width: 415px;
  justify-content: space-around;
`;

export default function FilterBar({ selectedFilters }) {
  return (
    <FilterBarContainer>
      <IconButton active={!!selectedFilters.distance}>
        <Walk />
      </IconButton>
      <IconButton active={!!selectedFilters.price}>
        <Euro />
      </IconButton>
      <IconButton active={!!selectedFilters.category}>
        <Food />
      </IconButton>
      <IconButton active={!!selectedFilters.rating}>
        <Favorite />
      </IconButton>
    </FilterBarContainer>
  );
}

FilterBar.propTypes = {
  selectedFilters: PropTypes.object.isRequired
};

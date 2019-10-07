import React from "react";
import Badge from "./Badge";
import Flex from "./Flex";

function Filter({ onChange, filter, selectedValue }) {
  function handleOptionClick(option) {
    if (selectedValue !== option) {
      onChange(filter.name, option);
    } else {
      onChange(filter.name, null);
    }
  }
  return (
    <>
      <h3>{filter.title}</h3>
      <Flex>
        {filter.options.map(option => {
          return (
            <Badge
              key={option}
              onClick={() => handleOptionClick(option)}
              active={selectedValue === option}
            >
              {option}
            </Badge>
          );
        })}
      </Flex>
    </>
  );
}

export default Filter;

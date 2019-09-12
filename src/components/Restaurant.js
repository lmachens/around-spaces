import React from "react";

function Restaurant(props) {
  return <div className="card">{props.restaurant.title}</div>;
}

export default Restaurant;

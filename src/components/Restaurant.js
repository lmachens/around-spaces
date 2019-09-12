import React from "react";

function Restaurant(props) {
  return (
    <div className="card">
      {props.restaurant.title}
      <img
        src={props.restaurant.imgSrc}
        className="card__img"
        alt={props.restaurant.title}
      />
      <p>{props.restaurant.description}</p>
      <p>
        Distance: {props.restaurant.distance} minutes
        <br />
        Rating: {props.restaurant.rating} stars
        <br />
        Categories:{" "}
        {props.restaurant.categories.map(category => {
          return (
            <span className="card__category" key={category}>
              {category}
            </span>
          );
        })}
      </p>
    </div>
  );
}

export default Restaurant;

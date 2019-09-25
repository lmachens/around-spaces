export function getRestaurants() {
  return fetch("http://localhost:3333/restaurants").then(response =>
    response.json()
  );
}

function waitTwoSeconds() {
  return new Promise(resolve => {
    setTimeout(resolve, 3000);
  });
}

export async function getRestaurantsByFilters(selectedFilters) {
  await waitTwoSeconds();
  const restaurants = await getRestaurants();
  return restaurants.filter(restaurant => {
    if (selectedFilters.distance) {
      switch (selectedFilters.distance) {
        case "< 2min":
          if (restaurant.distance >= 2) {
            return false;
          }
          break;
        case "< 5min":
          if (restaurant.distance >= 5) {
            return false;
          }
          break;
        case "< 10min":
          if (restaurant.distance >= 10) {
            return false;
          }
          break;
        default:
          break;
      }
    }
    if (selectedFilters.rating) {
      if (restaurant.rating < selectedFilters.rating.length) {
        return false;
      }
    }
    if (selectedFilters.category) {
      if (!restaurant.categories.includes(selectedFilters.category)) {
        return false;
      }
    }
    return true;
  });
}

export const filters = [
  {
    name: "distance",
    title: "Distance",
    options: ["< 2min", "< 5min", "< 10min"]
  },
  {
    name: "price",
    title: "Price",
    options: ["cheap", "not so cheap", "expensive", "I am rich!"]
  },
  {
    name: "category",
    title: "Category",
    options: ["japanese", "sushi", "wraps", "bowls", "burritos", "salad"]
  },
  {
    name: "rating",
    title: "Rating",
    options: ["*", "**", "***", "****", "*****"]
  }
];

export function getCategoryOptions() {
  return getFilterByName("category").options;
}

export function getFilterByName(name) {
  return filters.find(filter => filter.name === name);
}

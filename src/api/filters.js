export const filters = [
  {
    name: "distance",
    options: ["< 2min", "< 5min", "< 10min"]
  },
  {
    name: "price",
    options: ["cheap", "not so cheap", "expensive", "I am rich!"]
  },
  {
    name: "category",
    options: ["japanese", "sushi", "wraps", "bowls", "burritos", "salad"]
  },
  {
    name: "rating",
    options: ["*****", "****", "***", "**", "*"]
  }
];

export function getCategoryOptions() {
  return getFilterByName("category").options;
}

export function getFilterByName(name) {
  return filters.find(filter => filter.name === name);
}

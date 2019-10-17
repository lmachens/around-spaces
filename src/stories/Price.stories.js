import React from "react";
import PriceSelect from "../components/PriceSelect";
import Price from "../components/Price";

export default {
  title: "Price"
};

export const None = () => <Price value={0} />;
export const Low = () => <Price value={1} />;
export const Medium = () => <Price value={2} />;
export const High = () => <Price value={3} />;

export const Select = () => {
  const [price, setPrice] = React.useState(1);

  return <PriceSelect value={price} onChange={setPrice} />;
};

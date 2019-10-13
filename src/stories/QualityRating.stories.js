import React from "react";
import QualityRatingSelect from "../components/QualityRatingSelect";

export default { title: "Quality Rating Select" };

export const Change = () => {
  const [rating, setRating] = React.useState(1);

  return <QualityRatingSelect value={rating} onChange={setRating} />;
};

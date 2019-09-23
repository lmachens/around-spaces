import React from "react";
import QualityRating from "../components/QualityRating";

export default { title: "Quality Rating" };

export const QualityRatingLow = () => <QualityRating rating={2} />;
export const QualityRatingHigh = () => <QualityRating rating={5} />;

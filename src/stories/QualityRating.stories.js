import React from "react";
import QualityRating from "../components/QualityRating";

export default { title: "Quality Rating" };

export const Low = () => <QualityRating rating={2} />;
export const High = () => <QualityRating rating={5} />;

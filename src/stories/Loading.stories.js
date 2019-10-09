import React from "react";
import Loading from "../components/Loading";

export default {
  title: "Loading"
};

export const WithoutText = () => <Loading />;
export const WithText = () => <Loading>Load something special</Loading>;

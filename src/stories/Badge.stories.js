import React from "react";
import Badge from "../components/Badge";

export default {
  title: "Badge"
};

export const Active = () => <Badge active>Asiatisch</Badge>;

export const Inactive = () => <Badge>Deutsch</Badge>;

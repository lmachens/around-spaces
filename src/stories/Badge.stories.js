import React from "react";
import Badge from "../components/Badge";

export default {
  title: "Badge"
};

export const Active = () => <Badge active={true}>Asiatisch</Badge>;

export const Inactive = () => <Badge>Deutsch</Badge>;

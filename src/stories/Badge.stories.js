import React from "react";
import Badge from "../components/Badge";

export default {
  title: "Badge"
};

export const Active = () => <Badge>Asiatisch</Badge>;

export const Inactive = () => <Badge active={false}>Deutsch</Badge>;

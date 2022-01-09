import * as React from "react";
import "./Card.css";
import ListItem from "@mui/material/ListItem";
const CardOne = ({ data }) => {
    console.log(data);
    return <ListItem>{data.name}</ListItem>;
};

export default CardOne;

import React from "react";
import itemContext from "../context/ItemsContext";
import { makeStyles, List } from "@material-ui/core";
import Item from "./Item";

const useStyle = makeStyles(() => ({
  master: {
    height: "100vh",
    padding: "15px",
    border: "1px solid grey",
  },
  itemsContainer: {
    overflowY: "scroll",
    width: "100%",
  },
}));
const ListItems = () => {
  const { items } = itemContext();
  const classes = useStyle();

  return (
    <List className={classes.itemsContainer}>
      {items.map((item, index) => (
        <Item item={item} key={index} />
      ))}
    </List>
  );
};

export default ListItems;

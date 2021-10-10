import React from "react";
import { Typography, makeStyles, Paper, ListItem } from "@material-ui/core";
import axios from "axios";
import itemsContex from "../context/ItemsContext";
const useStyle = makeStyles(() => ({
  paper: {
    width: "90%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    padding: "5px",
    height: "max-content",
    margin: "10px 0px",
    "&:hover": {
      background: "#efdede1f",
    },
  },
}));

const Item = ({ item }) => {
  const classes = useStyle();
  const { setSelectedItem } = itemsContex();
  const selectItem = async () => {
    let response = await axios.get(`http://localhost:4000/items/${item._id}`);
    console.log(response);
    if (response.data.status === 200) {
      setSelectedItem(response.data.item);
    }
  };
  return (
    <ListItem>
      <Paper onClick={selectItem} elevation={3} className={classes.paper}>
        <Typography variant="h6" color="textSecondary">
          Name: {item.name}
        </Typography>
      </Paper>
    </ListItem>
  );
};

export default Item;

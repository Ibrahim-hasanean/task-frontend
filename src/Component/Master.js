import React from "react";
import { Grid, makeStyles, Typography } from "@material-ui/core";
import ListItems from "./ListItems";
import Pagination from "@material-ui/lab/Pagination";
import itemsContext from "../context/ItemsContext";
import ItemsForm from "./ItemsForm";
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

const Master = () => {
  const classes = useStyle();
  const { pagesCount, getItems } = itemsContext();
  console.log(pagesCount);
  const handlePaginationChange = async (e, page) => {
    await getItems(page);
  };
  return (
    <Grid
      container
      direction="column"
      alignItems="space"
      justifyContent="space-between"
      item
      xs={3}
      wrap="nowrap"
      className={classes.master}
    >
      <ItemsForm />
      <Typography variant="h4" color="textSecondary">
        Items List
      </Typography>
      <ListItems />
      <Pagination count={pagesCount} onChange={handlePaginationChange} />
    </Grid>
  );
};

export default Master;

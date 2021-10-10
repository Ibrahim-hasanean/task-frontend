import { Grid, Typography, makeStyles } from "@material-ui/core";
import React from "react";
import itemsContext from "../context/ItemsContext";
const useStyle = makeStyles(() => ({
  detailes: {
    padding: "50px 0px",
  },
}));
const Detailes = () => {
  const { selectedItem } = itemsContext();
  const classes = useStyle();
  return (
    <Grid
      container
      item
      xs={9}
      justifyContent="flex-start"
      alignContent="center"
      direction="column"
      className={classes.detailes}
    >
      <Typography variant="h3" color="textPrimary">
        {selectedItem?.name}
      </Typography>
      <Typography variant="h6" color="textPrimary">
        {selectedItem?.description}
      </Typography>
    </Grid>
  );
};

export default Detailes;

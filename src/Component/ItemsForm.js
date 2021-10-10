import React, { useState } from "react";
import {
  Button,
  Grid,
  TextField,
  makeStyles,
  Typography,
} from "@material-ui/core";
import axios from "axios";
const useStyle = makeStyles(() => ({
  section: {
    margin: "5px 0px",
    padding: "0px 10px",
  },
  success: {
    color: "green",
  },
}));

const ItemsForm = () => {
  const classes = useStyle();
  const [data, setData] = useState({ name: "", description: "" });
  const [success, setSuccess] = useState(false);
  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let response = await axios.post("http://localhost:4000/items", data);
    if (response.data.status === 201) {
      setData({ name: "", description: "" });
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
      }, 3000);
    }
    console.log(response);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid className={classes.section} container>
        {success && (
          <Typography className={classes.success} variant="body1">
            item added successfully
          </Typography>
        )}
        <TextField
          value={data.name}
          onChange={handleChange}
          label="name"
          name="name"
        />
        <TextField
          onChange={handleChange}
          label="description"
          name="description"
          value={data.description}
        />
      </Grid>
      <Grid className={classes.section} container>
        <Button type="submit" variant="contained" color="primary">
          Add Item
        </Button>
      </Grid>
    </form>
  );
};

export default ItemsForm;

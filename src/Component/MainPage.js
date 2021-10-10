import React, { useEffect, useState } from "react";
import { Grid } from "@material-ui/core";
import { itemsContext } from "../context/ItemsContext";
import axios from "axios";
import Master from "./Master";
import Detailes from "./Detailes";

const MainPage = () => {
  const [items, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState();
  const [pagesCount, setPagesCount] = useState(1);
  const getItems = async (page = 1) => {
    const response = await axios.get(
      `http://localhost:4000/items?page=${page}`
    );
    console.log(response);
    if (response.data.status === 200) {
      setItems([...response.data.items]);
      setPagesCount(response.data.pagesCount);
    }
  };

  useEffect(() => {
    getItems();
  }, []);

  return (
    <Grid container>
      <itemsContext.Provider
        value={{
          items,
          selectedItem,
          setSelectedItem,
          pagesCount,
          setPagesCount,
          getItems,
        }}
      >
        <Master />
        <Detailes />
      </itemsContext.Provider>
    </Grid>
  );
};

export default MainPage;

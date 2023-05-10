// React
import React from "react";

// Components
import ItemsList from "../ItemsList/ItemsList";

// Material Ui
import CircularProgress from "@mui/material/CircularProgress";

// Data
import useGetProducts from "../GetFireBaseData/GetFireBaseData";

/* Imports */

const ItemsListContainer = (categoryId) => {
  const { isLoading } = useGetProducts();

  return (
    <div>
      {isLoading ? <CircularProgress color="success" /> : <ItemsList />}
    </div>
  );
};

export default ItemsListContainer;

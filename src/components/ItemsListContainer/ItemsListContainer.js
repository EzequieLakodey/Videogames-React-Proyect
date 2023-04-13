// React
import React, { useEffect, useState } from "react";

// Components
import { ItemsList } from "../ItemsList/ItemsList";

// Router Dom
import { useParams } from "react-router";

// Axios
import axios from "axios";

// Material Ui
import CircularProgress from "@mui/material/CircularProgress";

/* Imports */

export const ProductsApi = () => {
  const [loading, setLoading] = useState(true);

  const [data, setData] = useState([]);

  const { categoryId } = useParams();

  useEffect(() => {
    axios("https://fakestoreapi.com/products")
      .then((show) => {
        if (categoryId) {
          setData(show.data.filter((s) => s.category === categoryId));
        } else {
          setData(show.data);
        }
      })

      .finally(() => setLoading(false));
  }, [categoryId]);

  return (
    <>
      {loading ? (
        <CircularProgress color="success" />
      ) : (
        <ItemsList data={data} />
      )}
    </>
  );
};

export default ProductsApi;

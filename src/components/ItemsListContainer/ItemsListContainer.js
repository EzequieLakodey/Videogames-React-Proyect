import axios from "axios";
import React, { useEffect, useState } from "react";
import { ItemsList } from "../ItemsList/ItemsList";
import CircularProgress from "@mui/material/CircularProgress";
import { useParams } from "react-router";

export const ProductsApi = () => {
  const [loading, setLoading] = useState(true);

  const [data, setData] = useState([]);

  const { categoryId } = useParams();

  console.log(data);

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

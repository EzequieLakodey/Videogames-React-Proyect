import axios from "axios";

import React, { useEffect, useState } from "react";

import { ItemsList } from "../ItemsList/ItemsList";

const ProductsApi = () => {
  const [loading, setLoading] = useState(true);

  const [data, setData] = useState([]);

  console.log(data);

  useEffect(() => {
    axios("https://fakestoreapi.com/products")
      .then((show) => setData(show.data))

      .finally(() => setLoading(false));
  }, []);

  return <>{loading ? <h1> Loading . . . </h1> : <ItemsList data={data} />}</>;
};

export default ProductsApi;

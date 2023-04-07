import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import ItemsDetails from "../ItemsDetails/ItemsDetails";
import { useParams } from "react-router";
import CircularProgress from "@mui/material/CircularProgress";

const ItemsDetailsContainer = () => {
  const [ItemsInfo, setItemsInfo] = useState([]);

  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    axios("https://fakestoreapi.com/products")
      .then((res) =>
        setItemsInfo(res.data.find((data) => data.id === parseInt(id)))
      )

      .catch((error) => console.log(error))

      .finally(() => setLoading(false));
  }, [id]);

  return (
    <div>
      {loading ? (
        <CircularProgress color="success" />
      ) : (
        <ItemsDetails ItemsInfo={ItemsInfo} />
      )}
      ;
    </div>
  );
};

export default ItemsDetailsContainer;

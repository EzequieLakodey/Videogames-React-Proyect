// React
import React from "react";
import { useEffect, useState } from "react";

// Components
import ItemsDetails from "../ItemsDetails/ItemsDetails";

// Router Dom
import { useParams } from "react-router";

// Axios
import axios from "axios";

// Material Ui
import CircularProgress from "@mui/material/CircularProgress";

/* Imports */

const ItemsDetailsContainer = () => {
  const [ItemsInfo, setItemsInfo] = useState([]);

  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    axios("https://fakestoreapi.com/products")
      .then((res) =>
        setItemsInfo(res.data.find((data) => data.id === parseInt(id)))
      )

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

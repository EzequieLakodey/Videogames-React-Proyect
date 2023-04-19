// React
import React from "react";
import { useEffect, useState } from "react";

// Components
import ItemsDetails from "../ItemsDetails/ItemsDetails";

// Router Dom
import { useParams } from "react-router";

// Material Ui
import CircularProgress from "@mui/material/CircularProgress";

/* Imports */

export const ItemsDetailsContainer = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const { id } = useParams();

  return (
    <div>
      {loading ? (
        <CircularProgress color="success" />
      ) : (
        <ItemsDetails ItemsInfo={ItemsInfo} />
      )}
    </div>
  );
};

export default ItemsDetailsContainer;

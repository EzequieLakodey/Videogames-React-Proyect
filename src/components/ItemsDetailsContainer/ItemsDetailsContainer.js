// React
import React from "react";
import { useEffect, useState } from "react";

// Components
import ItemsDetails from "../ItemsDetails/ItemsDetails";

// Router Dom
import { useParams } from "react-router";

// FireStore
import {
  collection,
  query,
  getDocs,
  where,
  QuerySnapshot,
} from "firebase/firestore";
import { db } from "../../firebase/FireBaseConfig";

// Material Ui
import CircularProgress from "@mui/material/CircularProgress";

/* Imports */

export const ItemsDetailsContainer = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const GetItems = async () => {
      const QueryRef = query(
        collection(db, "Fake Store Api"),
        where("id", "==", id)
      );
      const QuerySnapshot = await getDocs(QueryRef);
      const Item = [];
      QuerySnapshot.forEach((i) => {
        Item.push({ ...i.data(), id: i.id });
      });
      setTimeout(() => {
        setLoading(false);
      });
      setData(Item);
    };
    GetItems();
  }, [id]);

  console.log(data);

  return (
    <div>
      {loading ? (
        <CircularProgress color="success" />
      ) : (
        <ItemsDetails data={data} />
      )}
    </div>
  );
};

export default ItemsDetailsContainer;

// React
import React from "react";
import { useEffect, useState } from "react";

// Components
import ItemsDetails from "../ItemsDetails/ItemsDetails";

// Router Dom
import { useParams } from "react-router";

// FireStore
import { collection, query, getDocs, where } from "firebase/firestore";
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
      const Items = [];
      QuerySnapshot.forEach((i) => {
        Items.push({ ...i.data(), id: i.id });
      });
      setTimeout(() => {
        setData(Items);
        setLoading(false);
      }, 1000);
      console.log(Items);
      setData(Items);
    };
    GetItems();
  }, [id]);

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

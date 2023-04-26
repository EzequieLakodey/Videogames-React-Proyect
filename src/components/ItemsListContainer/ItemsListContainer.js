// React
import React, { useEffect, useState } from "react";

// Components
import { ItemsList } from "../ItemsList/ItemsList";

// Router Dom
import { useParams } from "react-router-dom";

// FireStore
import { collection, query, getDocs, where } from "firebase/firestore";
import { db } from "../../firebase/FireBaseConfig";

// Material Ui
import CircularProgress from "@mui/material/CircularProgress";

// Tanstack React Query
import { useQuery } from "@tanstack/react-query";

/* Imports */

export const ItemsListContainer = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const { categoryId } = useParams();
  useEffect(() => {
    const GetItems = async () => {
      const QueryRef = !categoryId
        ? collection(db, "Fake Store Api ")
        : query(
            collection(db, "Fake Store Api "),
            where("category", "==", categoryId)
          );
      const QuerySnapshot = await getDocs(QueryRef);
      const Items = [];
      QuerySnapshot.forEach((i) => {
        Items.push({ ...i.data(), id: i.id });
      });
      setTimeout(() => {
        setData(Items);
        setLoading(false);
      });

      setData(Items);
    };
    GetItems();
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

export default ItemsListContainer;

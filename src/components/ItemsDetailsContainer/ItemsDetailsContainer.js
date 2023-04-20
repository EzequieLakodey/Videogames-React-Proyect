// React
import { useEffect, useState, React } from "react";

// Components
import ItemsDetails from "../ItemsDetails/ItemsDetails";

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

  useEffect(() => {
    const fetchData = async () => {
      const q = query(
        collection(db, "Fake Store Api"),
        where("id", "==", true)
      );
      const QuerySnapshot = await getDocs(q);
      QuerySnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
      });
      setLoading(false);
    };
    fetchData();
  }, []);

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

// React
import { useEffect, useState, React } from "react";

// Components
import ItemsDetails from "../ItemsDetails/ItemsDetails";

// FireStore
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../firebase/FireBaseConfig";

// Material Ui
import CircularProgress from "@mui/material/CircularProgress";

// React Router Dom
import { useParams } from "react-router";

/* Imports */

export const ItemsDetailsContainer = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const docReference = doc(db, "Fake Store Api", id);
    getDoc(docReference)
      .then((result) => {
        setData({ ...result.data(), id: result.id });
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
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

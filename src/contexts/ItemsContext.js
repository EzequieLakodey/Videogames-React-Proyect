import { createContext, useState, useEffect } from "react";

import axios from "axios";

export const ItemsContext = createContext();

const ProductsApi = () => {
  const ItemsProvider = ({ children }) => {
    const [loading, setLoading] = useState(true);

    const [data, setData] = useState([]);

    useEffect(() => {
      axios("https://fakestoreapi.com/products")
        .then((show) => setData(show.data))

        .finally(() => setLoading(false));
    }, []);

    return (
      <ItemsContext.Provider value={{ data, setData, loading, setLoading }}>
        {children}
      </ItemsContext.Provider>
    );
  };
};

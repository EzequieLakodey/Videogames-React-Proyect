// React
import { createContext, UseState, useEffect } from "react";
import React from "react";

// Components

// Router Dom

// Axios
import axios from "axios";

// Material Ui

/* Imports */

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = UseState([]);

  const AddToCart = (item, count) => {
    setCart([...cart, { ...item, count }]);
  };

  return (
    <CartContext.Provider value={{ cart }}>{children}</CartContext.Provider>
  );
};

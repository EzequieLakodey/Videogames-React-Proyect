// React
import { createContext, useState } from "react";
import React from "react";

// Components

// Axios

// Router Dom

// Material Ui

/* Imports */

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const AddItemsToCart = ({ title, count }) => {
    setCart({ title, count });

    console.log(title);

    console.log(count);

    alert(`${title} ${count}`);
  };

  return (
    <CartContext.Provider value={{ cart, setCart, AddItemsToCart }}>
      {children}
    </CartContext.Provider>
  );
};

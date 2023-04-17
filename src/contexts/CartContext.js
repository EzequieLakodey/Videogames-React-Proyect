// React
import { createContext, useState } from "react";
import React from "react";

// Components

// Axios

// Router Dom

// Material Ui
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

/* Imports */

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const AddItemsToCart = (ItemsInfo, count) => {
    const existingItem = cart.find((item) => item.id === ItemsInfo.id);

    if (existingItem) {
      setCart(
        cart.map(() => {
          if (ItemsInfo.id) {
            return { ...ItemsInfo.title, count: ItemsInfo.count + count };
          } else {
            return ItemsInfo.title;
          }
        })
      );
    } else {
      setCart([...cart, { ...ItemsInfo.title, count: count }]);
    }
  };

  function GetItemsCount() {
    let total = 0;

    cart.forEach((item) => {
      total += item.count;
    });

    return (
      <Badge badgeContent={total} color="error">
        <ShoppingCartIcon fontSize="large" />
      </Badge>
    );
  }

  console.log(cart);

  return (
    <CartContext.Provider
      value={{ cart, setCart, AddItemsToCart, GetItemsCount }}>
      {children}
    </CartContext.Provider>
  );
};

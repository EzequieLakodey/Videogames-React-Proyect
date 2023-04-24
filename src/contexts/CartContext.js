// React
import { createContext, useState } from "react";
import React from "react";

// Router Dom
import { useNavigate } from "react-router";

// Material Ui
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

/* Imports */

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const AddItemsToCart = (data, count) => {
    const existingItem = cart.find((item) => item.id === data.id);

    if (existingItem) {
      setCart(
        cart.map((item) => {
          if (item.id === data.id) {
            return { ...item, count: item.count + count };
          } else {
            return item;
          }
        })
      );
    } else {
      setCart([...cart, { ...data, count }]);
    }
  };

  function GetItemsCount() {
    let total = 0;
    cart.forEach((item) => {
      total += item.count;
    });
    const Redirect = useNavigate();
    return (
      <Badge badgeContent={total} color="info">
        <ShoppingCartIcon fontSize="large" onClick={() => Redirect("/cart")} />
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

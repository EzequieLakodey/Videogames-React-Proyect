// React
import React from "react";

// React Router Dom

// Context
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

const Cart = () => {
  const { cart } = useContext(CartContext);

  console.log(cart);

  return <div></div>;
};

export default Cart;

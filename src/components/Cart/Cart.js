// React
import React from "react";

// React Router Dom

// Context
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

const Cart = () => {
  const { cart } = useContext(CartContext);
  console.log(cart);
  const mappedCart = forEach((i) => {});

  return (
    <article>
      {cart.map((i) => (
        <div>
          <div key={i.id}>{i.title}</div>

          <div key={i.image}>{i.image}</div>
        </div>
      ))}
    </article>
  );
};

export default Cart;

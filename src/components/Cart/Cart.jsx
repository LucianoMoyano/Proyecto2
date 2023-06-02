import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import "./cart.css";

export const Cart = () => {
  return (
    <>
      <AiOutlineShoppingCart className="cart" />
      <span>0</span>
    </>
  );
};

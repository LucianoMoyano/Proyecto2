import React from "react";
import { Link } from "react-router-dom";
import "./nav.css";
import { Cart } from "../Cart/Cart";

export const NavBar = () => {
  return (
    <div className="menu">
      <Link className="link" to="/">
        Home
      </Link>
      <Link className="link" to="/counter">
        Contador
      </Link>
      <Link className="link" to="/segundo">
        Segundo componente
      </Link>
      <Link className="link" to="/cart">
        <Cart />
      </Link>
    </div>
  );
};

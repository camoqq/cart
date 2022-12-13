import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./ContextComp";
import "./styles.css";

const Header = () => {
  const { cart } = useContext(CartContext);
  return (
    <div className="nav">
      <Link to="/">HOME</Link>
      <Link to="/cart">CART {cart.length}</Link>
    </div>
  );
};

export default Header;

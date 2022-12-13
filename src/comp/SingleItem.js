import React, { useContext } from "react";
import { CartContext } from "./ContextComp";

const SingleItem = ({ item }) => {
  const { cart, setCart } = useContext(CartContext);
  return (
    <div className="products">
      <div className="name">
        <span style={{ fontWeight: 700 }}>{item.name.toUpperCase()}</span>
      </div>
      <div className="im">
        <img src={item.image} alt={item.name} className="image" />
      </div>
      <div className="price">
        <span>${item.price}</span>
      </div>
      <div className="btn">
        {cart.includes(item) ? (
          <button onClick={() => setCart(cart.filter((c) => c.id !== item.id))}>
            REMOVE
          </button>
        ) : (
          <button onClick={() => setCart([...cart, item])}>ADD</button>
        )}
      </div>
    </div>
  );
};

export default SingleItem;

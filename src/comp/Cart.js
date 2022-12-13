import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "./ContextComp";
import SingleItem from "./SingleItem";

const Cart = () => {
  const { cart, setCart } = useContext(CartContext);
  const [totall, setTotall] = useState();
  useEffect(() => {
    setTotall(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  // const total = () => {
  //   return cart.reduce((acc, curr) => acc + curr.price, 0);
  // };
  return (
    <div>
      <div className="productContainer">
        {cart.map((item) => {
          return (
            <SingleItem
              item={item}
              cart={cart}
              setCart={setCart}
              key={item.id}
            />
          );
        })}
      </div>{" "}
      <h3>TOTAL: $ {totall}</h3>
    </div>
  );
};

export default Cart;

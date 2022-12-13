import React from "react";
import data from "./data";
import SingleItem from "./SingleItem";

const Home = () => {
  return (
    <div className="productContainer">
      {data.map((item) => {
        return <SingleItem item={item} key={item.id} />;
      })}
    </div>
  );
};

export default Home;

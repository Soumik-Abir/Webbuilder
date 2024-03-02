import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import productTexts from "../../assets/productTexts.json"; // Import the JSON file

const Main = () => {
  return (
    <>
      <div className="m-8 mt-0 p-8 pt-0">
        {productTexts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};

export default Main;


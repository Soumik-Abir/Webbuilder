import React, { useState } from "react";
import { BsTrophy } from "react-icons/bs";
import productImage from "../../assets/Product.png";
import TextElement from "../TextElement/TextElement";
import ProductFooter from "./ProductFooter";
import ProductDetails from "./ProductDetails";

const ProductCard = () => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="pb-4 mt-4 bg-slate-50 rounded-xl">
      <div className="flex flex-col md:flex-row gap-2">
        <div className="flex flex-col w-full md:w-[23%]">
          <div className="flex gap-2 justify-between items-center p-2 text-white bg-orange-500 rounded-tr-lg rounded-br-lg w-1/2 md:w-[150px]">
            <BsTrophy className="text-white" />
            <div className="flex-auto my-auto text-xs md:text-base">Best Choice</div>
          </div>
          <div className="flex">
            <div className=" text-md md:text-xl text-gray-500 bg-slate-50 rounded-full border border-solid border-zinc-200 flex justify-center items-center w-6 h-6 md:w-11 md:h-8 mt-2">
              1
            </div>
            <div className="flex flex-col items-center pl-10 mt-8 text-sm text-center text-gray-500">
              <img
                loading="lazy"
                srcSet={productImage}
                className="w-[180px] md:w-[280px]"
              />
              <TextElement className="mt-4" text="Builder 1" />
            </div>
          </div>
        </div>
        <ProductDetails showMore={showMore} toggleShowMore={toggleShowMore} />
        <ProductFooter />
      </div>
    </div>
  );
};

export default ProductCard;

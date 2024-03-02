import React, { useState } from "react";
import { BsTrophy } from "react-icons/bs";
import { SlDiamond } from "react-icons/sl";
import TextElement from "../TextElement/TextElement";
import ProductFooter from "./ProductFooter";
import ProductDetails from "./ProductDetails";
import productImage from "../../assets/Product.png";

const ProductCard = ({ product }) => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  const { id, tagName, image, imageDescription, rating, ratingDescription } = product;

  return (
    <div className="pb-4 mt-4 bg-slate-50 rounded-xl">
      <div className="flex flex-col md:flex-row gap-2">
        <div className="flex flex-col w-full md:w-[23%]">
          {tagName && (
            <div className="flex gap-2 justify-between items-center p-2 text-white bg-orange-500 rounded-tr-lg rounded-br-lg w-1/2 md:w-[150px]">
              {tagName === "Best Choice" ? (
                <BsTrophy className="text-white" />
              ) : (
                <SlDiamond className="text-white" />
              )}
              <div className="flex-auto my-auto text-xs md:text-base">
                {tagName}
              </div>
            </div>
          )}
          <div className="flex">
            <div className="text-md md:text-xl text-gray-500 bg-slate-50 rounded-full border border-solid border-zinc-200 flex justify-center items-center w-6 h-6 md:w-11 md:h-8 mt-2">
              {id}
            </div>
            <div className="flex flex-col items-center pl-10 mt-8 text-sm text-center text-gray-500">
              <img
                loading="lazy"
                src={productImage}
                alt={imageDescription}
                className="w-[180px] md:w-[280px]"
              />
              <TextElement className="mt-4" text={imageDescription} />
            </div>
          </div>
        </div>
        <ProductDetails
          showMore={showMore}
          toggleShowMore={toggleShowMore}
          {...product}
        />
        <ProductFooter rating={rating} ratingDescription={ratingDescription} />
      </div>
    </div>
  );
};

export default ProductCard;

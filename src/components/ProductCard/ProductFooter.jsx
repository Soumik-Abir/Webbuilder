import React from "react";
import Button from "../Button/Button";
import StarRating from "../Rating/Rating";

const ProductFooter = () => {
  return (
    <div className="flex flex-col w-full md:w-[20%]">
      <div className="hidden md:flex md:flex-col md:items-center md:self-center md:p-6 md:text-sky-800 md:bg-sky-50 md-rounded-md md:w-[140px]">
        <div className="text-4xl">9.8</div>
        <div className="mt-4 text-md">Exceptional</div>
        <StarRating rating={9.5} />
      </div>
      <div className="mt-auto mb-6">
        <Button className="rounded-md w-full">View</Button>
      </div>
    </div>
  );
};

export default ProductFooter;

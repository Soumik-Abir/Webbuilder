import React from "react";
import Button from "../Button/Button";

const RelatedCard = ({ productImage, discount, title, description, price, originalPrice }) => {
  return (
    <div className="flex flex-col pt-8 pb-4 bg-slate-50 rounded-xl max-w-[300px]">
      <div className="flex flex-col items-center px-4">
        <img
          loading="lazy"
          src={productImage}
          className="max-w-full w-[200px]"
          alt="Product"
        />
        <div className="flex gap-2 mt-8 text-sky-700 w-full">
          {discount && (
            <div className="p-1 text-sm bg-gray-100 rounded-md">
              {discount}
            </div>
          )}
          <div className="p-1 text-sm bg-gray-100 rounded-md">
            Limited time
          </div>
        </div>
        <div className="mt-1 text-base font-bold text-gray-500 whitespace-nowrap">
          {title}
        </div>
      </div>
      <div className="flex flex-col px-4 mt-1 w-full">
        <div className="text-base text-gray-500">
          {description}
        </div>
        <div className="flex gap-2 mt-2">
          <div className="text-xl text-gray-500">{price}</div>
          <div className="flex mt-2">
            {originalPrice && (
              <>
                <div className="text-sm text-gray-400 line-through">{originalPrice}</div>
                <div className="text-sm text-rose-500">{`(${discount})`}</div>
              </>
            )}
          </div>
        </div>
        <Button className="rounded-xl mt-2">View Details</Button>
      </div>
    </div>
  );
};

export default RelatedCard;

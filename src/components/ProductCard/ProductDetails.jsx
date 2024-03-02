import React from "react";
import TextElement from "../TextElement/TextElement";
import { ReactComponent as Tick } from "../../assets/Tick.svg";

const ProductDetails = ({
  showMore,
  toggleShowMore,
  title,
  description,
  mainHighlights,
  whatYouGet,
  priceDiscount,
  ratingDescriptions,
  whyWeLoveIt,
}) => {
  return (
    <div className="flex flex-col w-full md:w-[52%] p-6">
      <div className="mt-2 text-xs md:text-base text-gray-600">
        <div>
          <span className="text-sm md:text-lg font-bold">
            {title}
          </span>
          - {description}
        </div>
        <div className="mt-4 text-sm md:text-lg font-bold text-slate-700">
          {mainHighlights}
        </div>
        <div className="mt-4">
          {whatYouGet}
        </div>
        {showMore && (
          <>
            <div className="flex gap-2 m-2 text-sky-700">
              <div className="p-1 text-xs md:text-sm bg-gray-100 rounded-md">{priceDiscount}</div>
            </div>
            <div className="flex flex-col items-start p-2 bg-orange-50 rounded-xl">
              {ratingDescriptions.map((item, index) => (
                <div key={index} className="flex gap-2">
                  <div className="justify-center px-3 p-2 text-base text-center text-blue-500 bg-white rounded ">
                    {item.rating}
                  </div>
                  <div className="flex-auto my-auto text-xs md:text-base text-gray-600 capitalize">
                    {item.description}
                  </div>
                </div>
              ))}
            </div>
            <div>
              <TextElement
                className="text-md mt-2 text-gray-800"
                text="Why we love it"
                disableHover={true}
              />
              {whyWeLoveIt.map((reason, index) => (
                <div key={index} className="flex gap-1 mt-1 items-center">
                  <Tick />
                  <span className="text-gray-600">{reason}</span>
                </div>
              ))}
            </div>
          </>
        )}
        <div
          className="self-start mt-4 text-blue-500 cursor-pointer"
          onClick={toggleShowMore}
        >
          {showMore ? "Show less" : "Show more"}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

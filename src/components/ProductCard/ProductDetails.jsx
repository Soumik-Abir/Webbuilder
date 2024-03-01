import React from "react";
import TextElement from "../TextElement/TextElement";
import { ReactComponent as Tick } from "../../assets/Tick.svg";

const ProductDetails = ({ showMore, toggleShowMore }) => {
  return (
    <div className="flex flex-col w-full md:w-[52%] p-6">
      <div className="mt-2 text-xs md:text-base text-gray-600">
        <div>
          <span className="text-sm md:text-lg font-bold">
            WixPro 72-Inch Responsive Website Builder{" "}
          </span>
          - Comprehensive Digital Platform Creation Tool, Streamlined Design
          Interface for Professional Websites and Online Stores (Black/Blue)
        </div>
        <div className="mt-4 text-sm md:text-lg font-bold text-slate-700">
          Main highlights
        </div>
        <div className="mt-4">
          [What You Get]: Receive the WixPro website builder suite, access to
          premium design templates, an extensive library of widgets and apps,
          and detailed step-by-step guides.
        </div>
        {showMore && (
          <>
            <div className="flex gap-2 m-2 text-sky-700">
              <div className="p-1 text-xs md:text-sm bg-gray-100 rounded-md">28% off</div>
            </div>
            <div className="flex flex-col items-start p-2 bg-orange-50 rounded-xl">
              <div className="flex gap-2">
                <div className="justify-center px-3 p-2 text-base text-center text-blue-500 bg-white rounded ">
                  9.9
                </div>
                <div className="flex-auto my-auto text-xs md:text-base text-gray-600 capitalize">
                  building responsive
                </div>
              </div>
              <div className="flex gap-2 mt-2">
                <div className="justify-center px-3 py-2 text-base text-center text-blue-500 bg-white rounded ">
                  8.9
                </div>
                <div className="flex-auto my-auto text-xs md:text-base text-gray-600 capitalize">
                  Cool
                </div>
              </div>
              <div className="flex gap-2 mt-2">
                <div className="justify-center px-3 py-2 text-base text-center text-blue-500 bg-white rounded ">
                  8.9
                </div>
                <div className="flex-auto my-auto text-xs md:text-base text-gray-600 capitalize">
                  Docs
                </div>
              </div>
            </div>
            <div>
              <TextElement
                className="text-md mt-2 text-gray-800"
                text="Why we love it"
                disableHover={true}
              />
              <div className="flex gap-1 mt-1 items-center">
                <Tick />
                <span className="text-gray-600">Documentation</span>
              </div>
              <div className="flex gap-1 mt-1 items-center">
                <Tick />
                <span className="text-gray-600">Easy Use</span>
              </div>
              <div className="flex gap-1 mt-1 items-center">
                <Tick />
                <span className="text-gray-600">Out of box</span>
              </div>
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

// Header.jsx
import React from "react";
import { ReactComponent as RightTick } from "../../assets/Right_Tick.svg";
import { ReactComponent as Information } from "../../assets/Information_Icon.svg";
import Dropdown from "./DropDown";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
import TextElement from "../TextElement/TextElement";

const Header = () => {
  const textElements = [
    "Tools",
    "AWS Builder",
    "Start Build",
    "Build Supplies",
    "Tooling",
    "BlueHosting",
  ];
  const breadcrumbs = [
    { label: "Home", url: "/" },
    { label: "Hosting for all", url: "/hosting-for-all" },
    { label: "Hosting", url: "/hosting" },
    { label: "Hosting6", url: "/hosting6" },
    { label: "Hosting5", url: "/hosting5" }
  ];
  const releventOptions =["Tools", "AWS Builder", "Start Build", "Build Supplies", "Tooling", "BlueHosting" ] ;

  return (
    <>
      <div className="flex flex-col mt-16 m-8 mb-0 p-8 pb-0">
        <div className="my-4 text-3xl md:text-5xl text-slate-700">
          Best Website builders in the US
        </div>
        <div className="mt-4 bg-zinc-200 min-h-[2px]" />
        <div className="flex gap-4 my-4 items-center justify-between md:flex-row">
          {/* Container for the contents on the left */}
          <div className="flex items-center gap-4 md:flex">
            <div className="flex gap-1 items-center">
              <RightTick />
              {/* Conditionally render TextElement only on medium screens and above */}
              <TextElement
                text="Last Updated - February 22, 2020"
                className="hidden md:block"
              />
            </div>
            <div className="flex gap-1 items-center">
              <Information />
              {/* Conditionally render TextElement only on medium screens and above */}
              <TextElement
                text="Advertising Disclosure"
                className="hidden md:block"
              />
            </div>
          </div>
          {/* Container for the Dropdown */}
          <div className="flex items-center">
            <Dropdown 
              buttonText="Top Relevant"
              options={releventOptions}
              className="text-sm"
            />
          </div>
        </div>

        <div className="bg-zinc-200 min-h-[2px]" />
        <div className="hidden md:flex flex-wrap gap-10 p-8 items-center justify-self-start">
          {textElements.map((text, index) => (
            <TextElement key={index} text={text} />
          ))}
        </div>
        <div className="md:flex justify-start">
          <Breadcrumbs paths={breadcrumbs} />
        </div>
      </div>
    </>
  );
};

export default Header;

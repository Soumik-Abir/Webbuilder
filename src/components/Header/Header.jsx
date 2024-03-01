// Header.jsx
import React from "react";
import { ReactComponent as RightTick } from "../../assets/Right_Tick.svg";
import { ReactComponent as Information } from "../../assets/Information_Icon.svg";
import Dropdown from "./DropDown";
import TextElement from "./TextElement";

const Header = () => {
  const textElements = [
    "Tools",
    "AWS Builder",
    "Start Build",
    "Build Supplies",
    "Tooling",
    "BlueHosting",
  ];

  return (
    <>
      <div className="flex flex-col mt-16 m-8 p-8">
        <div className="my-2 text-3xl md:text-5xl text-slate-700">
          Best Website builders in the US
        </div>
        <div className="mt-2 bg-zinc-200 min-h-[2px]" />
        <div className="flex gap-4 my-2 items-center justify-between md:flex-row">
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
            <Dropdown />
          </div>
        </div>

        <div className="bg-zinc-200 min-h-[2px]" />
        <div className="hidden md:flex flex-wrap gap-10 p-8 items-center justify-self-start">
          {textElements.map((text, index) => (
            <TextElement key={index} text={text} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Header;

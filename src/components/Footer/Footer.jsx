import React from "react";
import TextElement from "../TextElement/TextElement";
import Dropdown from "../Header/DropDown";

const FooterSection = ({ title, texts, disableHover }) => {
  return (
    <div className="flex flex-col gap-4 pb-4 md:pb-16">
      <TextElement
        text={title}
        className="text-lg text-white font-bold"
        disableHover={disableHover}
      />
      {texts.map((text, index) => (
        <TextElement key={index} text={text} />
      ))}
    </div>
  );
};

const Footer = () => {
  const categoryTexts = ["Web Builder", "Hosting", "Data Center", "Robotic-Automation"];
  const contactTexts = ["Contact", "Privacy Policy", "Terms Of Service", "Categories", "About"];
  const countryOptions = ["United States", "United Kingdom", "Canada"]; 

  return (
    <div className="flex flex-col md:flex-row gap-16 justify-evenly bg-gray-800 m-1 p-8 md:p-16">
      
      <FooterSection title="CATEGORIES" texts={categoryTexts} disableHover={true} />
      
      
      <FooterSection title="CONTACT" texts={contactTexts} disableHover={true} />
      
      <div className="flex items-center mb-8 pb-8 md:pb-16">
        <TextElement text="United States" disableHover={true} />
        <Dropdown options={countryOptions} className="w-32 max-h-12"/>
      </div>
    </div>
  );
};

export default Footer;

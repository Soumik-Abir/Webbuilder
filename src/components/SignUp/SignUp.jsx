import React from "react";
import Button from "../Button/Button";
import TextElement from "../TextElement/TextElement";

const SignUp = () => {
  return (
    <>
      <div className="m-8 p-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <TextElement
            text="Sign up and get exclusive special deals"
            className="text-3xl md:text-4xl w-full md:w-2/4 mb-4 md:mb-0"
            disableHover={true} // Disable hover effect and cursor pointer
          />
          <div className="flex flex-col md:flex-row md:justify-end items-center w-full md:w-3/4">
            <input
              type="text"
              className="border md:h-12 p-2 w-full md:rounded-tl-md md:rounded-bl-md md:w-2/4"
            />

            <Button className="h-10 rounded mt-4 md:h-12 md:w-1/4 md:rounded-tr-md md:rounded-br-md md:mt-0 md:rounded-none">
              Sign Up
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;

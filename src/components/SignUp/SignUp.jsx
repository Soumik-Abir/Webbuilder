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
          <div className="flex justify-end items-center w-full md:w-3/4">
            <input
              type="text"
              className="border p-2 rounded-tl-md rounded-bl-md w-3/4 md:w-2/4"
            />
            <Button className="w-1/4 md:w-1/4">Sign Up</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;

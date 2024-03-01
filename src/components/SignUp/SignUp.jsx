import React from "react";
import TextElement from "../Header/TextElement";
import Button from "../Button/Button";

const SignUp = () => {
  return (
    <>
      <div className="m-8 p-8">
        <div className="flex justify-between items-center">
          <TextElement
            text="Sign up and get exclusive special deals"
            className="text-5xl w-3/4"
            disableHover={true} // Disable hover effect and cursor pointer
          />
          <div className="flex items-center w-2/4">
            <input
              type="text"
              className="border p-2 rounded-tl-md rounded-bl-md w-full"
            />
            <Button>Sign Up</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;

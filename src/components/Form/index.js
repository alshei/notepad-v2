import React from "react";
import { Link } from "react-router-dom";
import { Primary } from "../Buttons";

const Form = (props) => {
  return (
    <form className="w-[34rem] items-center  rounded-lg p-6 bg-slate-900 drop-shadow-md text-white">
      {props.children}
      {/* button and text */}
      <div className="p-3 flex justify-between items-center">
        <p className="text-white text-sm">
          <>
            {props.text} {props.link}
          </>
        </p>
        {props.button}
      </div>
    </form>
  );
};

export default Form;

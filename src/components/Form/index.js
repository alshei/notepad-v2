import React from "react";
import { Link } from "react-router-dom";
import { Primary } from "../Buttons";

const Form = () => {
  return (
    <form className="w-[34rem] items-center  rounded-lg p-6 bg-slate-900 drop-shadow-md text-white">
      {/* input field with label and error message */}
      <div className="p-3">
        <label className="block text-white text-sm  mb-2" for="username">
          Name
        </label>
        <div className="w-full items-center bg-white rounded-lg p-2.5 drop-shadow-lg text-black">
          <input
            className="w-full placeholder:text-slate-500 pl-1.5 pr-1.5 block focus:outline-none bg-transparent"
            id="name"
            placeholder="Enter name"
            type="text"
          />
        </div>
        <p className="text-red-500 text-xs italic mt-2">Error message here.</p>
      </div>

      <div className="p-3">
        <label className="block text-white text-sm  mb-2" for="password">
          Email
        </label>
        <div className="w-full items-center bg-white rounded-lg p-2.5 drop-shadow-lg text-black">
          <input
            className="w-full placeholder:text-slate-500 pl-1.5 pr-1.5 block focus:outline-none bg-transparent"
            id="email"
            placeholder="Enter email address"
            type="email"
          />
        </div>
        <p className="text-red-500 text-xs italic mt-2">Error message here.</p>
      </div>

      <div className="p-3">
        <label className="block text-white text-sm  mb-2" for="password">
          Password
        </label>
        <div className="w-full items-center bg-white rounded-lg p-2.5 drop-shadow-lg text-black">
          <input
            className="w-full placeholder:text-slate-500 pl-1.5 pr-1.5 block focus:outline-none bg-transparent"
            id="password"
            placeholder="Create a password"
            type="text"
          />
        </div>
        <p className="text-red-500 text-xs italic mt-2">Error message here.</p>
      </div>

      <div className="p-3">
        <label className="block text-white text-sm  mb-2" for="password">
          Confirm Password
        </label>
        <div className="w-full items-center bg-white rounded-lg p-2.5 drop-shadow-lg text-black">
          <input
            className="w-full placeholder:text-slate-500 pl-1.5 pr-1.5 block focus:outline-none bg-transparent"
            id="password"
            placeholder="Confirm your password"
            type="text"
          />
        </div>
        <p className="text-red-500 text-xs italic mt-2">Error message here.</p>
      </div>

      {/* button and text */}
      <div className="p-3 flex justify-between items-center">
        <p className="text-white text-sm">
          <>
            Have an account?{" "}
            <Link to="login">
              <p className="inline-flex text-sm text-lavender hover:text-white">
                Log in here.
              </p>
            </Link>
          </>
        </p>
        <Primary option="create account" link="#" />
      </div>
    </form>
  );
};

export default Form;

import React from "react";

const InputField = (props) => {
  return (
    <div className="p-3">
      <label className="block text-white text-sm  mb-2" for={props.id}>
        {props.label}
      </label>
      <div className="w-full items-center bg-white rounded-lg p-2.5 drop-shadow-lg text-black">
        <input
          className="w-full placeholder:text-slate-500 pl-1.5 pr-1.5 block focus:outline-none bg-transparent"
          id={props.id}
          placeholder={props.placeholder}
          type={props.type}
          onChange={props.onChange}
        />
      </div>
      <p className="text-red-500 text-xs italic mt-2">{props.errorMsg}</p>
    </div>
  );
};

export default InputField;

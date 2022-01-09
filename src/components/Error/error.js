import React from "react";

const Error = (props) => {
  return (
    <div className="p-3">
      <div className="w-full items-center border-2 border-bubblegum rounded p-3">
        <strong className="font-bold text-bubblegum">{props.title} </strong>
        <span class="block sm:inline text-bubblegum">{props.text}</span>
      </div>
    </div>
  );
};

export default Error;

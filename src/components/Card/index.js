import React, { useState } from "react";

const Card = (props) => {
  return (
    <div className="w-full">
      <div className="bg-mauve text-white w-full h-[38rem]">
        {props.content}
      </div>
    </div>
  );
};

export default Card;

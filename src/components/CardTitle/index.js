import React, { useState } from "react";
import { NotePencil, Trash, CaretUp } from "phosphor-react";

const CardTitle = (props) => {
  return (
    <div className="w-full">
      <div className="w-full h-full bg-slate-900 text-white">{props.title}</div>
    </div>
  );
};

export default CardTitle;

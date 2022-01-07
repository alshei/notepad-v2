import React from "react";
import { NotePencil, Trash } from "phosphor-react";

const Card = () => {
  return (
    <div className="w-full flex flex-row justify-between items-center rounded-lg pr-5 pl-5 pt-3 pb-3 bg-slate-800 drop-shadow-md text-white">
      <p className="">title</p>
      <div className="flex flex-row items-center gap-5 justify-between">
        <button>
          <NotePencil size="1.5rem" />
        </button>
        <button>
          <Trash size="1.5rem" />
        </button>
      </div>
    </div>
  );
};

export default Card;

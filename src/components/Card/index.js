import React from "react";
import { NotePencil, Trash } from "phosphor-react";

const Card = (props) => {
  return (
    <div>
      <div className="w-full flex flex-row justify-between items-center rounded-t-lg p-6 bg-slate-900 drop-shadow-md text-white">
        <p className="font-ptserif text-lg">{props.title}</p>
        <div className="flex flex-row items-center gap-5 justify-between">
          <a href={props.editlink}>
            <NotePencil size="1.5rem" />
          </a>
          <button onClick={props.deletefunc}>
            <Trash size="1.5rem" />
          </button>
        </div>
      </div>
      <div className="w-full rounded-b-lg p-6 bg-mauve drop-shadow-md">
        <div class="inline-flex items-center justify-center px-2 py-1 text-xs font-semibold leading-none text-white bg-bubblegum rounded-full mb-6">
          {props.category}
        </div>
        <blockquote className="text-white">
          <p className="mb-6">{props.content}</p>
          <p className="italic text-sm text-apricot">— created on date.</p>
        </blockquote>
      </div>
    </div>
  );
};

export default Card;

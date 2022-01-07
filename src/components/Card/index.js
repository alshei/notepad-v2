import React from "react";
import { NotePencil, Trash, CaretUp } from "phosphor-react";

const Card = (props) => {
  return (
    <div>
      <button className="w-full flex flex-row justify-between gap-5 items-center rounded-t-lg p-6 bg-slate-900 hover:bg-slate-800 drop-shadow-md text-white">
        <p className="font-ptserif text-lg text-left">{props.title}</p>

        <div className="flex flex-row items-center gap-5 justify-between">
          <a href={props.editlink}>
            <NotePencil size="1.5rem" />
          </a>
          <button onClick={props.deletefunc}>
            <Trash size="1.5rem" />
          </button>
        </div>
      </button>
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

import React from "react";
import { Link } from "react-router-dom";

export const Primary = (props) => {
  return (
    <>
      {props.link ? (
        <Link to={props.link}>
          <button
            className="flex items-center rounded-lg pr-5 pl-5 pt-3 pb-3 font-bold bg-bubblegum shadow-md shadow-bubblegum/50 hover:bg-apricot hover:shadow-apricot/50 text-white"
            type={props.type}
          >
            {props.option}
          </button>
        </Link>
      ) : (
        <button
          className="flex items-center rounded-lg pr-5 pl-5 pt-3 pb-3 font-bold bg-bubblegum shadow-md shadow-bubblegum/50 hover:bg-apricot hover:shadow-apricot/50 text-white"
          type={props.type}
        >
          {props.option}
        </button>
      )}
    </>
  );
};

export const Secondary = (props) => {
  return (
    <>
      {props.link ? (
        <Link to={props.link}>
          <button
            className="flex items-center rounded-lg pr-5 pl-5 pt-3 pb-3 font-bold bg-mauve shadow-md shadow-mauve/50 hover:bg-lavender hover:shadow-lavender/50 text-white"
            type={props.type}
          >
            {props.option}
          </button>
        </Link>
      ) : (
        <button
          className="flex items-center rounded-lg pr-5 pl-5 pt-3 pb-3 font-bold bg-mauve shadow-md shadow-mauve/50 hover:bg-lavender hover:shadow-lavender/50 text-white"
          type={props.type}
        >
          {props.option}
        </button>
      )}
    </>
  );
};

export const NavLink = (props) => {
  return (
    <>
      {props.link ? (
        <Link to={props.link}>
          <button
            className="flex items-center rounded-lg pr-3 pl-3 pt-2 pb-2 font-bold hover:bg-slate-900/50  text-white"
            type={props.type}
          >
            {props.option}
          </button>
        </Link>
      ) : (
        <button
          className="flex items-center rounded-lg pr-3 pl-3 pt-2 pb-2 font-bold hover:bg-slate-900/50  text-white"
          type={props.type}
        >
          {props.option}
        </button>
      )}
    </>
  );
};

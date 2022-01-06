import React from "react";

export const Primary = ({ option, link }) => {
  return (
    <div className="flex items-center rounded-lg pr-5 pl-5 pt-3 pb-3 font-bold bg-bubblegum shadow-md shadow-bubblegum/50 hover:bg-apricot hover:shadow-apricot/50 text-white">
      <a href={link}>{option}</a>
    </div>
  );
};

export const Secondary = ({ option, link }) => {
  return (
    <div className="flex items-center rounded-lg pr-5 pl-5 pt-3 pb-3 font-bold bg-mauve shadow-md shadow-mauve/50 hover:bg-lavender hover:shadow-lavender/50 text-white">
      <a href={link}>{option}</a>
    </div>
  );
};

export const NavLink = ({ option, link }) => {
  return (
    <div className="flex items-center rounded-lg pr-3 pl-3 pt-2 pb-2 font-bold hover:bg-slate-900/50 text-white">
      <a href={link}>{option}</a>
    </div>
  );
};

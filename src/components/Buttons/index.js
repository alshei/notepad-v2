import React from "react";

export const Primary = ({ text }) => {
  return (
    <div className="flex items-center rounded-lg pr-5 pl-5 pt-3 pb-3 font-bold bg-bubblegum shadow-lg shadow-bubblegum/50 hover:bg-apricot hover:shadow-apricot/50 text-white">
      {text}
    </div>
  );
};

export const NavLink = ({ text }) => {
  return (
    <div className="flex items-center rounded-lg pr-3 pl-3 pt-2 pb-2 font-bold hover:bg-slate-900/50">
      {text}
    </div>
  );
};

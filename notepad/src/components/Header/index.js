import React, { useState, useEffect } from "react";
import { MagnifyingGlass, MoonStars, Sun } from "phosphor-react";
import classNames from "classnames";
import logo from "../../images/logo.svg";
import icon from "../../images/icon.jpg";
import Dropdown from "../Dropdown";

const Header = () => {
  const [dark, setDark] = useState(true);

  const headerClass = (color) =>
    classNames({
      "fixed w-full flex flex-row items-center justify-between text-white h-20 pl-40 pr-40": true,
      "bg-slate-800": color === null || color,
      "bg-slate-400": !color,
    });

  useEffect(() => {
    console.log("is using dark mode", dark);
  }, [dark]);

  return (
    <div className={headerClass(dark)}>
      <div>
        <a href="/">
          <img src={logo} alt="notepad logo" />
        </a>
      </div>

      <div>
        <div className="flex items-center bg-white rounded-lg p-1.5 drop-shadow-lg text-black">
          <MagnifyingGlass size="1.3rem" />
          <input
            className="placeholder:text-black pl-1.5 pr-1.5 block sm:text-sm focus:outline-none"
            placeholder="Type to search notes..."
            type="text"
            name="search"
          />
        </div>
      </div>

      <div className="w-64 flex flex-row items-center justify-between">
        <div className="flex items-center rounded-lg pr-3 pl-3 pt-2 pb-2 font-bold hover:bg-slate-900">
          <a href="/mynotes">my notes</a>
        </div>

        <button onClick={() => setDark(!dark)}>
          {dark ? <MoonStars size="1.8rem" /> : <Sun size="1.8rem" />}
        </button>

        <div className="pl-2">
          <img
            src={icon}
            alt="profile"
            className="flex items-center rounded-full w-10 h-10"
          />

          <Dropdown />
        </div>
      </div>
    </div>
  );
};

export default Header;

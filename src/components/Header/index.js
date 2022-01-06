import React, { useState, useEffect } from "react";
import { MagnifyingGlass, MoonStars, Sun } from "phosphor-react";
import classNames from "classnames";
import logo from "../../images/logo.svg";
import Dropdown from "../Dropdown";
import { NavLink } from "../Buttons";

const Header = () => {
  const [dark, setDark] = useState(true);

  const headerClass = (color) =>
    classNames({
      "fixed backdrop-blur-sm w-full flex flex-row items-center justify-between text-white h-20 pl-56 pr-56": true,
      "bg-slate-800/50": color === null || color,
      "bg-slate-400/50": !color,
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
            className="placeholder:text-slate-500 pl-1.5 pr-1.5 block sm:text-sm focus:outline-none"
            placeholder="search notes..."
            type="text"
            name="search"
          />
        </div>
      </div>

      <div className="flex flex-row items-center gap-5 justify-between">
        <button onClick={() => setDark(!dark)}>
          {dark ? <MoonStars size="1.8rem" /> : <Sun size="1.8rem" />}
        </button>

        <a href="/mynotes">
          <NavLink text="my notes" />
        </a>

        <a href="#">
          <NavLink text="create note" />
        </a>

        <div className="pl-2">
          <Dropdown />
        </div>
      </div>
    </div>
  );
};

export default Header;
import React, { useState, useEffect } from "react";
import { MagnifyingGlass, MoonStars, Sun } from "phosphor-react";
import logo from "../../images/logo.svg";
import Dropdown from "../Dropdown";
import { NavLink } from "../Buttons";

// for dropdown links
const options = [
  { label: "edit profile", link: "#" },
  { label: "settings", link: "#" },
  { label: "log out", link: "#" },
];

// change icon for when toggling theme
const Header = () => {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    console.log("is using dark mode", dark);
  }, [dark]);

  return (
    // navbar
    <div className="bg-slate-800/50 fixed backdrop-blur-sm w-full flex flex-row items-center justify-between text-white h-20 pl-56 pr-56">
      <div>
        {/* logo */}
        <a href="/">
          <img src={logo} alt="notepad logo" />
        </a>
      </div>

      <div>
        {/* search bar */}
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
        {/* toggle theme icon */}
        <button onClick={() => setDark(!dark)}>
          {dark ? <MoonStars size="1.8rem" /> : <Sun size="1.8rem" />}
        </button>

        {/* navigation links */}
        <NavLink option="my notes" link="/mynotes" />

        <NavLink option="create note" link="#" />

        <div>
          {/* dropdown links */}
          <Dropdown options={options} />
        </div>
      </div>
    </div>
  );
};

export default Header;

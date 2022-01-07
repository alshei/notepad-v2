import React, { useState, useEffect } from "react";
import { MagnifyingGlass, MoonStars, Sun } from "phosphor-react";
import logo from "../../images/logo.svg";
import Dropdown from "../Dropdown";
import { Primary, Secondary, NavLink } from "../Buttons";
import { Link } from "react-router-dom";

// options for dropdown links
const options = [
  { label: "edit profile", link: "/editprofile" },
  { label: "settings", link: "/settings" },
  { label: "log out", link: "/logout" },
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
        <Link to="/">
          <img src={logo} alt="notepad logo" width="200px" />
        </Link>
      </div>

      <div className="flex flex-row items-center gap-5 justify-between">
        {/* WHEN USER IS LOGGED IN */}
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

        {/* toggle theme icon */}
        <button onClick={() => setDark(!dark)}>
          {dark ? <MoonStars size="1.8rem" /> : <Sun size="1.8rem" />}
        </button>

        {/* WHEN USER IS LOGGED IN */}
        {/* navigation links */}
        <NavLink option="my notes" link="/mynotes" />
        <NavLink option="create note" link="/createnote" />

        {/* WHEN USER IS NOT LOGGED IN */}
        {/* sign up and log in buttons */}
        {/* <Primary option="sign up" link="#" />
        <Secondary option="log in" link="#" /> */}

        <div>
          {/* WHEN USER IS LOGGED IN */}
          {/* dropdown links */}
          <Dropdown options={options} />
        </div>
      </div>
    </div>
  );
};

export default Header;

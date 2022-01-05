import React, { useState, useEffect } from "react";
import { MagnifyingGlass, CaretDown, MoonStars, Sun } from "phosphor-react";
import classNames from "classnames";
// import logo from "../../images/logo.svg";

const Header = (props) => {
  const [dark, setDark] = useState(true);

  const headerClass = (color) =>
    classNames({
      "fixed w-full flex items-center justify-between": true,
      "bg-indigo-900": color === null || color,
      "bg-indigo-300": !color,
    });

  useEffect(() => {
    console.log("is using dark mode", dark);
  }, [dark]);

  return (
    <div className={headerClass(dark)}>
      <a href="/" class="logo">
        <img src={props.img} alt="notepad logo" />
      </a>

      <ul className="list-none flex">
        <li className="flex items-center p-2 no-underline text-black">
          <div className="search">
            <MagnifyingGlass size="1.3rem" />
            <input type="text" placeholder="type to search..."></input>
          </div>
        </li>
        <li className="nav-item">
          <button onClick={() => setDark(!dark)}>
            {dark ? <MoonStars size="1.3rem" /> : <Sun size="1.3rem" />}
          </button>
        </li>
        <li className="nav-item">
          <a href="/mynotes">my notes</a>
        </li>
        <li className="nav-item">
          <div className="dropdown">
            <a href="#">
              alina sheikh <CaretDown size="1.3rem" />
            </a>
            <div className="dropdown-content">
              <a href="#">my profile</a>
              <a href="#">logout</a>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Header;

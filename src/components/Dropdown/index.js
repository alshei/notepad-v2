import React, { useState } from "react";
import icon from "../../images/icon.jpg";
import { Link, useHistory } from "react-router-dom";

const Dropdown = ({ options }) => {
  const [showOptions, setShowOptions] = useState(false);
  const handleClick = () => {
    setShowOptions(!showOptions);
  };

  const history = useHistory();

  return (
    <div className="flex items-center justify-end">
      <div className="relative inline-block text-left">
        <img
          src={icon}
          alt="profile"
          className="flex items-center rounded-full w-10 h-10 cursor-pointer hover:outline outline-white outline-2"
          onClick={handleClick}
        />

        {showOptions && (
          <div
            className="origin-top-right absolute right-0 mt-2 w-32 rounded-md shadow-lg bg-mauve ring-1 ring-black ring-opacity-5 focus:outline-none"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="menubutton"
            tabindex="-1"
          >
            <div class="py-1" role="none">
              {options &&
                options.map((option) => (
                  <Link
                    to={option.link}
                    className="text-white block px-4 py-2 text-sm hover:bg-slate-800"
                    role="menuitem"
                    tabindex="-1"
                  >
                    {option.label}
                  </Link>
                ))}

              {/* logout button w functionality */}
              <button
                className="w-full text-left text-white block px-4 py-2 text-sm hover:bg-slate-800"
                role="menuitem"
                tabindex="-1"
                onClick={() => {
                  localStorage.removeItem("userInfo");
                  history.push("/");
                }}
              >
                log out
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dropdown;

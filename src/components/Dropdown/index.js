import React, { useState } from "react";
import icon from "../../images/icon.jpg";

const Dropdown = () => {
  const [showOptions, setShowOptions] = useState(false);
  const handleClick = () => {
    setShowOptions(!showOptions);
  };

  return (
    <div className="flex items-center justify-end">
      <div className="relative inline-block text-left">
        <img
          src={icon}
          alt="profile"
          className="flex items-center rounded-full w-10 h-10 cursor-pointer hover:outline outline-2"
          onClick={handleClick}
        />

        {showOptions && (
          <div
            className="origin-top-right absolute right-0 mt-2 w-32 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="menu-button"
            tabindex="-1"
          >
            <div class="py-1" role="none">
              <a
                href="#"
                className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100"
                role="menuitem"
                tabindex="-1"
                id="menu-item-0"
              >
                edit profile
              </a>
              <a
                href="#"
                className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100"
                role="menuitem"
                tabindex="-1"
                id="menu-item-1"
              >
                settings
              </a>
              <a
                href="#"
                className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100"
                role="menuitem"
                tabindex="-1"
                id="menu-item-1"
              >
                log out
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dropdown;

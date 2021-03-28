import clsx from "clsx";
import React from "react";

import Logo from "../Logo";

const Header = () => {
  return (
    <div className="flex flex-col justify-center h-16 bg-gray-600">
      <div className="flex justify-between mx-3">
        <Logo />
        <div
          className={clsx(
            "flex items-center justify-center w-12 h-12 font-bold",
            "text-white bg-yellow-400 rounded-full"
          )}
        >
          <span>BK</span>
        </div>
      </div>
    </div>
  );
};

export default Header;

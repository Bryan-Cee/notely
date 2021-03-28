import clsx from "clsx";
import React from "react";

import styles from "./index.module.css";

const NavigationBar = () => {
  return (
    <div className={clsx(styles.nav, "max-w-xs bg-blue-300 w-80")}>
      <div>
        <ul>
          <li>a</li>
        </ul>
      </div>
    </div>
  );
};

export default NavigationBar;

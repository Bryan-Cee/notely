import clsx from "clsx";
import React from "react";

import styles from "./index.module.css";

const Logo = () => {
  return (
    <span className={clsx(styles.logo, "text-4xl font-extrabold text-white")}>
      Notely
    </span>
  );
};

export default Logo;

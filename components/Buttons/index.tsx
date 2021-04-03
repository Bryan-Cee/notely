import clsx from "clsx";
import React, { HTMLAttributes } from "react";

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  label: string;
}

const Button: React.FC<ButtonProps> = ({ label, className }) => {
  return (
    <button
      className={clsx("px-4 py-2 uppercase min-w-90 rounded-md", className)}
    >
      {label}
    </button>
  );
};

export default Button;

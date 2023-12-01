import clsx from "clsx";
import React, { HTMLProps } from "react";

interface ButtonProps extends HTMLProps<HTMLButtonElement> {
  type: "button" | "submit";
  title: string;
};

const Button = ({ type, title, className }: ButtonProps) => {
  return (
    <button type={type} className={clsx("p-4 px-10 rounded", className)}>
      {title}
    </button>
  );
};

export default Button;

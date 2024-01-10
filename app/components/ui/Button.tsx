import React from "react";
import clsx from "clsx";

type Props = {
  variant?: "default" | "primary" | "secondary" | "outline" | "ghost";
  type?: "submit" | "button";
  size?: "block";
  icon?: React.ReactElement;
  label: string;
  onClick?: () => void;
  formId?:string
};

const Button = ({ type, icon, size, variant, label, onClick,formId }: Props) => {
  return (
    <button
    form={formId}
      type={type}
      onClick={onClick}
      className={clsx(
        size === "block" ? "w-full" : "w-fit ",
        variant === "primary" && " bg-primary text-white",
        variant === "secondary" && "  bg-secondary  text-dark",
        variant === "outline" && " bg-white text-dark border-dark hover:bg-gray-100 transition-all",
        variant === "ghost" ? '" py-2.5 px-5 hover:bg-gray-100 ' : ' py-3 px-10 md:px-16 md:py-4 ',
        " space-x-2  cursor-pointer rounded-md hover:opacity-90 h-fit transition-all justify-center font-bold flex items-center gap-2"
      )}
    >
      {icon} {label}
    </button>
  );
};

export default Button;

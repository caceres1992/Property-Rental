import React from "react";
import clsx from "clsx";

type Props = {
  variant?: "default" | "primary" | "secondary" | "outline";
  type?: "submit" | "button"
  size?: "block";
  icon?: React.ReactElement;
  label: string;
  onClick?: () => void;
};

const Button = ({type, icon, size, variant, label, onClick }: Props) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={clsx(
        size === "block" ? "w-full" : "w-fit ",
        variant === "primary" && " bg-primary text-white",
        variant === "secondary" && "  bg-secondary  text-dark",
        variant === "outline" && " bg-white text-dark border-dark",
        "px-20 py-4 space-x-2 rounded-md hover:opacity-90 h-fit transition-all justify-center font-bold flex items-center gap-2"
      )}
    >
      {icon} {label}
    </button>
  );
};

export default Button;

import clsx from "clsx";
import React from "react";

type Props = {
  name: string;
  type: string;
  label?: string;
  placeholder: string;
  size?: "block";
};

const Input = ({ name, type, label, placeholder, size }: Props) => {
  return (
    <div className="flex flex-col">
      {label && (
        <label
          className=" text-dark/70  mb-1.5 font-medium capitalize text-sm"
          htmlFor={name}
        >
          {label}
        </label>
      )}
      <input
        name={name}
        className={clsx(
          size && "w-full",
          "px-2 py-3.5 w-fit",
          "border border-dark/20 rounded-md text-dark"
        )}
        placeholder={placeholder}
        type={type}
      />
    </div>
  );
};

export default Input;

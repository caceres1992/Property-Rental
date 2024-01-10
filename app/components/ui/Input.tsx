import clsx from "clsx";
import React from "react";

type Props = {
  name: string;
  type: string;
  label?: string;
  placeholder?: string;
  value?: any;
  valueCenter?: boolean;
  size?: "block";
  register?: any;
  errorMessage?: string | undefined;
  optional?: boolean;
};

const Input = ({
  name,
  type,
  label,
  placeholder,
  size,
  value,
  valueCenter,
  register,
  errorMessage,
  optional
}: Props) => {
  return (
    <div className="flex flex-col">
      {label && (
        <label
          className=" text-dark/70  mb-1.5 font-medium capitalize text-sm"
          htmlFor={name}
        >
          {label} {optional ? <span className=" text-xs text-gray-400">(Optional)</span> :<span className=" text-xs text-primary">*</span>}
        </label>
      )}
      {register ? (
        <input
          {...register(name)}
          name={name}
          className={clsx(
            errorMessage && " outline-primary border-primary",
            size && "w-full",
            valueCenter && "text-center",
            "px-2 py-3.5 w-fit",
            "border border-dark/20 rounded-md text-dark   "
          )}
          placeholder={placeholder}
          type={type}
          value={value}
        />
      ) : (
        <input
          name={name}
          className={clsx(
            size && "w-full",
            valueCenter && "text-center",
            "px-2 py-3.5 w-fit",
            "border border-dark/20 rounded-md text-dark  focus:outline-primary"
          )}
          placeholder={placeholder}
          type={type}
          value={value}
        />
      )}

      {errorMessage && (
        <p className=" text-primary  uppercase text-xs">{errorMessage}</p>
      )}
    </div>
  );
};

export default Input;

import React from "react";
import Button from "./ui/Button";
import Input from "./ui/Input";
import { PiMinus, PiPlus } from "react-icons/pi";

type Props = {
  label: string;
  name: string;
  value?: number;
  onClickInc?: () => void;
  onClickDec?: () => void;
  icButtonIsDisabled: boolean;
};
const GuestInput = ({
  name,
  label,
  value,
  onClickInc,
  onClickDec,
  icButtonIsDisabled,
}: Props) => {
  return (
    <div className=" text-dark py-2 space-y-1  w-full gap-3.5  flex justify-between items-center   border-b pb-4 h-fit">
      <p className=" text-sm font-medium">{label}</p>
      <div className=" flex justify-between items-center gap-x-4">
        <button
          type="button"
          disabled={
            name === "adults" && value === 1
              ? true
              : false || (name === "children" && value === 0)
              ? true
              : false
          }
          className=" border   flex justify-center  p-2  rounded-md disabled:text-gray-300"
          onClick={() => (onClickDec ? onClickDec() : undefined)}
        >
          <PiMinus />
        </button>
        <span className="  p-2  text-center rounded-md w-10 ">{value}</span>
        <button
          type="button"
          disabled={icButtonIsDisabled}
          className=" border  flex justify-center p-2  rounded-md disabled:text-gray-300"
          onClick={() => (onClickInc ? onClickInc() : undefined)}
        >
          <PiPlus />
        </button>
      </div>
    </div>
  );
};

export default GuestInput;

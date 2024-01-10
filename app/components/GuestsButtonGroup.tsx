"use client";
import React from "react";
import GuestInput from "./guestInput";
import useStore from "../lib/zustandConfig";

type Props = {};

const GuestsButtonGroup = (props: Props) => {
  const onChangeAdult = useStore((state) => state.onChangeAdult);
  const onChangeChild = useStore((state) => state.onChangeChild);
  const adultQty = useStore((state) => state.adults);
  const childrenQty = useStore((state) => state.children);

  const maxPeople: number = 5;

  const incrementAdult = () => {
    onChangeAdult(adultQty + 1);
  };

  const decrementAdult = (): void => {
    if (adultQty == 1) {
      onChangeAdult(1);
      return;
    }
    onChangeAdult(adultQty - 1);
  };

  const incrementChildren = () => {
    onChangeChild(childrenQty + 1);
  };

  const decrementChildren = (): void => {
    if (childrenQty == 0) {
      return;
    }
    onChangeChild(childrenQty - 1);
  };

  return (
    <div className=" relative  px-5 pb-5 z-10">
      <GuestInput
        label="Adults"
        name="adults"
        value={adultQty}
        icButtonIsDisabled={adultQty + childrenQty === maxPeople}
        onClickInc={incrementAdult}
        onClickDec={decrementAdult}
      />
      <GuestInput
        label="Children under 17"
        name="children"
        value={childrenQty}
        icButtonIsDisabled={adultQty + childrenQty === maxPeople}
        onClickInc={incrementChildren}
        onClickDec={decrementChildren}
      />
    </div>
  );
};

export default GuestsButtonGroup;

"use client";
import React from "react";
import Button from "./ui/Button";
import useStore from "../lib/zustandConfig";
import moment from "moment";
import { numberFormatter } from "../lib/numberFormatter";
import Link from "next/link";
import clsx from "clsx";

type Props = {};

const BookingBottomButton = (props: Props) => {
  const selectedDates = useStore((state) => state.selectedDates);
  const showDrawerForm = useStore((state) => state.handleDrawerModal);
  const drawerModalIsActive = useStore((state) => state.drawerModalIsActive);
  console.log("example", BookingBottomButton);
  return (
    <div className={clsx(
      drawerModalIsActive?' -bottom-40':'bottom-0',
      "xl:hidden p-5  border-t  bg-white text-center sticky transition-all ease-in-out   z-50 flex justify-between items-center")}>
      <div className=" text-left text-dark">
        <p>
          $
          {selectedDates.length == 2 &&
            numberFormatter.format(
              320 * moment(selectedDates[1]).diff(selectedDates[0], "days")
            )}{" "}
          X{" "}
          {selectedDates.length == 2
            ? moment(selectedDates[1]).diff(selectedDates[0], "days")
            : "0"}{" "}
          nights
        </p>
        <Link href={"#availability"} className=" text-sm font-medium underline">
          {selectedDates.length === 0
            ? "Select your checking and checkout"
            : moment(selectedDates[0]).format("MMM DD") + " - "}
          {selectedDates.length === 2
            ? moment(selectedDates[1]).format("ll")
            : ""}
        </Link>
      </div>
      <div>
        <Button
          label="Reserve"
          variant={"primary"}
          disable={selectedDates.length < 2}
          onClick={() => showDrawerForm(true)}
        />
      </div>
    </div>
  );
};

export default BookingBottomButton;

"use client";
import React, { FormEvent, useState } from "react";
import { CiCalendar } from "react-icons/ci";
import CalendarBooking from "./CalendarBooking";
import moment from "moment";
import toast from "react-hot-toast";
import useStore from "../lib/zustandConfig";
import Button from "./ui/Button";

const reserved = [
  {
    startDate: new Date(2023, 12, 31),
    endDate: new Date(2024, 1, 9),
  },
];

type Props = {};

const BookingForm = (props: Props) => {
  const selectedDates = useStore((state) => state.selectedDates);
  const [openCalendar, setOpenCalendar] = useState(false);

  const submitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const numberFormatter = new Intl.NumberFormat("en-US", {
    style: "decimal",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  return (
    <div
      onMouseLeave={() => setOpenCalendar(false)}
      className=" w-full border  rounded-md p-5 space-y-4  border-dark/20  my-20 sticky top-20   z-50"
    >
      <h2 className=" font-bold text-dark">12312 Millerbrook Dr</h2>
      {selectedDates.length == 2 && (
        <p className=" text-dark font-medium  ">
          {" "}
          ${" "}
          {selectedDates.length == 2 &&
            numberFormatter.format(
              200 * moment(selectedDates[1]).diff(selectedDates[0], "days")
            )}{" "}
          X{" "}
          {selectedDates.length == 2
            ? moment(selectedDates[1]).diff(selectedDates[0], "days")
            : "0"}{" "}
          nights
        </p>
      )}
      <form onSubmit={submitForm} className=" relative space-y-5  ">
        <div
          onClick={() => setOpenCalendar(true)}
          className="flex  flex-row  justify-between border p-3.5 rounded-md  cursor-pointer relative"
        >
          <div className=" flex gap-1">
            <CiCalendar size={20} />

            {selectedDates.length === 0
              ? "Check in"
              : moment(selectedDates[0]).format("MMM DD")}
          </div>
          <div>to</div>
          <div className=" flex gap-1">
            <CiCalendar size={20} />
            {selectedDates.length === 2
              ? moment(selectedDates[1]).format("ll")
              : "Check out"}
          </div>
        </div>
        <div className=" absolute   -left-40 top-10 z-10 bg-white  rounded-md">
          {openCalendar && <CalendarBooking reserved={reserved} />}
        </div>
        <div
          onClick={() => toast.error("We are still working on this")}
          className="flex  flex-row  justify-between border p-3.5 rounded-md  cursor-pointer relative"
        >
          <div className=" flex gap-1">
            <p>2 guests</p>
          </div>
        </div>
        <Button label="Reserve" variant="primary" size="block" />
      </form>
    </div>
  );
};

export default BookingForm;

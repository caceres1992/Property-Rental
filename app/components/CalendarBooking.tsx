"use client";
import Calendar from "@demark-pro/react-booking-calendar";
import React, { useCallback, useEffect, useState } from "react";
import toast from "react-hot-toast";
import Button from "./ui/Button";
import { IoCalendarClear } from "react-icons/io5";
import useStore from "../lib/zustandConfig";

const reserved = [
  {
    startDate: new Date(2023, 12, 31),
    endDate: new Date(2024, 1, 9),
  },
];


type Props = {
  handleChange?: (e: any) => void;
  selectedDates?: any[];
  border?: boolean;
};

const CalendarBooking = ({  border }: Props) => {
  const setSelectedDates = useStore((state) => state.setSelectedDates);
  const monthCaptured = useStore((state) => state.monthCaptured);
  const yearCaptured = useStore((state) => state.yearCaptured);
  const setMonthCaptured = useStore((state) => state.setOnchangeMonth);

  const selectedDates = useStore((state) => state.selectedDates);
  const handleChange = (date: any) => {
    setSelectedDates(date);
  };

  const checkMonth = useCallback(() => {
    console.log(monthCaptured);
    return monthCaptured;
  }, [monthCaptured]);
  const checkYear = useCallback(() => {
    return yearCaptured;
  }, [yearCaptured]);

  return (
    <div
      className={`${border ? "border" : ""} border-gray-200 rounded-md  w-full h-full `}
    >
      <Calendar
        selected={selectedDates}
        onChange={handleChange}
        onOverbook={(e, err) => toast.error("This date is booked already.")}
        reserved={reserved}
        month={checkMonth()}
        year={checkYear()}
        variant={"booking"}
        onMonthChange={(month, year) => {
          setMonthCaptured(month, year);
        }}
        dateOfStartMonth={2}
        isStart={true}
        range={true}
      />
      <div className=" relative ml-2 mt-3">
        <Button
          label="Clear dates"
          variant={"outline"}
          icon={<IoCalendarClear />}
          onClick={() => handleChange([])}
        />
      </div>
    </div>
  );
};

export default CalendarBooking;

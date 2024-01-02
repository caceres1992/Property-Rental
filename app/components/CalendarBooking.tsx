"use client";
import Calendar from "@demark-pro/react-booking-calendar";
import React from "react";
import toast from "react-hot-toast";
import Button from "./ui/Button";
import { IoCalendarClear } from "react-icons/io5";
import useStore from "../lib/zustandConfig";

type Props = {
  handleChange?: (e: any) => void;
  reserved: any[];
  selectedDates?: any[];
};

const CalendarBooking = ({reserved }: Props) => {
  const setSelectedDates = useStore((state) => state.setSelectedDates);
  const selectedDates = useStore((state) => state.selectedDates);

  const handleChange = (e: any) => {
    setSelectedDates(e);
  };
  return (
    <div className=" border border-gray-200 rounded-md py-10">
      <Calendar
        selected={selectedDates}
        onChange={handleChange}
        onOverbook={(e, err) => toast.error("This date is booked already.")}
        reserved={reserved}
        variant={"booking"}
        dateFnsOptions={{ weekStartsOn: 1 }}
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

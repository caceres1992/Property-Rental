"use client";
import React, { useState } from "react";
import Calendar from "@demark-pro/react-booking-calendar";
import moment from "moment";
import { IoCalendarClear } from "react-icons/io5";
import Button from "./ui/Button";
import toast from "react-hot-toast";
import CalendarBooking from "./CalendarBooking";

const reserved = [
  {
    startDate: new Date(2023, 12, 31),
    endDate: new Date(2024, 1, 9),
  },
];

type Props = {};

const PropertyReservation = (props: Props) => {
  const [selectedDates, setSelectedDates] = useState([]);
  const handleChange = (e: any) => {
    setSelectedDates(e);
  };

  return (
    <div className=" pb-20">
      <div id="availability" className=" py-10">
        <div className=" container  space-y-10">
          <div>
            <p className=" text-dark font-bold text-lg">
              {selectedDates.length === 0 && "Select your Check-In"}
              {selectedDates.length === 1 && "Select your Check-Out "}
              {selectedDates.length === 2 && "5 nights in 12312 Millerbrook Dr"}
            </p>
            <p className=" text-dark">
              {selectedDates.length === 2
                ? moment(selectedDates[0], "").format("MMM DD") +
                  " ~ " +
                  moment(selectedDates[1]).format("ll")
                : "Add your travel dates for exact pricing"}
            </p>
          </div>

          <CalendarBooking
            handleChange={handleChange}
            selectedDates={selectedDates}
            reserved={reserved}
          />
        </div>
      </div>
    </div>
  );
};

export default PropertyReservation;

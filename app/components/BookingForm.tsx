"use client";
import React, { FormEvent, useState } from "react";
import { CiCalendar } from "react-icons/ci";
import CalendarBooking from "./CalendarBooking";
import moment from "moment";

const reserved = [
  {
    startDate: new Date(2023, 12, 31),
    endDate: new Date(2024, 1, 9),
  },
];

type Props = {};

const BookingForm = (props: Props) => {
  const [selectedDates, setSelectedDates] = useState([]);
  const [openCalendar, setOpenCalendar] = useState(false);
  const handleChange = (e: any) => {
    setSelectedDates(e);
  };

  const submitForm = (e:FormEvent<HTMLFormElement>)=>{
      e.preventDefault()
  }  
  return (
    <div
      onMouseLeave={() => setOpenCalendar(false)}
      className=" w-full border  rounded-md p-5 space-y-4  border-dark/20  my-20 sticky top-0  z-50"
    >
      <h2 className=" font-bold text-dark">12312 Millerbrook Dr</h2>
      <form onSubmit={submitForm} className=" relative  " >
        <div
          onClick={() => setOpenCalendar(true)}
          className="flex  flex-row  justify-between border p-3.5 rounded-md  cursor-pointer relative"
        >
          <div className=" flex gap-1">
            <CiCalendar size={20} />
          
            {selectedDates.length === 0 ?'Check in': moment(selectedDates[0]).format('MMM DD')}
          </div>
          <div>to</div>
          <div className=" flex gap-1">
            <CiCalendar size={20} />
            {selectedDates.length === 2 ? moment(selectedDates[1]).format('ll') :'Check out'}
          </div>
        </div>
        <div className=" absolute   -left-40 top-14 z-10 bg-white  rounded-md">
          {openCalendar && (
            <CalendarBooking
              handleChange={handleChange}
              selectedDates={selectedDates}
              reserved={reserved}
            />
          )}
        </div>

        <select className="flex  flex-row  justify-between border p-3.5 rounded-md  cursor-pointer relative">2</select>
      </form>
    </div>
  );
};

export default BookingForm;

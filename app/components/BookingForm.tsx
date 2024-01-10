"use client";
import React, { FormEvent, useState } from "react";
import { CiCalendar } from "react-icons/ci";
import CalendarBooking from "./CalendarBooking";
import moment from "moment";
import toast from "react-hot-toast";
import useStore from "../lib/zustandConfig";
import Button from "./ui/Button";
import GuestsButtonGroup from "./GuestsButtonGroup";
import { IoClose } from "react-icons/io5";
import { numberFormatter } from "../lib/numberFormatter";



type Props = {};

const BookingForm = (props: Props) => {
  const selectedDates = useStore((state) => state.selectedDates);
  const adultsQty = useStore((state) => state.adults);
  const childrenQty = useStore((state) => state.children);
  const [openCalendar, setOpenCalendar] = useState(false);
  const [openGuestInputs, setOpenGuestInputs] = useState(false);
  const handleDrawerModal = useStore((state) => state.handleDrawerModal);

  const submitForm = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

  };

   
  return (
    <div
      onClickCapture={(e) => console.log(e)}
      className=" w-full border  rounded-md p-5 space-y-4  border-dark/20  my-20 sticky top-20   z-50"
    >
      <h2 className=" font-bold text-dark">12312 Millerbrook Dr</h2>
      {selectedDates.length == 2 && (
        <p className=" text-dark font-medium  ">
          {" "}
          ${" "}
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
      )}
      <form onSubmit={submitForm} className=" relative space-y-5  text-dark ">
        <div
          onClick={() => {
            setOpenGuestInputs(false);
            setOpenCalendar(true);
          }}
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
        {openCalendar && (
          <div className=" absolute   border -left-40 top-10 z-10 bg-white  rounded-md">
            <button
              className=" m-2  p-1 rounded-md hover:bg-gray-100"
              onClick={() => {
                setOpenCalendar(false);
              }}
            >
              <IoClose />
            </button>
            <CalendarBooking />
          </div>
        )}
        <div className="flex  flex-row  justify-between border p-3.5 rounded-md   relative">
          <div
            className=" flex gap-1  cursor-pointer  w-full"
            onClick={() => {
              setOpenGuestInputs(true);
              setOpenCalendar(false);
            }}
          >
            <p>
              {adultsQty + childrenQty > 1
                ? `${adultsQty + childrenQty} guests`
                : " 1 guest"}{" "}
            </p>
          </div>
          {openGuestInputs && (
            <div className=" absolute z-10   w-full left-0   border    top-14     bg-white  rounded-md">
              <button
                className=" m-2  p-1 rounded-md hover:bg-gray-100"
                onClick={() => {
                  setOpenGuestInputs(false);
                }}
              >
                <IoClose />
              </button>
              <GuestsButtonGroup />
              <p className=" p-5 text-sm text-center">
                This place has a maximum of 5 guests.
              </p>
            </div>
          )}
        </div>

        <Button
          onClick={() => {
            selectedDates.length > 1
              ? handleDrawerModal(true)
              : setOpenCalendar(true);
          }}
          label={selectedDates.length > 1 ? "Reserve" : "Check availability"}
          variant="primary"
          size="block"
        />
      </form>
    </div>
  );
};

export default BookingForm;

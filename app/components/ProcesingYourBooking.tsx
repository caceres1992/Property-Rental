"use client";
import React, { useEffect, useState } from "react";
import { ImSpinner2 } from "react-icons/im";
import ConfettiExplosion, { ConfettiProps } from "react-confetti-explosion";
import { FaRegCalendarCheck } from "react-icons/fa6";
import Link from "next/link";
import useStore from "../lib/zustandConfig";

type Props = {};

const largeProps: ConfettiProps = {
  force: 0.8,
  duration: 3000,
  particleCount: 300,
  width: 1600,
  colors: ["#041E43", "#1471BF", "#5BB4DC", "#FC027B", "#66D805"],
};

const ProcesingYourBooking = (props: Props) => {
  const [showFinalProcess, setShowFinalProcess] = React.useState(false);
  const booking = useStore((state) => state.booking);



  const handleNavigation = () => {};

  useEffect(() => {
    console.log(booking)
    setTimeout(() => {
      setShowFinalProcess(true);
    }, 5000);
  }, [0]);

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className=" bg-white text-dark p-10 rounded-md text-center  w-full  lg:max-w-xl">
        <div className="">
          {showFinalProcess ? (
            <FaRegCalendarCheck className=" text-secondary mx-auto" size={40} />
          ) : (
            <ImSpinner2
              size={40}
              className=" animate-spin text-secondary mx-auto"
            />
          )}
          <div className=" mt-3">
            <p className=" font-medium">
              {showFinalProcess
                ? `Thank you ${booking.name},`
                : " Processing your booking"}
            </p>
            <p className=" text-sm text-gray-400">
              {showFinalProcess
                ? " your reservation has been booked.\n we have send you a email with all the details"
                : "It can take a moment"}
            </p>
            {/* 
            {showFinalProcess && <Link className='block mt-5 w-fit mx-auto bg-dark text-white font-bold px-10 py-3.5 rounded-md' href={'/'}> Go home </Link>} */}
            {showFinalProcess && (
              <button
                className="block mt-5 w-fit mx-auto bg-dark text-white font-bold px-10 py-3.5 rounded-md"
                onClick={() => handleNavigation()}
              >
                {" "}
                Go home{" "}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProcesingYourBooking;

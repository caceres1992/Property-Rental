import React from "react";
import { ImSpinner2 } from "react-icons/im";

type Props = {};

const ProcesingYourBooking = (props: Props) => {


  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className=" bg-white   text-center  p-20  rounded-lg  text-dark space-y-2.5">
        <ImSpinner2
          size={46}
          className=" animate-spin text-secondary mx-auto"
        />
        <div>
          <p className=" font-medium">Processing your booking</p>
          <p className=" text-sm text-gray-400">It can take a moment</p>
        </div>
      </div>
    </div>
  );
};

export default ProcesingYourBooking;

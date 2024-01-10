import React from "react";
import { MdOutlineDeck, MdOutlineKingBed, MdSingleBed } from "react-icons/md";
import {
  PiDogLight,
  PiSwimmingPoolLight,
  PiVideoCamera,
} from "react-icons/pi";
import { MdOutlineFamilyRestroom } from "react-icons/md";
import { GiPressureCooker } from "react-icons/gi";
import { CiParking1, CiWifiOn } from "react-icons/ci";
import { LiaTableTennisSolid } from "react-icons/lia";

type Props = {};

const AmenitiesProperty = (props: Props) => {
  return (
    <div className=" text-dark pt-10" id="amenities">
      <div className=" container">
      <div className="  flex-col  lg:items-center lg:flex-row flex gap-y-7 py-5 border-b border-gray-200">
          <div className="  sm:w-96 font-bold  text-lg">
            <p>Amenities</p>
          </div>
          <div className=" grid grid-cols-2 md:grid-cols-3 w-full gap-10">
            <div className="  flex items-center gap-2">
              <CiWifiOn size={24} />
              <p>Wifi / Cable</p>
            </div>
            <div className="  flex  items-center gap-2">
              <GiPressureCooker size={24} />
              <p>Pressure cooker</p>
            </div>{" "}
            <div className="  flex items-center gap-2">
              <PiDogLight size={24} />
              <p>Pet-friendly</p>
            </div>
            <div className="  flex  items-center gap-2">
              <PiVideoCamera size={24} />
              <p>Security cameras</p>
            </div>
            <div className="  flex items-center gap-2">
              <MdOutlineFamilyRestroom size={24} />
              <p>Family-friendly</p>
            </div>{" "}
            <div className="  flex items-center gap-2">
              <PiSwimmingPoolLight size={24} />
              <p>Private pool</p>
            </div>
            <div className="  flex items-center gap-2">
              <CiParking1 size={24} />
              <p>Private parking</p>
            </div>
            <div className="  flex items-center gap-2">
              <MdOutlineDeck size={24} />
              <p>Deck - Patio</p>
            </div>
            <div className="  flex items-center gap-2">
              <LiaTableTennisSolid size={24} />
              <p>Table Tennis</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AmenitiesProperty;

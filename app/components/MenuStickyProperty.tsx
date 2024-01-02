import React from "react";

type Props = {};

const MenuStickyProperty = (props: Props) => {
  return (
    <div className="  hidden  md:block overflow-x-auto sticky top-0  z-40  w-full bg-white border-gray-100 ">
      <div className=" flex container    w-full  md:w-auto items-center gap-x-10 b py-3  px-10  text-dark   rounded-md">
        <a className="  w-20  border-b-2 pb-1 border-secondary   " href="#overview">
          Over view
        </a>
        <a className=" pb-1 " href="#">
          Amenities
        </a>
        <a className=" pb-1 " href="#availability">
          Availability
        </a>
        <a className=" pb-1 " href="#">
          Location
        </a>
        <a className=" pb-1" href="#">
          Reviews
        </a>
      </div>
    </div>
  );
};

export default MenuStickyProperty;

"use client";
import React from "react";
import Title from "./ui/Title";
import Image from "next/image";
import { IoBed, IoCamera } from "react-icons/io5";
import toast from "react-hot-toast";
import { TbBathFilled, TbMessageCircle } from "react-icons/tb";
import { MdOutlineSquareFoot } from "react-icons/md";
import Button from "./ui/Button";
import useStore from "../lib/zustandConfig";
import { MdBuildCircle } from "react-icons/md";
import { usePathname, useRouter } from "next/navigation";

const GridPictures = ({ pictures }: { pictures: IPictures[] }) => {
  return (
    <div className=" grid  grid-cols-2 md:grid-cols-4 gap-1">
      {pictures.slice(0, 5).map((item, idx) => {
        return (
          <div
            key={idx + item.altText}
            className=" first:col-span-2 first:row-span-2 first:h-full relative h-36 md:h-60 w-full "
          >
            <Image
              src={item.imageUrl}
              blurDataURL={item.imageUrl}
              fill
              alt={item.altText}
              className=" rounded-md"
              objectFit="cover"
              placeholder="blur"
            />
            {idx + 1 === pictures.slice(0, 5).length && (
              <div className=" bg-dark absolute  text-white cursor-pointer bottom-5 right-5 px-3 py-1 rounded-md flex items-center gap-x-2">
                <IoCamera size={20} /> + {+pictures.length - idx}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

type Props = {
  propertyData: IProperty;
};

const PropertyComp = ({ propertyData }: Props) => {
  const handleButtonContactProperty = useStore((state) => state.setActiveModal);
  const pathName = usePathname().includes("property");
  const route = useRouter()
  const handleBookingNowButton = () => {
    route.push('/property/123')
    toast.error("we are under construction. Thank you to be patient", {
      icon: <MdBuildCircle className={" text-secondary"} size={40} />,
    });
  };

  return (
    <section
      id="property"
      className=" py-10 md:py-20 flex justify-center items-center"
    >
      <div className="container">
        <Title title="Property in" highlight="North Carolina" />

        <div className="pt-10">
          <div className=" hidden md:block">
            <GridPictures pictures={propertyData.pictures} />
          </div>
          <div className=" h-96 md:hidden relative w-full cursor-pointer">
            <Image
              fill
              alt={propertyData.pictures[0].altText}
              className=" rounded-md"
              src={propertyData.pictures[0].imageUrl}
              objectFit="cover"
            />
            <div className=" bg-dark text-white absolute bottom-5 left-5 px-3 py-1 rounded-md flex items-center gap-x-2">
              <IoCamera /> 1 / {propertyData.pictures.length}
            </div>
          </div>
          <div className=" flex  flex-col  md:flex-row justify-between gap-4 items-center  pt-5">
            <div className=" text-dark text-center md:text-left">
              <h4 className=" text-xl font-bold">{propertyData.address} </h4>
              <p>
                {propertyData.city},{" "}
                {propertyData.state + " " + propertyData.zipCode} |{" "}
                <span className=" text-xl  font-bold text-secondary/90">
                  USD {propertyData.priceNight}
                </span>{" "}
                Night
              </p>
              <div className=" flex items-center gap-5 pt-3">
                <div className=" flex items-center gap-2">
                  <IoBed /> {propertyData.qtyBeds} beds
                </div>
                <div className=" flex items-center gap-2">
                  <TbBathFilled /> {propertyData.qtyBath} baths
                </div>
                <div className=" flex items-center gap-2">
                  <MdOutlineSquareFoot /> {propertyData.sqftProperty} sqft
                </div>
              </div>
            </div>

            <div className=" space-y-5 w-fit">
              {!pathName && (
                <>
                  <Button
                    onClick={() => handleBookingNowButton()}
                    label="Booking Now!"
                    size="block"
                    variant="primary"
                  />
                  <Button
                    label="Contact Property"
                    variant="outline"
                    onClick={() => handleButtonContactProperty(true)}
                    icon={<TbMessageCircle />}
                  />
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertyComp;

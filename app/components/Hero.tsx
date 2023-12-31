"use client";
import React from "react";
import Button from "./ui/Button";
import Image from "next/image";

type Props = {
  heroData: IHero;
};

const Hero = ({ heroData }: Props) => {
  return (
    <div id="hero" className="  flex justify-center items-center  ">
      <div
        className="  container border-dark  rounded-md overflow-hidden flex justify-left items-center before:absolute before:inset-0 before:bg-dark/20 md:min-h-[500px] lg:min-h-[700px]  bg-cover bg-center relative"
        style={{
          backgroundImage: " url('/assets/house/image8.jpeg')",
        }}
      >
        <div className="  relative  w-full max-w-xl  flex flex-col justify-center items-center text-center md:text-left md:items-start md:justify-start gap-5 py-40">
          <div className=" text-white">
            <h1 className=" text-4xl md:text-7xl font-extrabold">
              <span className=" text-primary">
                {heroData.title.split(" ")[0]}
              </span>{" "}
              {heroData.title
                .split(" ")
                .map((item, idx) => (idx === 0 ? " " : item + " "))}
            </h1>
            <p className=" font-medium">{heroData.description}</p>
          </div>

          <a href="#property" className="block">
            <Button variant="primary" label="Property detail" />
          </a>
        </div>
        <div className=" absolute  w-56 bg-white   right-1/2   -mr-28 md:-mr-0 md:ml-0  md:right-20 bottom-10 rounded-md py-2">
          <div className=" w-fit flex  gap-2 items-center justify-between">
            <div className=" h-10  w-24 relative  cursor-pointer">
              <Image
                fill
                src={"/assets/airbnb.png"}
                alt="airbnb icon"
                objectFit="contain"
              />
            </div>
              <div  className=" w-0.5 h-6 bg-dark/10"/>
            <div className=" h-10  w-24    cursor-pointer relative bor">
              <Image
                fill
                src={"/assets/vrbo-logo.webp"}
                alt="airbnb icon"
                objectFit="contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

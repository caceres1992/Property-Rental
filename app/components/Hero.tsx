"use client";
import React from "react";
import Button from "./ui/Button";
import Image from "next/image";

type Props = {
  heroData: IHero;
};

const Hero = ({ heroData }: Props) => {
  return (
    <div id="hero" className="  snap-center ">
      <div
        style={{ backgroundImage: 'url("/assets/circles.svg")' }}
        className=" container bg-no-repeat  bg-left"
      >
        <div
          className="flex 
        flex-col lg:flex-row
        gap-20  h-full
         w-full py-10 md:py-0 md:min-h-screen"
        >
          <div
            className="  
          mx-auto lg:mx-0 
          py-10 flex justify-center 
          gap-5 text-center  
          lg:pr-28 lg:text-left  
          max-w-2xl    mt-20 md:mt-10
          text-dark flex-col "
          >
            <h1 className=" text-4xl md:text-6xl font-extrabold">
              <span className=" text-primary">
                {heroData.title.split(" ")[0]}
              </span>{" "}
              {heroData.title
                .split(" ")
                .map((item, idx) => (idx === 0 ? " " : item + " "))}
            </h1>
            <p className="  ">{heroData.description}</p>
            <div className=" hidden lg:block">
              <a href="#property">
                <Button variant="primary" label="Property detail" />
              </a>
            </div>
          </div>
          <div className=" flex flex-col  h-80 lg:h-auto lg:flex-1 justify-center items-center relative">
            <Image
              src={heroData.image}
              alt="hero-house"
              fill
              objectFit="contain"
            />
          </div>
          <div className="lg:hidden w-fit mx-auto">
            <a href="#property">
              <Button variant="primary" label="Property detail" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

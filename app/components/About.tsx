"use client";
import React from "react";
import Title from "./ui/Title";
import Image from "next/image";
import Button from "./ui/Button";
import { BiSolidMapPin } from "react-icons/bi";
import useStore from "../lib/zustandConfig";

type Props = {
  aboutData: IAbout;
};

const About = ({ aboutData }: Props) => {
  const openModalMap = useStore((state) => state.setActiveModalMap);

  return (
    <section
      id="about"
      className=" flex justify-center flex-col py-10 md:py-20"
    >
      <div className=" container">
        <Title title="About the" highlight="House" />
        <div className=" flex flex-col items-center py-10  lg:flex-row  justify-between">
          <div className=" text-dark  space-y-5 bg-light p-10 leading-8  max-w-3xl rounded-md flex-1">
            <p className="">{aboutData.description}</p>

            <Button
              label="See map"
              variant="outline"
              onClick={() => openModalMap(true)}
              icon={<BiSolidMapPin />}
            />
          </div>
          <div className=" relative mx-auto w-96 h-96 hidden lg:block">
            <Image
              src={aboutData.image}
              blurDataURL={aboutData.image}
              fill
              placeholder="blur"
              alt="picture about"
              objectFit="contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

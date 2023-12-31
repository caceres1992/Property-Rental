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
  const openModalContact = useStore((state) => state.setActiveModal);

  return (
    <section
      id="about"
      className=" flex justify-center flex-col py-10 md:py-20"
    >
      <div className=" container bg-no-repeat   bg-left"
      style={{backgroundImage:"url('/assets/circles.svg')"}}
      >
        <Title title="About the" highlight="Owners" />
        <div className=" flex flex-col items-center py-10  lg:flex-row  justify-between">
          <div className=" text-dark  w-full space-y-5 t p-10 leading-8  max-w-3xl rounded-md flex-1">
            <p className="">{aboutData.description}</p>
          </div>
          <div className=" relative mx-auto   w-full flex-1  h-[600px] hidden lg:block">
            <Image
              src={aboutData.image}
              blurDataURL={aboutData.image}
              fill
              placeholder="blur"
              alt="picture about"
              objectFit="contain"
            />
            <div className=" absolute bottom-10 shadow-md rounded-md overflow-hidden">
              <Button
                label="Contact us"
                variant="outline"
                onClick={() => openModalContact(true)}
                icon={<BiSolidMapPin />}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

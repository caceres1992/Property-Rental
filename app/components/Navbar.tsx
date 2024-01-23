'use client'
import Link from "next/link";
import React from "react";
import Button from "./ui/Button";
import { TbMessageCircle } from "react-icons/tb";
import { BiMenu } from "react-icons/bi";
import useStore from "../lib/zustandConfig";

type Props = {};

const Navbar = (props: Props) => {
  const handleButtonContactProperty = useStore((state) => state.setActiveModal);

  return (
    <header className="  w-full  z-50  bg-white ">
      <nav className="  px-5  text-dark  py-5 flex  justify-between items-center ">
        <div className=" flex items-center gap-5 lg:gap-x-10">
          <p className=" text-4xl font-black text-dark">SolNSol</p>
          <button className=" lg:hidden">
            <BiMenu size={24} />
          </button>
          <div className=" hidden lg:flex flex-row  gap-6">
            <Link href={"/#about"}>About</Link>
            <Link href={"/#services"}>Services</Link>
            <Link href={"/#property"}>Property</Link>
          </div>
        </div>
        <div>
          <Button
            label="Let's talk"
            variant={'ghost'}
            onClick={() => handleButtonContactProperty(true)}
            icon={<TbMessageCircle />}
          />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

import React from "react";
import NewsLetter from "./NewsLetter";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaLinkedin,
} from "react-icons/fa";

type Props = {};

const Footer = (props: Props) => {
  return (
    <section className="relative snap-end border">
      <div
        className="  absolute inset-0 bg-no-repeat lg:bg-left  bg-bottom"
        style={{ backgroundImage: "url('/assets/circles.svg')" }}
      ></div>
      <div className=" relative top-20 z-10 ">
        <NewsLetter />
      </div>
      <footer className=" bg-secondary pt-28 pb-10  ">
        <div className=" container relative">
          <div className="flex  flex-col  gap-10 md:flex-row  md:items-center justify-between">
            <div>
              <p className=" text-5xl font-black text-primary">Sol&Sol</p>
              <p className=" text-white/90">Your Perfect Home Awaits</p>
            </div>
            <div className="flex md:items-center  md:justify-center text-white/70 gap-3">
              <a href="https://facebook.com" target="_blank">
                <FaFacebookSquare size={32} />
              </a>
              <FaInstagramSquare size={32} />
              <FaLinkedin size={32} />
            </div>
            <div>
              <p className="  text-base font-bold  text-white">Email Us</p>
              <div className=" text-white/80 flex flex-col gap-1 pt-3">
                <a className="" href="mailto:property1@gmail.com">
                  property1@example.com
                </a>
                <hr className=" opacity-20" />
                <a className="" href="mailto:property2@gmail.com">
                  property2@example.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;

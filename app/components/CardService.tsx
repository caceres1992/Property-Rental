import Image from "next/image";
import React from "react";

type Props = {
  title: string;
  description: string;
  srcPicture: string;
  alt: string;
};

const CardService = ({ title, description, srcPicture, alt }: Props) => {
  return (
    <div className="first:bg-dark border border-dark text-dark first:text-white p-10 rounded-md space-y-5 flex flex-col">
      <h3 className=" font-bold">{title}</h3>
      <p className=" opacity-80 flex-1">{description}</p>
      <div className=" hidden md:block h-32 lg:h-52 xl:h-64 w-full relative">
        <Image
          fill
          src={srcPicture}
          alt={alt}
          className=" rounded-md"
          objectFit={"cover"}
        />
      </div>
    </div>
  );
};

export default CardService;

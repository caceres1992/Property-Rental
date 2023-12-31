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
    <div className=" even:bg-dark border border-dark text-dark even:text-white p-5 rounded-md space-y-5 flex flex-col">
      <h3 className=" font-bold">{title}</h3>
      <p className=" opacity-80 flex-1">{description}</p>
      <div className=" hidden lg:block h-32 lg:h-40 xl:h-44 w-full relative">
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

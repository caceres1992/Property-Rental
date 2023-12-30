import React from "react";
import CardService from "./CardService";
import Title from "./ui/Title";

type Props = {
  serviceData: IMainServices[];
};

const Services = ({ serviceData }: Props) => {
  return (
    <section
      id="services"
      className="py-10 md:py-0 md:min-h-screen flex justify-center flex-col snap-center "
    >
      <div className=" container">
        <Title title="Our principal" highlight="Services" />
        <div className=" grid grid-cols-1 lg:grid-cols-2 gap-10 pt-10">
          {serviceData.map((item, idx) => {
            return (
              <CardService
              title={item.title}
              description={item.description}
             srcPicture={item.image}
              alt={item.title + "image"}
              />
            );
          })}

        </div>
      </div>
    </section>
  );
};

export default Services;

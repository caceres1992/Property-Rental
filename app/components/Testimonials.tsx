import React from "react";
import Testimonial from "./Testimonial";

type Props = {};

const Testimonials = (props: Props) => {
  return (
    <div className=" container pb-20">
      <div className="  sm:w-96 font-bold  text-lg text-dark pb-10">
        <p>Reviews</p>
      </div>
      <div className="grid gap-10 md:grid-cols-2  ">
        {Array(4)
          .fill(0)
          .map((_, idx) => {
            return <Testimonial key={idx} />;
          })}
      </div>
    </div>
  );
};

export default Testimonials;

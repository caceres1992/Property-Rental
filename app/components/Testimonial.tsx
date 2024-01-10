'use client'
import React, { useState } from "react";
import Card, { CardBody, CardContent, CardHeader } from "./ui/Card";

type Props = {};

const Testimonial = (props: Props) => {
    const [showMore,setShowMore]  = useState<boolean>(false)
  return (
    <Card>
      <CardHeader title="Reyna Gomez" subtitle="Duluth, Georgia" />
      <CardBody>
        <CardContent showMoreText={showMore}
          content="We really enjoyed the house.
The house is very well kept and very clean.
Really nice to have 2 Master Bedrooms on the main floor.
The basement area is really great with a good layout and amenities. If you like Pool parties - this is the place for you. The pool area was very nice and clean with good seating.
The lake dock was really good and fairly accessible by boat. We rented a pontoon from a local rental company and kept the boat tied up at the dock all week."
        />
        <button className=" text-dark text-sm font-bold" onClick={()=>setShowMore(!showMore)}>Show {showMore?'less':'more'}</button>
      </CardBody>
    </Card>
  );
};

export default Testimonial;

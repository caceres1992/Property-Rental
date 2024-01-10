import React from "react";

type Props = {
  children: React.ReactElement | any;
};

const ScrollMandatoryComp = ({ children }: Props) => {
  return (
    <main className="  md:snap-y  scroll-smooth bg-white h-screen overflow-auto transition-all duration-1000">
      {children}
    </main>
  );
};

export default ScrollMandatoryComp;

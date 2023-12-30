import React from "react";

type Props = {
  title: string;
  highlight: string;
};

const Title = ({ title, highlight }: Props) => {
  return (
    <h2 className=" text-dark font-bold">
      {title} <br />
      <span className=" font-black text-4xl text-primary">{highlight}</span>
    </h2>
  );
};

export default Title;

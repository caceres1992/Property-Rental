import React from "react";
import Button from "./Button";

type Props = {};

const CardHeader = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) => {
  return (
    <div className=" text-dark ">
      <h2 className=" text-md font-medium">{title}</h2>
      {subtitle && <h3 className=" text-xs text-gray-500">{subtitle}</h3>}
    </div>
  );
};
const CardContent = ({ content,showMoreText }: { content: string,showMoreText:boolean }) => {
  return <q className={`text-gray-700 text-sm pt-2.5 ${showMoreText?'line-clamp-none':'line-clamp-3'}`}>{content}</q>;
};

const CardBody = ({ children }: { children: React.ReactElement[] }) => {
  return <div className="space-y-2.5">{children}</div>;
};

const CardFooter = ({
  btnLabel,
  btnAction,
}: {
  btnLabel: string;
  btnAction?: () => {};
}) => {
  return (
    <div className="">
      <Button variant="primary" label={btnLabel} onClick={() => btnAction} />
    </div>
  );
};

const Card = ({ children }: { children: React.ReactElement[] }) => {
  return <div>{children}</div>;
};

export default Card;
export { CardHeader, CardFooter, CardContent, CardBody };

'use client'
import React from "react";
import Button from "./ui/Button";
import Title from "./ui/Title";
import { IoIosSend } from "react-icons/io";
import toast from 'react-hot-toast';

type Props = {};

const NewsLetter = (props: Props) => {

  const submitForm = (e:React.FormEvent<HTMLFormElement>) => {
    console.log(e.preventDefault())
      toast.error('we are still working in this method')
  };
  return (
    <div className="  mx-2 max-w-2xl shadow-lg border border-light/40 bg-white rounded-md shadow-light/20 p-10 text-center space-y-5 sm:mx-auto">
      <Title title="Subscribe to our" highlight="Newsletter" />
      <form 
      onSubmit={submitForm}
      className=" flex-col md:flex-row   text-dark border border-dark/20 flex gap-3 p-2 items-center rounded-md overflow-hidden">
        <input
          className="  px-2 py-3.5 flex-1 w-full"
          placeholder="Type your email here.."
          type="email"
        />
        <div className=" w-full md:w-fit">
          <Button
            size="block"
            label="Send"
            variant="primary"
            icon={<IoIosSend />}
          />
        </div>
      </form>
    </div>
  );
};

export default NewsLetter;

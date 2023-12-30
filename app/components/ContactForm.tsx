'use client'
import React, { FormEventHandler } from "react";
import Input from "./ui/Input";
import Button from "./ui/Button";
import { IoIosSend } from "react-icons/io";
import toast from 'react-hot-toast';

type Props = {};

const ContactForm = (props: Props) => {
  const submitForm = (e:React.FormEvent<HTMLFormElement>) => {
    console.log(e.preventDefault())
      toast.error('we are still working in this method')
  };

  return (
    <form onSubmit={submitForm} className=" space-y-3.5 mt-5  ">
      <Input
        label="Full Name"
        size="block"
        placeholder="John Doe"
        name="name"
        type="text"
      />
      <Input
        label="Email"
        size="block"
        placeholder="jhondoe@example.com"
        name="email"
        type="email"
      />
      <Input
        label="Subject"
        size="block"
        placeholder="Subject"
        name="subject"
        type="text"
      />

      <textarea
        rows={3}
        name="message"
        placeholder="Type your inquired"
        className="border border-dark/20 rounded-md text-dark w-full px-2 py-3.5"
      />

      <Button
        label="Submit"
        type="submit"
        variant="primary"
        icon={<IoIosSend />}
      />
    </form>
  );
};

export default ContactForm;

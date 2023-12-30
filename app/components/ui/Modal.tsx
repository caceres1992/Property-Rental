"use client";
import React from "react";
import { Variants, motion } from "framer-motion";
import Button from "./Button";
import useStore from "@/app/lib/zustandConfig";
type Props = {
  children: React.ReactElement[] | React.ReactElement;
  closeModal: () => void;
};

const parentVariants: Variants = {
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
  hidden: {
    opacity: 0,
    transition: {
      when: "afterChildren",
    },
  },
};
const itemVariants: Variants = {
  visible: { opacity: 1, y: 0, transition: { duration: 0.35 } },
  hidden: { opacity: 0, y: 200 },
};

const Modal = ({ children, closeModal }: Props) => {
  const handleCloseModal = () => {
    closeModal();
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={parentVariants}
      className=" absolute inset-0  py-20   overflow-hidden z-50 backdrop-blur-sm bg-secondary/10 flex justify-center items-center"
    >
      <motion.div
        variants={itemVariants}
        className="  rounded-md relative overflow-hidden mx-5  my-10 max-h-[calc(100vh-100px)] justify-center flex items-center    overflow-y-auto "
      >
        <div className=" absolute right-5 top-4">
          <button
            onClick={() => handleCloseModal()}
            className="  hover:bg-dark hover:text-white transition-all bg-white text-dark border-dark border  py-1 px-4  text-sm  rounded-lg"
          >
            Close
          </button>
        </div>
        {children}
      </motion.div>
    </motion.div>
  );
};

export default Modal;

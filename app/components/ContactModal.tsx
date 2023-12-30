"use client";
import React from "react";
import Modal from "./ui/Modal";
import ContactForm from "./ContactForm";
import Title from "./ui/Title";
import useStore from "../lib/zustandConfig";

const ContactModal = () => {
  const activeModal = useStore((state) => state.activeModalContact);
  const handleButtonCloseModal = useStore((state) => state.setActiveModal);

  const closeModal = (): void => {
    handleButtonCloseModal(false);
  };
  if (activeModal)
    return (
      <Modal closeModal={closeModal}>
        <div className=" p-4 md:p-10    flex-1 max-w-xl   bg-white  w-screen ">
          <Title title="Keep in touch" highlight="with us" />
          <p className=" text-dark/80 mt-2.5">
            {`  If you have any inquired let's it knows`}
          </p>
          <ContactForm />
        </div>
      </Modal>
    );
};

export default ContactModal;

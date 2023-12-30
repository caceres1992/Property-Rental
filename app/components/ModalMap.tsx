"use client";
import React from "react";
import Modal from "./ui/Modal";
import MapEmbed from "./MapEmbed";
import Title from "./ui/Title";
import useStore from "../lib/zustandConfig";

type Props = {};

const ModalMap = (props: Props) => {
  const activeModal = useStore((state) => state.activeModalMap);
  const handleButtonCloseModalMap = useStore(
    (state) => state.setActiveModalMap
  );

  const closeModal = () => {
    handleButtonCloseModalMap(false);
  };

  if (activeModal)
    return (
      <Modal closeModal={closeModal}>
        <div className=" p-4 md:p-10    flex-1 max-w-4xl   bg-white  w-screen ">
          <div className=" px-5 py-3.5">
            <Title title="We are" highlight="Located" />
          </div>
            <MapEmbed />
        </div>
      </Modal>
    );
};

export default ModalMap;

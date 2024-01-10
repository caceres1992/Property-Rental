"use client";
import React, { useEffect, useState } from "react";
import Input from "./ui/Input";
import { IoClose } from "react-icons/io5";
import Button from "./ui/Button";
import clsx from "clsx";
import useStore from "../lib/zustandConfig";
import CalendarBooking from "./CalendarBooking";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaBookingForm } from "../validation/BookingSchema";
import toast from "react-hot-toast";
import moment from "moment";
import { numberFormatter } from "../lib/numberFormatter";
import InputCountry from "./InputCountry";
import axios from "axios";
import GuestsButtonGroup from "./GuestsButtonGroup";
import { useRouter } from "next/navigation";

const reserved = [
  {
    startDate: new Date(2023, 12, 31),
    endDate: new Date(2024, 1, 9),
  },
];
const DrawerForm = () => {
  const drawerModalIsActive = useStore((state) => state.drawerModalIsActive);
  const selectedDates = useStore((state) => state.selectedDates);
  const adults = useStore((state) => state.adults);
  const children = useStore((state) => state.children);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<IBooking>({
    resolver: yupResolver(schemaBookingForm),
  });

  const handleDrawerModal = useStore((state) => state.handleDrawerModal);
  const [openDrawer, setOpenDrawer] = useState<boolean>();
  const [openCalendar, setOpenCalendar] = useState(false);
  const [openGuestInputs, setOpenGuestInputs] = useState(false);
  const navigate = useRouter();

  const closeDrawer = (): void => {
    setOpenDrawer(false);
    setTimeout(() => {
      handleDrawerModal(false);
    }, 300);
  };

  useEffect(() => {
    if (drawerModalIsActive) {
      setValue("dateCheckIn", selectedDates[0], { shouldValidate: true });
      setValue("dateCheckOut", selectedDates[1], { shouldValidate: true });
      setValue("guest", String(children + adults), { shouldValidate: true });
      setValue("adults", adults, { shouldValidate: true });
      setValue("children", children, { shouldValidate: true });
      setTimeout(() => {
        setOpenDrawer(true);
      }, 300);
    }

    setOpenCalendar(false);
  }, [drawerModalIsActive]);

  const onSubmitBookingForm = handleSubmit(async (data) => {
    data.placeName = "placeName";
    data.guest = String(adults + children);

    const openPaymentPage = async () => {
      const resp = await axios.post("/api/checkout_session", data);
      if (resp.data.url) navigate.push(resp.data.url);
    };

    toast.promise(openPaymentPage(), {
      loading: "processing...",
      error: "something went wrong",
      success: "redirect",
    });
  });

  if (drawerModalIsActive)
    return (
      <div
        className={clsx(
          drawerModalIsActive ? "bg-dark/20 z-50" : "  bg-dark/0 -z-10",
          "  w-full min-h-screen absolute inset-0  text-dark transition-all overflow-hidden"
        )}
      >
        <div
          className={clsx(
            openDrawer ? "  right-0 " : " -right-full",
            " bg-white    md:w-4/5 md:min-w-96 relative h-full ml-auto  py-5 flex flex-col duration-300 overflow-auto "
          )}
        >
          <button
            className="  m-2 w-fit p-1 rounded-md hover:bg-gray-100  cursor-pointer"
            onClick={() => {
              closeDrawer();
            }}
          >
            <IoClose />
          </button>
          <h2 className=" text-lg p-5">
            We need your basic information for reaching out to you after your
            reservation
          </h2>
          <div className="space-y-10 flex-1 p-5  ">
            <div className=" w-full">
              <form
                id="bookingForm"
                className=" space-y-3"
                onSubmit={onSubmitBookingForm}
              >
                <h3 className=" font-bold">Basic Inform</h3>
                <div className=" grid grid-cols-1 md:grid-cols-2 gap-5">
                  <Input
                    label="Full Name"
                    name="name"
                    placeholder="Name and Last Name"
                    size="block"
                    type="string"
                    register={register}
                    errorMessage={errors.name?.message}
                  />

                  <Input
                    label="phone"
                    name="phone"
                    placeholder="(123) 123 4351"
                    type="phone"
                    size="block"
                    register={register}
                    errorMessage={errors.phone?.message}
                  />
                  <Input
                    label="Email"
                    name="email"
                    placeholder="johndoe@example.com"
                    type="email"
                    size="block"
                    register={register}
                    errorMessage={errors.email?.message}
                  />
                  <InputCountry
                    register={register}
                    name="country"
                    label="Country"
                  />
                  <Input
                    label="Address"
                    optional
                    name="address"
                    placeholder="1234 Street "
                    size="block"
                    type="string"
                    register={register}
                    errorMessage={errors.address?.message}
                  />
                </div>
                <h3 className=" font-bold">Booking detail</h3>

                <div className=" grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className=" text-dark relative">
                    <p>Guests ( 1 )</p>
                    <div className=" flex gap-x-4">
                      <p>2 Adults</p>
                      <p>1 Children</p>
                      <button
                        type="button"
                        onClick={() => setOpenGuestInputs(true)}
                        className=" text-secondary font-medium "
                      >
                        Change
                      </button>
                    </div>
                    {openGuestInputs && (
                      <div className=" absolute w-fit bg-white shadow-md rounded-md py-5   top-full">
                        <button
                          className=" m-2  p-1 rounded-md hover:bg-gray-100"
                          onClick={() => {
                            setOpenGuestInputs(false);
                          }}
                        >
                          <IoClose />
                        </button>
                        <GuestsButtonGroup />
                      </div>
                    )}
                  </div>
                  <div className=" text-dark relative z-10">
                    <p>
                      Nights ({" "}
                      {moment(selectedDates[1]).diff(selectedDates[0], "days")}{" "}
                      )
                    </p>
                    <div className=" flex gap-x-4">
                      <p>{moment(selectedDates[0]).format("MMM DD")} </p> -
                      <p>{moment(selectedDates[1]).format("ll")}</p>
                      <button
                        type="button"
                        onClick={() => setOpenCalendar(true)}
                        className=" text-secondary font-medium "
                      >
                        Change
                      </button>
                    </div>
                    {openCalendar && (
                      <div className=" absolute    border   -left-1/2 bottom-10 z-20 bg-white  rounded-md">
                        <button
                          className=" m-2  p-1 rounded-md hover:bg-gray-100"
                          type="button"
                          onClick={() => {
                            setOpenCalendar(false);
                          }}
                        >
                          <IoClose />
                        </button>
                        <CalendarBooking />
                      </div>
                    )}
                  </div>

                  <div className="flex items-center gap-2">
                    <input type={"checkbox"} />
                    <p className=" text-sm">
                      Update me on deals and special offers via email.
                    </p>
                  </div>
                </div>
                <div className=" space-y-2 pt-5 text-dark">
                  <div className=" grid grid-cols-2 w-fit gap-10">
                    <p className=" w-40">
                      $320 x{" "}
                      {moment(selectedDates[1]).diff(selectedDates[0], "days")}{" "}
                      nights
                    </p>
                    <p>
                      $
                      {numberFormatter.format(
                        moment(selectedDates[1]).diff(
                          selectedDates[0],
                          "days"
                        ) * 320
                      )}
                    </p>
                  </div>
                  <div className=" grid grid-cols-2 w-fit gap-10">
                    <p className=" w-40">Cleaning fee </p>
                    <p>$250 </p>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className=" mx-5 md:w-fit">
            <Button
              formId={"bookingForm"}
              label={`Let's pay  $ ${numberFormatter.format(
                moment(selectedDates[1]).diff(selectedDates[0], "days") * 320 +
                  250
              )}`}
              size="block"
              variant="primary"
              type="submit"
            />
          </div>
        </div>
      </div>
    );
};

export default DrawerForm;

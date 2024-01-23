import AmenitiesProperty from "@/app/components/AmenitiesProperty";
import BookingForm from "@/app/components/BookingForm";
import BookingBottomButton from "@/app/components/BookingMobileButton";
import ContactForm from "@/app/components/ContactForm";
import DrawerForm from "@/app/components/DrawerForm";
import MenuStickyProperty from "@/app/components/MenuStickyProperty";
import OverViewProperty from "@/app/components/OverViewProperty";
import PropertyComp from "@/app/components/Property";
import PropertyReservation from "@/app/components/PropertyReservation";
import Testimonials from "@/app/components/Testimonials";

import { fetchingHomePage } from "@/app/lib/fetchingData";
import React from "react";

type Props = {};

const Property = async (props: Props) => {
  const homeData: IHomePage = await (await fetchingHomePage()).json();
  const { property } = homeData;

  return (
    <div>
      <div className=" container flex gap-10">
        <div className=" flex-1">
          <div id="overview">
            <PropertyComp propertyData={property} />
            <MenuStickyProperty />
            <OverViewProperty />
            <AmenitiesProperty />
          </div>
          <PropertyReservation />
          <Testimonials />
        </div>
        <div className=" hidden xl:block w-96 mr-10">
          <BookingForm />
        </div>
        <DrawerForm />
      </div>
      <BookingBottomButton/>
   
    </div>
  );
};

export default Property;

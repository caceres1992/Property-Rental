import React from "react";
import { MdOutlineKingBed, MdSingleBed } from "react-icons/md";
import { TbBath } from "react-icons/tb";
import { PiShower } from "react-icons/pi";
import { IoIosExpand } from "react-icons/io";

import Button from "./ui/Button";

type Props = {};

const OverViewProperty = (props: Props) => {
  return (
    <div className=" text-dark">
      <div className=" container">
      <div className="  flex-col  lg:items-center lg:flex-row flex gap-y-7 py-5 border-b border-gray-200">
          <div className="xs:w-96 font-bold  text-lg">
            <p>Rooms & beds</p>
          </div>
          <div className=" grid grid-cols-2 md:grid-col-3  w-full gap-5">
            <div className=" w-full h-20  border border-gray-200 rounded-md  flex justify-center flex-col items-center gap-1.5 py-2">
              <MdOutlineKingBed size={24} />
              <p>1 King Bed</p>
            </div>
            <div className=" w-full h-20  border border-gray-200 rounded-md  flex justify-center flex-col items-center gap-1.5 py-2">
              <MdSingleBed size={24} />
              <p>1 Queen Bed</p>
            </div>
            <div className=" w-full h-20  border border-gray-200 rounded-md  flex justify-center flex-col items-center gap-1.5 py-2">
              <MdSingleBed size={24} />
              <p>2 single Beds</p>
            </div>
          </div>
        </div>

        <div className="  flex-col  lg:items-center lg:flex-row flex gap-y-7 py-5 border-b border-gray-200">

          <div className="xs:w-96  font-bold  text-lg">
            <p>bathrooms</p>
          </div>
          <div className=" grid grid-cols-2 md:grid-col-3 w-full gap-10">
            <div className=" w-full h-20  border border-gray-200 rounded-md  flex justify-center flex-col items-center gap-1.5 py-2">
              <TbBath size={24} />
              <p>2 Full bathrooms</p>
            </div>
            <div className=" w-full h-20  border border-gray-200 rounded-md  flex justify-center flex-col items-center gap-1.5 py-2">
              <PiShower size={24} />
              <p>1 Single bathroom</p>
            </div>
          </div>
        </div>

        <div className="  flex-col  lg:items-center lg:flex-row flex gap-y-7 py-5 border-b border-gray-200">

          <div className="xs:w-96 font-bold  text-lg">
            <p>About this property</p>
          </div>
          <div className=" grid grid-cols-1 w-full gap-5 text-dark/80">
            <p className=" line-clamp-3">
              {`
            
            Carolina Beach Escape - Steps to the Boardwalk!
Bask in the warm sunshine at this picturesque Carolina Beach vacation rental! The 2-bedroom, 2-bathroom condo features a fully equipped kitchen, modern amenities, and a covered balcony with sweeping ocean views. This condo sits within walking distance from restaurants, shops, Carolina Beach Lake Park, and the Carolina Beach Boardwalk, which allows you to explore with ease. When you’re ready to unwind, return to this well-appointed abode and enjoy a home-cooked meal with your loved ones!

-- THE PROPERTY --

Oceanfront Condo w/ Direct Beach Access | Free WiFi (High Speed) | Walk to Carolina Beach Lake Park & Boardwalk

Boasting all the essential comforts, this conveniently located condo is the perfect home base for small families or a group of friends looking to get outdoors and explore the beauty of North Carolina.

Bedroom 1: Queen Bed | Bedroom 2: Queen Bed | Living Room: Sleeper Sofa

KITCHEN: Fully equipped w/ stainless steel appliances, cooking basics, Keurig, toaster oven, dishware & flatware
INDOOR LIVING: Cable TVs, board games, dining table, 828 sq ft
GENERAL: Washer & dryer, towels & linens, hair dryer, central heat & air conditioning, complimentary toiletries, ceiling fans, beach chairs & toys
SUITABILITY: Stairs required, 2nd-floor condo
PARKING: Designated spot (2 vehicles)

-- THE LOCATION --

BEACHES: Carolina Beach (on-site), Atlanta Public Access (0.1 miles), Spartanburg Public Access (0.4 miles), Ocean Public Access (1.1 miles), Sand Dollar Public Access (1.6 miles), Freeman Park Access (2.2 miles), Kure Beach Access (2.9 miles)
NATURE PRESERVES: Carolina Beach State Park (1.5 miles), Zeke's Island Reserve (6.3 miles), Piney Ridge Nature Preserve (13.5 miles), Bluethenthal Wildflower Preserve (15.1 miles), Green Swamp Preserve (46.9 miles)
LOCAL ATTRACTIONS: Carolina Beach Lake Park (0.2 miles), Carolina Beach Boardwalk (0.3 miles), Kure Beach Pier (2.6 miles), Fort Fisher State Historic Site (4.5 miles), North Carolina Aquarium at Fort Fisher (5.5 miles), Fort Fisher Ferry (6.2 miles), Jungle Rapids Family Fun Park (14.5 miles), Battleship North Carolina (16.3 miles)
AIRPORTS: Wilmington International Airport (18.5 miles), Myrtle Beach International Airport (93.8 miles)

-- REST EASY WITH US --

Evolve makes it easy to find and book properties you’ll never want to leave. You can relax knowing that our properties will always be ready for you and that we’ll answer the phone 24/7. Even better, if anything is off about your stay, we’ll make it right. You can count on our homes and our people to make you feel welcome--because we know what vacation means to you.

-- POLICIES --

- No smoking
- No pets allowed
- No events, parties, or large gatherings
- Must be at least 25 years old to book
- Additional fees and taxes may apply
- Photo ID may be required upon check-in
- NOTE: This property is located on the 2nd floor and requires stairs 2 full flights of stairs to access and may be difficult for guests with limited mobility
`}
            </p>
            <Button label="See more"  variant={'ghost'} icon={<IoIosExpand />} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverViewProperty;

"use client";
import React, { useEffect } from "react";
import useStore from "../lib/zustandConfig";

type Props = {
  data: IBooked[];
  children: React.ReactElement[] | React.ReactElement[];
};

const ProviderData = ({ children, data }: Props) => {
  const fetchingDatesBooked = useStore((state) => {
    return state.fetchingDatesBooked;
  });
  const reserved: IBooked[] = useStore((state) => {
    return state.reserved;
  });

  startDate: new Date("2024-07-27T00:00:00"),
    useEffect(() => {
      if (reserved.length < 1) {
        const dateParsed:IBooked[] = data.map((item) => ({
          endDate: new Date(item.endDate),
          startDate: new Date(item.startDate),
          summary: item.summary,
        }));
        fetchingDatesBooked(dateParsed);
      }
    }, [0]);
  return <>{children}</>;
};

export default ProviderData;

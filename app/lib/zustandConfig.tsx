import { create } from "zustand";

const reserved = [
  {
    startDate: new Date(2023, 12, 31),
    endDate: new Date(2024, 1, 9),
  },
];
type StoreMethod = {
  setOnchangeMonth: (
    month: number | undefined,
    year: number | undefined
  ) => void;
  resetDateSelected: () => void;
  setSelectedDates: (e: any) => void;
  setActiveModal: (active: Boolean) => void;
  setActiveModalMap: (active: Boolean) => void;
  onChangeAdult: (adultQty: number) => void;
  onChangeChild: (adultQty: number) => void;
  handleDrawerModal: (value: boolean) => void;
  handleSaveBookingData: (data: any) => void;
  cleanLocalStore: () => void;
  fetchingDatesBooked: (dates: IBooked[]) => void;
};

type Store = {
  activeModalContact: Boolean;
  reserved: IBooked[];
  monthCaptured: any;
  yearCaptured: any;
  selectedDates: any[];
  showDateSelected: any[];
  activeModalMap: Boolean;
  children: number;
  adults: number;
  drawerModalIsActive: boolean;
  booking: any;
};

const useStore = create<Store & StoreMethod>()((set) => ({
  reserved: [],
  activeModalContact: false,
  activeModalMap: false,
  monthCaptured: 0,
  selectedDates: [],
  showDateSelected: [],
  adults: 1,
  children: 0,
  yearCaptured: undefined,
  drawerModalIsActive: false,
  booking: {} || JSON.parse(localStorage.getItem("bookingData") || "{}"),
  cleanLocalStore: () => {
    localStorage.removeItem("bookingData");
  },
  handleSaveBookingData: (data: any) => {
    set(() => {
      localStorage.setItem("bookingData", JSON.stringify(data));
      return { booking: data };
    });
  },
  onChangeAdult: (adultQty: number) => {
    set(() => ({ adults: adultQty }));
  },
  onChangeChild: (childrenQty: number) => {
    set(() => ({ children: childrenQty }));
  },
  setOnchangeMonth: (month: number | undefined, year: number | undefined) => {
    set(() => ({ monthCaptured: month, yearCaptured: year }));
  },

  resetDateSelected: () => {
    set(() => ({ showDateSelected: [] }));
  },
  setSelectedDates: (e: any) => {
    set(() => ({ selectedDates: e, showDateSelected: e }));
  },
  setActiveModal: (active: Boolean) =>
    set(() => ({ activeModalContact: active })),
  setActiveModalMap: (active: Boolean) =>
    set(() => ({ activeModalMap: active })),
  handleDrawerModal: (value: boolean) =>
    set(() => ({ drawerModalIsActive: value })),
  fetchingDatesBooked: (dates: IBooked[]) => set(() => ({ reserved: dates })),
}));

export default useStore;

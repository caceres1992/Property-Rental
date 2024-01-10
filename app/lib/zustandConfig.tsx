import { create } from "zustand";

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
};

type Store = {
  activeModalContact: Boolean;
  monthCaptured: any;
  yearCaptured: any;
  selectedDates: any[];
  showDateSelected: any[];
  activeModalMap: Boolean;
  children: number;
  adults: number;
  drawerModalIsActive: boolean;
};

const useStore = create<Store & StoreMethod>()((set) => ({
  activeModalContact: false,
  activeModalMap: false,
  monthCaptured: 0,
  selectedDates: [],
  showDateSelected: [],
  adults: 1,
  children: 0,
  yearCaptured: undefined,
  drawerModalIsActive: false,
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
  set(()=>({drawerModalIsActive:value})),
}));

export default useStore;

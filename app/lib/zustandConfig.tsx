import { create } from "zustand";

type Store = {
  activeModalContact: Boolean;
  monthCaptured: any;
  yearCaptured: any;
  setOnchangeMonth: (
    month: number | undefined,
    year: number | undefined
  ) => void;
  selectedDates: any[];
  showDateSelected: any[];
  resetDateSelected: () => void;
  setSelectedDates: (e: any) => void;
  activeModalMap: Boolean;
  setActiveModal: (active: Boolean) => void;
  setActiveModalMap: (active: Boolean) => void;
};

const useStore = create<Store>()((set) => ({
  activeModalContact: false,
  activeModalMap: false,
  monthCaptured: 0,
  yearCaptured: undefined,
  setOnchangeMonth: (month: number | undefined, year: number | undefined) => {
    set(() => ({ monthCaptured: month, yearCaptured: year }));
  },
  selectedDates: [],
  showDateSelected: [],
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
}));

export default useStore;

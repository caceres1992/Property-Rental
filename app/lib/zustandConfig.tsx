import { create } from "zustand";

type Store = {
  activeModalContact: Boolean;
  selectedDates: any[];
  setSelectedDates: (e: any) => void;
  activeModalMap: Boolean;
  setActiveModal: (active: Boolean) => void;
  setActiveModalMap: (active: Boolean) => void;
};

const useStore = create<Store>()((set) => ({
  activeModalContact: false,
  activeModalMap: false,
  selectedDates: [],
  setSelectedDates: (e: any) => {
    set(() => ({ selectedDates: e }));
  },
  setActiveModal: (active: Boolean) =>
    set(() => ({ activeModalContact: active })),
  setActiveModalMap: (active: Boolean) =>
    set(() => ({ activeModalMap: active })),
}));

export default useStore;

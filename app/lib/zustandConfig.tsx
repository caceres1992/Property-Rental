import { create } from "zustand";

type Store = {
  activeModalContact: Boolean;
  activeModalMap: Boolean;
  setActiveModal: (active: Boolean) => void;
  setActiveModalMap: (active: Boolean) => void;
};

const useStore = create<Store>()((set) => ({
  activeModalContact: false,
  activeModalMap: false,
  setActiveModal: (active: Boolean) =>
    set(() => ({ activeModalContact: active })),
  setActiveModalMap: (active: Boolean) =>
    set(() => ({ activeModalMap: active })),
}));

export default useStore;

import create from "zustand";

interface storeState {
  activeIndex: number | null;
  setActiveIndex: (index: number | null) => void;
}

const useStore = create<storeState>((set) => ({
  activeIndex: null,
  setActiveIndex: (index) => set({activeIndex: index}),
}));

export default useStore;

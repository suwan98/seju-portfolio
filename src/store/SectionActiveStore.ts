import create from "zustand";

const useStore = create((set) => ({
  activeIndex: null,
  setActiveIndex: (index: number) => set(() => ({activeIndex: index})),
}));

export default useStore;

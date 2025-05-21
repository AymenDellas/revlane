import { create } from "zustand";

interface ActiveIndex {
  activeIndex: number;
  setActiveIndex: (index: number) => void;
}

export const useActiveIndex = create<ActiveIndex>((set) => {
  return {
    activeIndex: 1,
    setActiveIndex: (index: number) => set({ activeIndex: index }),
  };
});

import { create } from "zustand";
export const useStore = create((set) => ({
  bears: 0,
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
}));
export const updateSearch = create((set) => ({
  values: false,
  updateDisplay: () => set((state) => ({ values: !state.values })),
}));
export const compActive = create((set) => ({
  activePage: "/company/home",
  updateActivePage: (page) =>
    set((state) => ({ activePage: (state.activePage = page) })),
}));

export const leftTinyFun = create((set) => ({
  leftTiny: false,
  updateTiny: () => set((state) => ({ leftTiny: !state.leftTiny })),
}));

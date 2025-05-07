import { create } from "zustand";

interface PatchVersionStore {
  version: string | null;
  setVersion: (v: string) => void;
}

export const patchVersionStore = create<PatchVersionStore>((set) => ({
  version: null,
  setVersion: (v) => set({ version: v }),
}));

export const usePatchVersionStore = patchVersionStore;

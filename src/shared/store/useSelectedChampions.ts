import { create } from "zustand";
import type { Champion } from "@/@types";
import { STORAGE_KEYS } from "@/constants/storageKeys";

interface SelectedChampionsStore {
  selectedChampions: Champion[];
  toggleChampion: (champion: Champion) => void;
  isChampionSelected: (championId: string) => boolean;
  removeChampion: (championId: string) => void;
  clearChampions: () => void;
}

export const useSelectedChampions = create<SelectedChampionsStore>(
  (set, get) => ({
    selectedChampions: (() => {
      const savedChampions = localStorage.getItem(
        STORAGE_KEYS.SELECTED_CHAMPIONS
      );
      return savedChampions ? JSON.parse(savedChampions) : [];
    })(),

    toggleChampion: (champion: Champion) => {
      set((state) => {
        const isSelected = state.selectedChampions.some(
          (champ) => champ.id === champion.id
        );
        const newSelectedChampions = isSelected
          ? state.selectedChampions.filter((champ) => champ.id !== champion.id)
          : [...state.selectedChampions, champion];

        localStorage.setItem(
          STORAGE_KEYS.SELECTED_CHAMPIONS,
          JSON.stringify(newSelectedChampions)
        );

        return { selectedChampions: newSelectedChampions };
      });
    },

    isChampionSelected: (championId: string) => {
      return get().selectedChampions.some((champ) => champ.id === championId);
    },

    removeChampion: (championId: string) => {
      set((state) => {
        const newSelectedChampions = state.selectedChampions.filter(
          (champ) => champ.id !== championId
        );
        localStorage.setItem(
          STORAGE_KEYS.SELECTED_CHAMPIONS,
          JSON.stringify(newSelectedChampions)
        );
        return { selectedChampions: newSelectedChampions };
      });
    },

    clearChampions: () => {
      set({ selectedChampions: [] });
      localStorage.removeItem(STORAGE_KEYS.SELECTED_CHAMPIONS);
    },
  })
);

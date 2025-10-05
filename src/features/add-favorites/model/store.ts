import type { MusicType } from '@/entities/music';
import { create } from 'zustand';


type MusicStoreType = {
  favorites: MusicType[];
  toggleFavorite: (music?: MusicType) => void;
  getFavoriteMusic: (id: string) => MusicType | undefined;
};

export const useFavoritesMusicStore = create<MusicStoreType>((set, get) => ({
  favorites: [],
  toggleFavorite: (music) => {
    if (!music) return;

    const favorites = get().favorites;

    if (favorites.some((item) => item.id === music.id)) {
      set({ favorites: favorites.filter((item) => item.id !== music.id) });
      return;
    }

    set({ favorites: [...favorites, music] });
  },
  getFavoriteMusic: (id) => {
    if (!id) return;
    return get().favorites.find((music) => music.id === id);
  },
}));
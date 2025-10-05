import type { MusicType } from '@/entities/music';
import { MUSICS } from '@/shared/api/mock/music.mock';
import { create } from 'zustand';

type AudioPlayerStoreType = {
  isPlaying: boolean;
  music: MusicType | null;
  progress: number;
  currentTime: number;
  volume: number;

  onPlay: () => void;
  onPause: () => void;
  setMusic: (music: MusicType) => void;
  onSeek: (time: number) => void;
  setVolume: (volume: number) => void;
  changeTrack: (type: 'prev' | 'next') => void;
};

export const useAudioPlayerStore = create<AudioPlayerStoreType>((set, get) => ({
  currentTime: 0,
  progress: 0,
  isPlaying: false,
  volume: 50,
  music: null,

  onPlay: () => set({ isPlaying: true }),
  onPause: () => set({ isPlaying: false }),
  setMusic: (music) => set({ music, isPlaying: true }),
  onSeek: (time) => {
    const currentMusic = get().music;

    if (!currentMusic) return;

    set({ progress: (time / (currentMusic.duration || 1)) * 100 });
    set({ currentTime: time });
  },
  setVolume: (volume) => set({ volume }),

  changeTrack: (type) => {
    const currentMusic = get().music;
    if (!currentMusic) return;

    const currentIndex = MUSICS.findIndex(
      (item) => item.id === currentMusic.id
    );

    const nextIndex =
      type === 'next'
        ? (currentIndex + 1) % MUSICS.length
        : (currentIndex - 1 + MUSICS.length) % MUSICS.length;
    set({ music: MUSICS[nextIndex] });

    set({ currentTime: 0 });
    set({ progress: 0 });
  },
}));

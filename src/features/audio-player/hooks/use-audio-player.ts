import { useEffect, useRef } from 'react';
import { useAudioPlayerStore } from '../model/store';


export const useAudioPlayer = () => {
  const musicStore = useAudioPlayerStore();
  const ref = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    if (musicStore.isPlaying) {
      ref.current.play();
      musicStore.onPlay();
    }
  }, [musicStore.music]);

  const onSeek = (time: number) => {
    if (!ref.current) return;

    musicStore.onSeek(time);
    ref.current.currentTime = time;
  };

  const togglePlayPause = () => {
    if (!ref.current) return;

    if (ref.current.paused) {
      ref.current.play();
      musicStore.onPlay();
    } else {
      ref.current.pause();
      musicStore.onPause();
    }
  };

  const onChangeVolume = (volume: number) => {
    if (!ref.current) return;

    ref.current.volume = volume / 100;
    musicStore.setVolume(volume);
  };

  const changeTrack = (type: 'prev' | 'next') => {
    musicStore.changeTrack(type);

    if (ref.current && musicStore.isPlaying) {
      ref.current.play();
    }
  };

  return {
    audioRef: ref,
    togglePlayPause,
    onSeek,
    onChangeVolume,
    changeTrack,
  };
};

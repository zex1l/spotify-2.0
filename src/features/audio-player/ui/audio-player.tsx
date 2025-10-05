import { SkipBack, SkipForward } from 'lucide-react';
import { useAudioPlayerStore } from '../model/store';
import { ButtonPlay } from './button-play';
import { TrackInfo } from './track-info';
import { ProgressBar } from './progress-bar';
import { formatDuration } from '@/shared/utils';
import { useAudioPlayer } from '../hooks/use-audio-player';
import { AudioVolume } from './audio-volume';

export const AudioPlayer = () => {
  const {
    music,
    isPlaying,
    currentTime,
    progress,
    onSeek: seek,
    volume,
  } = useAudioPlayerStore();
  const { audioRef, togglePlayPause, onSeek, onChangeVolume, changeTrack } =
    useAudioPlayer();

  if (!music) return null;

  return (
    <div className="grid grid-cols-[3fr_100px]  gap-5 lg:grid lg:grid-cols-[1fr_5fr_1fr] ">
      <TrackInfo
        artist={music.artists[0].name}
        image={music.image}
        name={music.name}
      />
      <audio
        src={music.src}
        ref={audioRef}
        onTimeUpdate={(e) => {
          const currentTime = Math.floor(e.currentTarget.currentTime);
          seek(currentTime);
        }}
        onEnded={() => changeTrack('next')}
      />

      <div className=" grid grid-cols-[1fr_6fr] gap-5 order-2 col-span-2 lg:order-1 lg:col-span-1">
        <div className="flex items-center justify-center gap-2">
          <button
            onClick={() => changeTrack('prev')}
            className="cursor-pointer hover:text-zinc-500 transition-colors"
          >
            <SkipBack size={18} />
          </button>
          <ButtonPlay onClick={togglePlayPause} isPlaying={isPlaying} />
          <button
            onClick={() => changeTrack('next')}
            className="cursor-pointer hover:text-zinc-500 transition-colors"
          >
            <SkipForward size={18} />
          </button>
        </div>

        <div className="flex items-center gap-2">
          <p className="text-sm text-zinc-400 w-10">
            {formatDuration(currentTime)}
          </p>
          <ProgressBar
            currentValue={currentTime}
            value={music.duration}
            progress={progress}
            onSeek={(time) => onSeek(time)}
            withThumb
          />
          <p className="text-sm text-zinc-400 w-10 text-right">
            {formatDuration(music.duration)}
          </p>
        </div>
      </div>
      <AudioVolume
        className="order-1  ml-auto  w-full lg:order-2 lg:justify-start lg:ml-0"
        onClick={() => (volume > 0 ? onChangeVolume(0) : onChangeVolume(50))}
        onChangeVolume={onChangeVolume}
        volume={volume}
      />
    </div>
  );
};

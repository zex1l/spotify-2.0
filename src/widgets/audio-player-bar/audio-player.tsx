import { AudioPlayer, useAudioPlayerStore } from '@/features';

export const AudioPlayerBar = () => {
  const { music } = useAudioPlayerStore();

  return (
    <div
      className="lg:min-h-[80px] px-4 py-4 bg-zinc-700 w-[calc(100%-15px)] fixed transition-all duration-200"
      style={{ bottom: music ? `0px` : `-100%` }}
    >
      <AudioPlayer />
    </div>
  );
};

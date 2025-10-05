import { Volume1, Volume2, VolumeX } from 'lucide-react';
import { ProgressBar } from './progress-bar';
import { cn } from '@/shared/utils';

type Props = {
  volume: number;
  onChangeVolume: (volume: number) => void;
  onClick?: () => void;
  className?: string;
};

export const AudioVolume = ({
  onChangeVolume,
  volume,
  onClick,
  className,
}: Props) => {
  return (
    <div className={cn('flex items-center max-w-[100px] gap-2', className)}>
      <button onClick={onClick}>
        {volume === 0 && <VolumeX size={22} />}
        {volume <= 50 && volume > 0 && <Volume1 size={22} />}
        {volume > 50 && <Volume2 size={22} />}
      </button>
      <ProgressBar
        currentValue={volume}
        value={100}
        progress={volume}
        onSeek={onChangeVolume}
      />
    </div>
  );
};

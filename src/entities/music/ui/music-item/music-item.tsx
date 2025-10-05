import { cn, formatDuration } from '@/shared/utils';

type Props = {
  duration: number;
  name: string;
  image: string;
  actions?: React.ReactNode;
  className?: string;
  onPlay?: () => void;
};

export const MusicItem = ({
  duration,
  image,
  name,
  actions,
  className,
  onPlay,
}: Props) => {
  return (
    <div
      className={cn(
        'flex items-center min-h-[100px] py-2 justify-between',
        className
      )}
    >
      <div className="flex items-center gap-4">
        <img
          className="w-12 h-12 rounded-full cursor-pointer"
          onClick={onPlay}
          src={image}
          alt={name}
        />
        <div className="flex flex-col gap-1">
          <p className="font-semibold text-[14px]">{name}</p>
          <p className="text-sm text-zinc-400">{formatDuration(duration)}</p>
        </div>
      </div>
      <div className="flex items-center gap-2">{actions}</div>
    </div>
  );
};

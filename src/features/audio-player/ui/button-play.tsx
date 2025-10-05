import { Pause, Play } from 'lucide-react';

type Props = {
  isPlaying: boolean;
  onClick?: () => void
};

export const ButtonPlay = ({ isPlaying, onClick }: Props) => {
  return (
    <button onClick={onClick} className="flex justify-center items-center w-10 h-10 bg-zinc-600 rounded-full border border-zinc-500  cursor-pointer hover:bg-zinc-500 transition-colors">
      {isPlaying ? (
        <Pause className="text-primary" size={18}/>
      ) : (
        <Play className="text-primary" size={18}/>
      )}
    </button>
  );
};

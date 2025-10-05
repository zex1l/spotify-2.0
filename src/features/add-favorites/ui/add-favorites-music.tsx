import { type MusicType } from '@/entities/music';
import { cn } from '@/shared/utils';
import { Heart } from 'lucide-react';
import { useFavoritesMusicStore } from '../model/store';

type Props = {
  className?: string;
  music: MusicType;
};

export const AddFavoritesMusic = ({ className, music }: Props) => {
  const { toggleFavorite, getFavoriteMusic } = useFavoritesMusicStore();

  const isFavorite = getFavoriteMusic(music?.id);

  return (
    <button
      onClick={() => toggleFavorite(music)}
      className={cn('cursor-pointer', className)}
    >
      <Heart
        className={cn('w-6 h-6 text-primary', { 'fill-primary': isFavorite })}
      />
    </button>
  );
};

import { MusicItem, type MusicType } from '@/entities/music';
import { AddFavoritesMusic, useAudioPlayerStore } from '@/features';
import { cn } from '@/shared/utils';

type Props = {
  items: MusicType[];
};

export const MusicList = ({ items }: Props) => {
  const { setMusic } = useAudioPlayerStore();
  return (
    <div className="flex flex-col pb-[140px]">
      {items.map((item, key) => {
        const lastItem = key === items.length - 1;

        return (
          <MusicItem
            key={item.id}
            className={cn({ 'border-b border-zinc-700': !lastItem })}
            {...item}
            actions={<AddFavoritesMusic music={item} />}
            onPlay={() => setMusic(item)}
          />
        );
      })}
    </div>
  );
};

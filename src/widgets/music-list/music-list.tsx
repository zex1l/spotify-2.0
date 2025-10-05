import { MusicItem, type MusicType } from '@/entities/music';
import { AddFavoritesMusic } from '@/features';
import { cn } from '@/shared/utils';

type Props = {
  items: MusicType[];
};

export const MusicList = ({ items }: Props) => {
  return (
    <div className="flex flex-col">
      {items.map((item, key) => {
        const lastItem = key === items.length - 1;

        return (
          <MusicItem
            key={item.id}
            className={cn({ 'border-b border-zinc-700': !lastItem })}
            {...item}
            actions={<AddFavoritesMusic music={item}/>}
          />
        );
      })}
    </div>
  );
};

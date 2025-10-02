import { useLocation } from 'react-router-dom';
import type { NavigateItemType } from '../../model';
import { NavigateItem } from '../navigate-item/navigate-item';
import { cn } from '@/shared/utils';

type Props = {
  items: NavigateItemType[];
  title?: string;
  isBorderBottom?: boolean;
};

export const NavigateSection = ({
  items,
  title,
  isBorderBottom = true,
}: Props) => {
  const { pathname } = useLocation();
  return (
    <div
      className={cn(
        'hidden flex-col gap-5 pb-7  border-zinc-700  lg:flex',
        isBorderBottom && 'border-b'
      )}
    >
      {title && <p className="text-text/80 uppercase text-[10px]">{title}</p>}
      <div className="flex flex-col gap-4 items-start">
        {items.map((item, index) => (
          <NavigateItem
            key={index}
            item={item}
            active={pathname === item.path}
          />
        ))}
      </div>
    </div>
  );
};

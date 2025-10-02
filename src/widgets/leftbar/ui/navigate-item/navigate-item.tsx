import { Link } from 'react-router-dom';
import type { NavigateItemType } from '../../model';
import { cn } from '@/shared/utils';

type Props = {
  item: NavigateItemType;
  active?: boolean;
};

export const NavigateItem = ({ item, active }: Props) => {
  return (
    <Link to={item.path} className="flex items-center gap-6 group">
      {item.icon && (
        <item.icon
          size={20}
          className={cn('group-hover:text-primary transition-colors ', {
            'text-primary': active,
          })}
        />
      )}
      <span className="text-text text-[12px] group-hover:text-primary transition-colors">{item.title}</span>
    </Link>
  );
};

import { cn } from '@/shared/utils';

type Props = {
  leftbar?: React.ReactNode;
  children?: React.ReactNode;
  rightbar?: React.ReactNode;
};

export const Layout = ({ children, leftbar, rightbar }: Props) => {
  return (
    <div
      className={cn('h-screen grid overflow-hidden transition-all', {
        'grid-cols-[2fr_8fr_2fr]': true,
        'grid-cols-[1fr_8fr_2fr]': false,
      })}
    >
      {leftbar && <div className="p-6">{leftbar}</div>}
      <div className='py-6 px-4'>{children}</div>
      {rightbar && <div className="p-6">{rightbar}</div>}
    </div>
  );
};

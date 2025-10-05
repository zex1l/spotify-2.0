
import { cn } from '@/shared/utils';

type Props = {
  leftbar?: React.ReactNode;
  children?: React.ReactNode;
  rightbar?: React.ReactNode;
};

export const Layout = ({ children, leftbar, rightbar }: Props) => {


  return (
    <div
      className={cn('h-screen grid overflow-x-hidden transition-all grid-cols-[2fr_8fr] lg:grid-cols-[2fr_8fr_2fr]')}
    >
      {leftbar && <div className="p-8 border-r border-zinc-700 overflow-hidden">{leftbar}</div>}
      <div className="py-6 px-8">{children}</div>
      {rightbar && (
        <div className="hidden p-8 border-l border-zinc-700 overflow-hidden lg:block">{rightbar}</div>
      )}
    </div>
  );
};

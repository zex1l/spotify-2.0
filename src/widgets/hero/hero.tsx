import { Play } from 'lucide-react';
import { Link } from 'react-router-dom';

type Props = {
  img?: string;
  title?: string;
  link?: string;
};

export const Hero = ({ img, link, title }: Props) => {
  return (
    <div className="min-h-[400px] relative rounded-lg p-8 flex flex-col justify-end">
      <img
        className="w-full h-full absolute inset-0 object-cover object-top rounded-lg z-0"
        src={img}
      />
      <div className="relative z-2 flex justify-between items-end">
        {title && <h1 className="text-text text-3xl font-bold">{title}</h1>}
        {link && (
          <Link to={link} className="w-16 h-16 border flex items-center justify-center border-zinc-400 rounded-full bg-gradient-to-r from-zinc-700  to-zinc-800  hover:scale-105 transition-all ">
            <Play className="w-6 h-6 text-zinc-200" />
          </Link>
        )}
      </div>
      <div className='absolute inset-0 z-1 bg-gradient-to-t rounded-lg from-zinc-900 to-transparent'/>
    </div>
  );
};

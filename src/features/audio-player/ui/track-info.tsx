type Props = {
  image: string;
  name: string;
  artist: string;
};

export const TrackInfo = ({ artist, image, name }: Props) => {
  return (
    <div className="flex items-center gap-2 ">
      <img className="w-12 h-12 rounded-full" src={image} alt="" />
      <div className="flex flex-col">
        <p className="font-semibold line-clamp-1">{name}</p>
        <p className="text-sm text-zinc-400">{artist}</p>
      </div>
    </div>
  );
};

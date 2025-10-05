import { MUSICS } from '@/shared/api/mock/music.mock';
import { MusicList } from '@/widgets';
import { Hero } from '@/widgets/hero/hero';

export const HomePage = () => {
  return (
    <div className="">
      <Hero img="/public/hero.png" link="/" title="Daft Punk" />
      <MusicList items={MUSICS} />
    </div>
  );
};

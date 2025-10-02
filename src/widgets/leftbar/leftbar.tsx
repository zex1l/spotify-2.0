
import {
  navigationMenu,
  navigationSection1,
  navigationSection2,
} from './model';
import { MenuBtn, NavigateSection } from './ui';

export const Leftbar = () => {


  return (
    <div className="h-full flex flex-col gap-6 ">
      <MenuBtn />
      <NavigateSection items={navigationMenu}  />
      <NavigateSection
        title="Your Library"
        items={navigationSection1}

      />
      <NavigateSection
        title="Playlists"
        items={navigationSection2}
        isBorderBottom={false}

      />
    </div>
  );
};

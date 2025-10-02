import { Home, Compass, Radio } from 'lucide-react';
import type { NavigateItemType } from './type';

export const navigationMenu: NavigateItemType[] = [
  {
    path: '/',
    title: 'Home',
    icon: Home,
  },
  {
    path: '/discover',
    title: 'Discover',
    icon: Compass,
  },
  {
    path: '/radio',
    title: 'Radio',
    icon: Radio,
  },
];

export const navigationSection1: NavigateItemType[] = [
  {
    path: '/',
    title: 'Made For You',
  },
  {
    path: '/',
    title: 'Recently Played',
  },
  {
    path: '/',
    title: 'Liked Songs',
  },
  {
    path: '/',
    title: 'Albums',
  },
  {
    path: '/',
    title: 'Artists',
  },
  {
    path: '/',
    title: 'Podcasts',
  },
];

export const navigationSection2: NavigateItemType[] = [
  {
    path: '/',
    title: 'Leave Me Alone',
  },
  {
    path: '/',
    title: 'Something About Us',
  },
];

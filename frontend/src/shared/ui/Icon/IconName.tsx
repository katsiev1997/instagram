import Home from '@/shared/assets/svg/Home.svg';
import Messenger from '@/shared/assets/svg/Messenger.svg';
import Search from '@/shared/assets/svg/Search.svg';
import Dark from '@/shared/assets/svg/Dark.svg';
import Favorite from '@/shared/assets/svg/Favorite.svg';
import Google from '@/shared/assets/svg/google.svg';
import Light from '@/shared/assets/svg/Light.svg';

export type IconType =
  | 'Home'
  | 'Messenger'
  | 'Search'
  | 'Dark'
  | 'Favorite'
  | 'google'
  | 'Light';

export const IconName: Record<IconType, JSX.Element> = {
  Home: <Home />,
  Messenger: <Messenger />,
  Search: <Search />,
  Dark: <Dark />,
  Favorite: <Favorite />,
  google: <Google />,
  Light: <Light />,
};
import Dark from '@/shared/assets/svg/Dark.svg';
import Favorite from '@/shared/assets/svg/Favorite.svg';
import FindPeople from '@/shared/assets/svg/FindPeople.svg';
import Home from '@/shared/assets/svg/Home.svg';
import Light from '@/shared/assets/svg/Light.svg';
import Messenger from '@/shared/assets/svg/Messenger.svg';
import NewPosts from '@/shared/assets/svg/NewPosts.svg';
import Search from '@/shared/assets/svg/Search.svg';
import Facebook from '@/shared/assets/svg/facebook.svg';
import Google from '@/shared/assets/svg/google.svg';

export type IconType =
  | 'Home'
  | 'Messenger'
  | 'Search'
  | 'Dark'
  | 'Favorite'
  | 'google'
  | 'NewPosts'
  | 'FindPeople'
  | 'Light'
  | 'Facebook';

export const IconName: Record<IconType, JSX.Element> = {
  Home: <Home />,
  Messenger: <Messenger />,
  Search: <Search />,
  Dark: <Dark />,
  Favorite: <Favorite />,
  google: <Google />,
  Light: <Light />,
  NewPosts: <NewPosts />,
  FindPeople: <FindPeople />,
  Facebook: <Facebook />,
};

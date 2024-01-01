import { type FC } from 'react';
import { NavLink, type LinkProps } from 'react-router-dom';

export const AppLink: FC<LinkProps> = (props) => {
  return <NavLink {...props}>{props.children}</NavLink>;
};

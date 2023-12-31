import { lazy } from 'react';

export const ExploreLazyPage = lazy(
  () =>
    new Promise((res) => {
      //@ts-ignore
      setTimeout(() => res(import('./ExplorePage')), 1000);
    })
);

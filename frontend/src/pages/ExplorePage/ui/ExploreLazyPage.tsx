import { lazy } from 'react';

export const ExploreLazyPage = lazy(
  async () =>
    await new Promise((res) => {
      // @ts-expect-error
      setTimeout(() => { res(import('./ExplorePage')); }, 1000);
    })
);

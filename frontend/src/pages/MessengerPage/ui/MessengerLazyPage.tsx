import { lazy } from 'react';

export const MessengerLazyPage = lazy(
  async () =>
    await new Promise((res) => {
      // @ts-expect-error
      setTimeout(() => { res(import('./MessengerPage')); }, 1000);
    })
);

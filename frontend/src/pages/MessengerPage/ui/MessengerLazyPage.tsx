import { lazy } from 'react';

export const MessengerLazyPage = lazy(
  () =>
    new Promise((res) => {
      //@ts-ignore
      setTimeout(() => res(import('./MessengerPage')), 1000);
    })
);

import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import {
  ExploreLazyPage,
  HomePage,
  LoginLazyPage,
  MessengerLazyPage,
  ProfileLazyPage,
  RegisterLazyPage,
} from '@/pages';
import { Spinner } from '@/shared/ui';
import { AppLayout } from './AppLayout';
import { AuthLayout } from './AuthLayout';

export const RouteProvider = () => {
  return (
    <Suspense fallback={<Spinner variant='gray' />}>
      <Routes>
        <Route path='/' element={<AppLayout />}>
          <Route path='/' element={<HomePage />} />
          <Route path='/profile/:id' element={<ProfileLazyPage />} />
          <Route path='/messenger' element={<MessengerLazyPage />} />
          <Route path='/explore' element={<ExploreLazyPage />} />
        </Route>
        <Route path='/' element={<AuthLayout />}>
          <Route path='/login' element={<LoginLazyPage />} />
          <Route path='/register' element={<RegisterLazyPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

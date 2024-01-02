import {
  HomePage,
  LoginLazyPage,
  ProfileLazyPage,
  RegisterLazyPage,
  MessengerLazyPage,
  ExploreLazyPage,
} from '@/pages';

import { Navbar } from '../widgets';
import { Route, Routes } from 'react-router-dom';
import { type FC, Suspense } from 'react';
import { Spinner } from '@/shared/ui';
import { useSelector } from 'react-redux';
import { getAuthData } from '@/entities/User';

const App: FC = () => {
  const isLogged = !!useSelector(getAuthData);

  return (
    <div className='app'>
      <Suspense fallback=''>
        {isLogged && <Navbar />}
        <div className='container'>
          <Suspense fallback={<Spinner variant='gray' />}>
            <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='/login' element={<LoginLazyPage />} />
              <Route path='/register' element={<RegisterLazyPage />} />
              <Route path='/profile' element={<ProfileLazyPage />} />
              <Route path='/messenger' element={<MessengerLazyPage />} />
              <Route path='/explore' element={<ExploreLazyPage />} />
            </Routes>
          </Suspense>
        </div>
      </Suspense>
    </div>
  );
};

export default App;

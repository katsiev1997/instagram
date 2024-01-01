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

const App: FC = () => {
  const auth = false
  return (
    <div className='app'>
      <Suspense fallback=''>
        {auth && <Navbar />}
        <div className='container'>
          <Suspense fallback={<h1>Loading...</h1>}>
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

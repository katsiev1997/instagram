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
import { Suspense } from 'react';
import { useTranslation } from 'react-i18next';

function MyComponent() {
  const { t, i18n } = useTranslation();

  return <h1>{t('Welcome to React')}</h1>;
}

const App = () => {
  return (
    <div className='app'>
      <Suspense fallback=''>
        <Navbar />
        <MyComponent />
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

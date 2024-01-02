import { getAuthToken, getFetchAuthUser } from '@/entities/User';
import { useAppDispatch } from '@/shared/hooks/useAppDispatch';
import { Suspense, useEffect, type FC } from 'react';
import { useSelector } from 'react-redux';
import { Navbar } from '../widgets';
import { RouteProvider } from './provider';

const App: FC = () => {
  const isLogged = !!useSelector(getAuthToken);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getFetchAuthUser());
  }, [dispatch]);
  return (
    <div className='app'>
      <Suspense fallback=''>
        {isLogged && <Navbar />}
        <div className='container'>
          <RouteProvider />
        </div>
      </Suspense>
    </div>
  );
};

export default App;

import { getAuthToken } from '@/entities/User';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

export const AppLayout = () => {
  const isLogged = useSelector(getAuthToken);
  const token = localStorage.getItem('token');

  if (!token && !isLogged) {
    return <Navigate to='/login' />;
  }
  return <Outlet />;
};

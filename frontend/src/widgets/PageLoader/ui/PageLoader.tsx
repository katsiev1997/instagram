import { Spinner } from '@/shared/ui';
import cls from './PageLoader.module.scss';
import { useSelector } from 'react-redux';
import { getUserLoading } from '@/entities/User';

export const PageLoader = () => {
  const loading = useSelector(getUserLoading);
  if (loading) {
    return (
      <div className={cls.page_loader}>
        <Spinner size='l' variant='gray' />
      </div>
    );
  }
  return null
};

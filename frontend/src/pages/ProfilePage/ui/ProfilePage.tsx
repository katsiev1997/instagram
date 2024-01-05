import {
  ProfileInfo,
  ProfilePost,
  getProfileUsers,
  getUserProfile,
} from '@/entities/Profile';
import { useAppDispatch } from '@/shared/hooks/useAppDispatch';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const ProfilePage = () => {
  const dispatch = useAppDispatch();
  const profileUsers = useSelector(getProfileUsers);
  const { id } = useParams<{ id: string }>();
  useEffect(() => {
    if (profileUsers.every((user) => user._id !== id)) {
      dispatch(getUserProfile({ id }));
    }
  }, [id, dispatch, profileUsers]);
  return (
    <div>
      <ProfileInfo id={id} users={profileUsers}/>
      <ProfilePost />
    </div>
  );
};

export default ProfilePage;

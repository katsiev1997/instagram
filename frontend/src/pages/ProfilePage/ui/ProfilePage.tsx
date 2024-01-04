import { ProfileInfo, ProfilePost } from '@/entities/Profile';
import React from 'react';

const ProfilePage = () => {
  return (
    <div>
      <ProfileInfo />
      <ProfilePost />
    </div>
  );
};

export default ProfilePage;

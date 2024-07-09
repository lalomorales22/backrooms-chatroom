import React from 'react';
import UserProfile from '../components/user/UserProfile';

const ProfilePage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Your Profile</h1>
      <UserProfile />
    </div>
  );
};

export default ProfilePage;
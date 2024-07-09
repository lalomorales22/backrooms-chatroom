import React from 'react';

const UserAvatar = ({ user, size = 'md' }) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16'
  };

  const getInitials = (name) => {
    return name
      .split(' ')
      .map(part => part[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <div className={`${sizeClasses[size]} rounded-full bg-gray-300 flex items-center justify-center overflow-hidden backrooms-avatar`}>
      {user.avatarUrl ? (
        <img src={user.avatarUrl} alt={user.username} className="w-full h-full object-cover" />
      ) : (
        <span className="text-gray-700 font-semibold">{getInitials(user.username)}</span>
      )}
    </div>
  );
};

export default UserAvatar;
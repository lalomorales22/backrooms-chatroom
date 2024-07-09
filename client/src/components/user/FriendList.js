import React from 'react';
import UserAvatar from './UserAvatar';

const FriendList = ({ friends }) => {
  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-inner">
      <h3 className="text-lg font-semibold mb-4">Fellow Wanderers</h3>
      {friends.length === 0 ? (
        <p className="text-gray-500 italic">No other souls found... yet.</p>
      ) : (
        <ul className="space-y-2">
          {friends.map((friend) => (
            <li key={friend.id} className="flex items-center space-x-2 p-2 hover:bg-gray-200 rounded transition duration-200">
              <UserAvatar user={friend} size="sm" />
              <span className="text-sm">{friend.username}</span>
              <span className="text-xs text-gray-500 ml-auto">{friend.lastSeen}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FriendList;
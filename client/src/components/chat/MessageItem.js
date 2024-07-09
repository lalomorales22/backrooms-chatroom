import React from 'react';
import { formatDate } from '../../utils/formatters';
import { useAuth } from '../../hooks/useAuth';

const MessageItem = ({ message }) => {
  const { user } = useAuth();
  const isOwnMessage = message.sender._id === user.id;

  return (
    <div className={`flex ${isOwnMessage ? 'justify-end' : 'justify-start'} mb-4`}>
      <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
        isOwnMessage 
          ? 'bg-blue-500 text-white' 
          : 'bg-gray-200 text-gray-800'
      }`}>
        <div className="flex items-center mb-1">
          <span className="font-bold text-sm mr-2">
            {isOwnMessage ? 'You' : message.sender.username}
          </span>
          <span className="text-xs opacity-50">
            {formatDate(message.createdAt)}
          </span>
        </div>
        <p className="text-sm">{message.content}</p>
      </div>
    </div>
  );
};

export default MessageItem;
import React, { useState, useEffect } from 'react';
import MessageItem from './MessageItem';
import MessageInput from './MessageInput';
import { useChat } from '../../hooks/useChat';

const ThreadView = ({ parentMessage, onClose }) => {
  const [replies, setReplies] = useState([]);
  const { sendMessage, subscribeToThread, unsubscribeFromThread } = useChat();

  useEffect(() => {
    const fetchReplies = async () => {
      // Fetch replies from API
      // setReplies(fetchedReplies);
    };

    fetchReplies();
    subscribeToThread(parentMessage._id, (newReply) => {
      setReplies((prevReplies) => [...prevReplies, newReply]);
    });

    return () => unsubscribeFromThread(parentMessage._id);
  }, [parentMessage._id, subscribeToThread, unsubscribeFromThread]);

  const handleSendReply = (content) => {
    sendMessage(content, parentMessage.room, parentMessage._id);
  };

  return (
    <div className="flex flex-col h-full bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg">
      <div className="p-4 border-b border-gray-200 dark:border-gray-700">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">Thread</h3>
        <button onClick={onClose} className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
          &times;
        </button>
      </div>
      <div className="flex-grow overflow-y-auto p-4">
        <MessageItem message={parentMessage} isThreadParent />
        <div className="mt-4 space-y-4">
          {replies.map((reply) => (
            <MessageItem key={reply._id} message={reply} />
          ))}
        </div>
      </div>
      <div className="p-4 border-t border-gray-200 dark:border-gray-700">
        <MessageInput onSendMessage={handleSendReply} placeholder="Reply to thread..." />
      </div>
    </div>
  );
};

export default ThreadView;
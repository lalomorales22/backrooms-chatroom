import React, { useState } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { useTheme } from '../../hooks/useTheme';

const SettingsModal = ({ isOpen, onClose }) => {
  const { user, updateUser } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const [notifications, setNotifications] = useState(user.notificationsEnabled);
  const [sound, setSound] = useState(user.soundEnabled);

  const handleSave = async () => {
    try {
      await updateUser({
        notificationsEnabled: notifications,
        soundEnabled: sound
      });
      onClose();
    } catch (error) {
      console.error('Error updating settings:', error);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-800 rounded-lg p-8 max-w-md w-full">
        <h2 className="text-2xl font-bold mb-6 dark:text-white">Settings</h2>
        
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="dark:text-white">Theme</span>
            <button onClick={toggleTheme} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
              {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
            </button>
          </div>

          <div className="flex items-center justify-between">
            <span className="dark:text-white">Notifications</span>
            <input 
              type="checkbox" 
              checked={notifications} 
              onChange={() => setNotifications(!notifications)}
              className="form-checkbox h-5 w-5 text-blue-600"
            />
          </div>

          <div className="flex items-center justify-between">
            <span className="dark:text-white">Sound Effects</span>
            <input 
              type="checkbox" 
              checked={sound} 
              onChange={() => setSound(!sound)}
              className="form-checkbox h-5 w-5 text-blue-600"
            />
          </div>
        </div>

        <div className="mt-8 flex justify-end space-x-4">
          <button onClick={onClose} className="px-4 py-2 border border-gray-300 rounded text-gray-700 hover:bg-gray-100 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700">
            Cancel
          </button>
          <button onClick={handleSave} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default SettingsModal;
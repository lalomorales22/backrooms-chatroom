import React, { useState } from 'react';
import data from '@emoji-mart/data';
import Picker from '@emoji-mart/react';

const EmojiPicker = ({ onEmojiSelect }) => {
  const [showPicker, setShowPicker] = useState(false);

  const handleEmojiSelect = (emoji) => {
    onEmojiSelect(emoji.native);
    setShowPicker(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setShowPicker(!showPicker)}
        className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
      >
        😊
      </button>
      {showPicker && (
        <div className="absolute bottom-full right-0 z-10">
          <Picker
            data={data}
            onEmojiSelect={handleEmojiSelect}
            theme="dark"
            set="apple"
            skinTonePosition="search"
            previewPosition="none"
          />
        </div>
      )}
    </div>
  );
};

export default EmojiPicker;
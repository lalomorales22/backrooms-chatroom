import React from 'react';

const RoomItem = ({ room, onSelect, isActive }) => {
  return (
    <div
      onClick={onSelect}
      className={`p-3 rounded-md cursor-pointer transition duration-150 ease-in-out ${
        isActive
          ? 'bg-blue-100 text-blue-800'
          : 'hover:bg-gray-100'
      }`}
    >
      <h3 className="font-semibold">{room.name}</h3>
      <p className="text-sm text-gray-500 truncate">{room.description}</p>
    </div>
  );
};

export default RoomItem;
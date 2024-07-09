import React from 'react';
import RoomItem from './RoomItem';

const RoomList = ({ rooms, onRoomSelect, currentRoom }) => {
  return (
    <div className="space-y-2">
      {rooms.map((room) => (
        <RoomItem
          key={room._id}
          room={room}
          onSelect={() => onRoomSelect(room._id)}
          isActive={currentRoom === room._id}
        />
      ))}
    </div>
  );
};

export default RoomList;
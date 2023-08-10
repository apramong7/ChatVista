import React from 'react';

const RoomNotFound = ({ showNotFoundMssg }) => {
  return (
    <div className='room_not_found_container'>
        {showNotFoundMssg && (
            <p className="room_not_found_paragraph">
                Room has not been found. Please try again.
            </p>
        )}      
    </div>
  )
}

export default RoomNotFound;

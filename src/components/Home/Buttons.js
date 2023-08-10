import React from 'react';
import { useNavigate } from 'react-router-dom';

import Button from './Button';


const Buttons = () => {
  let navigate = useNavigate();

  const pushToJoinRoom = () => {
    navigate('/join-room');
  }

  const pushToJoinRoomHost = () => {
    navigate('./join-room?host=true');
  }

  return (
    <div className='connecting_buttons_container'>
        <Button 
            buttonText='Join a meeting'
            onClickHandler={pushToJoinRoom}
        />
        <Button 
            buttonText='Host a meeting'
            createRoomButton
            onClickHandler={pushToJoinRoomHost}
        />
    </div>
  )
}

export default Buttons

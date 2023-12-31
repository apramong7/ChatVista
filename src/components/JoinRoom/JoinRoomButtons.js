import React from 'react';
import { useNavigate } from 'react-router-dom';

const Button = ({ buttonText, cancelButton, onClickHandler }) => {
    const buttonClass = cancelButton ? 'join_room_cancel_button' : 'join_room_success_button';
    return (
        <button onClick={onClickHandler} className={buttonClass}>
            {buttonText}
        </button>
    )
}

const JoinRoomButtons = ({ handleJoinRoom, isRoomHost }) => {
    const successButtonText = isRoomHost ? 'Host' : 'Join';

    let navigate = useNavigate();

    const pushToHomePage = () => {
        navigate('/');
    }

  return (
    <div className='join_room_buttons_container'>
        <Button 
            buttonText={successButtonText}
            onClickHandler={handleJoinRoom}
        />
        <Button 
            buttonText='Cancel'
            cancelButton
            onClickHandler={pushToHomePage}
        />
    </div>
  )
}

export default JoinRoomButtons;

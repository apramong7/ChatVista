import React, { useState } from 'react';

import MicButtonImg from './../../../assets/images/mic.svg';
import MicButtonImgOff from './../../../assets/images/micOff.svg';

const MicButton = ({ room }) => {
  const [isMicMuted, setIsMicMuted] = useState(false);

  const handleMicButtonPressed = () => {
    isMicMuted ? unmute() : mute();
    setIsMicMuted(!isMicMuted);
  }

  const mute = () => {

  }

  const unmute = () => {
    
  }

  return (
    <div className='video_button_container'>
      <img 
        src={isMicMuted ? MicButtonImgOff : MicButtonImg}
        onClick={handleMicButtonPressed}
        className='video_buttom_image'
        alt=''
      />
    </div>
  )
}

export default MicButton;

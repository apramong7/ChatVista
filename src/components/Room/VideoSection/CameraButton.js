import React, { useState } from 'react';

import CameraBtnImg from './../../../assets/images/camera.svg';
import CameraBtnImgOff from './../../../assets/images/cameraOff.svg';

const CameraButton = ({ room }) => {
  const [isLocalVideoDisabled, setIsLocalVideoDisabled] = useState(false);

  const handlerCameraBtnPress = () => {
    isLocalVideoDisabled ? startVideo() : stopVideo();
    setIsLocalVideoDisabled(!isLocalVideoDisabled);
  }

  const startVideo = () => {

  }

  const stopVideo = () => {

  }

  return (
    <div className='video_button_container'>
      <img 
        src={isLocalVideoDisabled ? CameraBtnImgOff : CameraBtnImg} 
        className='video_button_image'
        onClick={handlerCameraBtnPress}
        alt="" />
      
    </div>
  )
}

export default CameraButton;

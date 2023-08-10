import React from 'react';

import CheckImg from '../../assets/images/check.png';

const OnlyAudioCheckbox = (props) => {
  const { connectOnlyAudio, setConnectOnlyAudio } = props;

  const handleConnectionTypeChange = () => {
    setConnectOnlyAudio(!connectOnlyAudio)
  }

  return (
    <div className='checkbox_container'>
      <div 
        className="checkbox_connection" 
        onClick={handleConnectionTypeChange}
      >
        {connectOnlyAudio && (
            <img src={CheckImg} className='checkbox_image' alt="" />
        )}
      </div>
      <p className="checkbox_container_paragraph">Only Audio</p>
    </div>
  )
}

export default OnlyAudioCheckbox;

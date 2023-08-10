import React, { useState } from "react";

import SwitchImg from './../../../assets/images/switchToScreenSharing.svg';

const ScreenShareButton = () => {
  const [isScreenSharingActive, setIsScreenSharingActive] = useState(false);

  const handleScreenSharingEnabling = () => {
    // handle screen sharing
  };

  return (
    <div className="video_button_container">
      <img
        src={SwitchImg}
        onClick={handleScreenSharingEnabling}
        className="video_button_image"
        alt=""
      />
    </div>
  );
};

export default ScreenShareButton;

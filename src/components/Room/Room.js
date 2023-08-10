import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import ParticipantsSection from './ParticipantsSection/ParticipantsSection';
import VideoSection from './VideoSection/VideoSection';
import ChatSection from './ChatSection/ChatSection';

import { setTwilioAccessToken } from '../../store/actions';
import { getTokenFromTwilio } from '../../utils/twilioUtils';

import './Room.css';

const Room = (props) => {
  const { identity, setTwilioAccessTokenAction } = props;

  useEffect(() => {
    getTokenFromTwilio(setTwilioAccessTokenAction, identity);
  }, [])

  return (
    <div className='room_container'>
      <ParticipantsSection />
      <VideoSection />
      <ChatSection />
    </div>
  );
};

const mapStoreStateToProps = (state) => {
  return {
    ...state,
  };
};

const mapActionsToProps = (dispatch) => {
  return {
    setTwilioAccessTokenAction: (token) => dispatch(setTwilioAccessToken(token))
  }
}


export default connect(mapStoreStateToProps, mapActionsToProps)(Room);

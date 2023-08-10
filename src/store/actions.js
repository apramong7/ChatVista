const Actions = {
    SET_IS_ROOM_HOST: 'SET_IS_ROOM_HOST',
    SET_IDENTITY: 'SET_IDENTITY',
    SET_CONNECT_ONLY_AUDIO: 'SET_CONNECT_ONLY_AUDIO',
    SET_ROOM_ID: 'SET_ROOM_ID',
    SET_TWILIO_ACCESS_TOKEN: 'SET_TWILIO_ACCESS_TOKEN',
};


export const setIdentity = (identity) => {
  return {
    type: Actions.SET_IDENTITY,
    identity,
  };
};

export const setIsRoomHost = (isRoomHost) => {
    return {
        type: Actions.SET_IS_ROOM_HOST,
        isRoomHost,
    };
};

export const setConnectOnlyAudio = (onlyAudio) => {
  return {
    type: Actions.SET_CONNECT_ONLY_AUDIO,
    onlyAudio,
  }
}

export const setRoomId = (roomId) => {
  return {
    type: Actions.SET_ROOM_ID,
    roomId,
  }
}

export const setTwilioAccessToken = (token) => {
  return {
    type: Actions.SET_TWILIO_ACCESS_TOKEN,
    token
  }
}

export default Actions;
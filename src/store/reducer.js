import Actions from './actions';

const initState = {
    identity: '',
    isRoomHost: false,
    connectOnlyAudio: false,
    roomId: null,
    twilioAccessToken: null
};

const reducer = (state = initState, action) => {
    switch (action.type) {
        case Actions.SET_IDENTITY:
            return {
                ...state,
                identity: action.identity,
            };
        case Actions.SET_IS_ROOM_HOST:
            return {
                ...state,
                isRoomHost: action.isRoomHost,
            };
        case Actions.SET_CONNECT_ONLY_AUDIO:
            return {
                ...state,
                connectOnlyAudio: action.onlyAudio,
            };
        case Actions.SET_ROOM_ID:
            return {
                ...state,
                roomId: action.roomId,
            };
        case Actions.SET_TWILIO_ACCESS_TOKEN:
            return {
                ...state,
                twilioAccessToken: action.token,
            };
        default:
            return state;
    }
};

export default reducer;
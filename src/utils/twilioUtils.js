import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import { store } from '../store/store';
import {
    connect,
    LocalAudioTrack,
    LocalDataTrack,
    LocalVideoTrack
} from 'twilio-video'

const audioConstraints = {
    video: false,
    audio: true
}

const videoConstraints = {
    audio: true,
    video: {
        width: 640,
        height: 480
    }
}

axios.defaults.headers.post['Content-Type'] ='application/x-www-form-urlencoded';

export const getTokenFromTwilio = async (setAccessToken, identity) => {
    const randomId = uuidv4();

    console.log(identity);

    const response = await axios.get(
        `http://localhost:5000/api/token-service?identity=${randomId}${identity}`
    );
    
    const data = response.data;

    if(data.accessToken) {
        setAccessToken(data.accessToken);
    }
};

export const connectToRoom = async (accessToken, roomId = 'test-room', setRoom) => {
    const onlyAudio = store.getState().connectOnlyAudio;
    const constraints = onlyAudio ? audioConstraints : videoConstraints;

    navigator.mediaDevices.getUserMedia(constraints).then(async (stream) => {
        let tracks;

        const audioTrack = new LocalAudioTrack(stream.getAudioTracks()[0]);

        let videoTrack;

        if(!onlyAudio) {
            videoTrack = new LocalVideoTrack(stream.getVideoTracks()[0]);
            tracks = [audioTrack, videoTrack];
        } else {
            tracks = [audioTrack];
        }

        const room = await connect(accessToken, {
            name: roomId,
            tracks
        });

        console.log('successfully connected with twilio room');
        console.log(room);
        setRoom(room);

    })
    .catch((error) => {
        console.log('Error occurred when trying to get access to local devices');
        console.log(error)
    })
}

export const checkIfRoomExists = async (roomId) => {
    try {
        const response = await axios.get(
            `https://localhost:5000/api/room-exists?roomId=${roomId}`,
            { crossDomain: true }
        );
    
        return response.roomExists;
    } catch (error) {
        console.log('this is error ', error)
        return false
    }
}

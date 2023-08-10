import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

import JoinRoomInputs from './JoinRoomInputs';
import OnlyAudioCheckbox from './OnlyAudioCheckbox';
import RoomNotFound from './RoomNotFound';
import JoinRoomButtons from './JoinRoomButtons';

import { setConnectOnlyAudio, setIdentity, setRoomId } from '../../store/actions';
import { checkIfRoomExists } from '../../utils/twilioUtils';


const JoinRoomContent = (props) => {
    const { 
        isRoomHost,
        setConnectOnlyAudioAction, 
        connectOnlyAudio,  
        setIdentityAction,
        setRoomIdAction,
        setShowLoadingOverlay
     } = props;

    const [roomIdValue, setRoomIdValue] = useState('');
    const [nameValue, setNameValue] = useState('');
    const [showNotFoundMssg, setShowNotFoundMssg] = useState(false);

    const navigate = useNavigate();

    const handleJoinRoom = async () => {
        setIdentityAction(nameValue);
        if (!isRoomHost) {
            setShowLoadingOverlay(true);
            const roomExists = await checkIfRoomExists(roomIdValue);
            setShowLoadingOverlay(false);
            if (roomExists) {
                setRoomIdAction(roomIdValue);
                navigate('/room');
            } else {
                setShowNotFoundMssg(true);
            }
        } else {
            setRoomIdAction(uuidv4());
            navigate('/room');
        }
    }


  return (
    <>
        <JoinRoomInputs 
            roomId={roomIdValue}
            setRoomIdValue={setRoomIdValue}
            nameValue={nameValue}
            setNameValue={setNameValue}
            isRoomHost={isRoomHost}
        />
        <OnlyAudioCheckbox 
            setConnectOnlyAudio={setConnectOnlyAudioAction}
            connectOnlyAudio={connectOnlyAudio}
        />
        <RoomNotFound showNotFoundMssg={showNotFoundMssg} />
        <JoinRoomButtons 
            isRoomHost={isRoomHost}
            handleJoinRoom={handleJoinRoom}
        />
    </>
  )
}

const mapDispatchToProps = (dispatch) => {
    return {
        setConnectOnlyAudioAction: (onlyAudio) => dispatch(setConnectOnlyAudio(onlyAudio)),
        setIdentityAction: (identity) => dispatch(setIdentity(identity)),
        setRoomIdAction: (id) => dispatch(setRoomId(id))
    };
}

const mapStoreStateToProps = (state) => {
    return {
        ...state
    }
}

export default connect(mapStoreStateToProps, mapDispatchToProps)(JoinRoomContent);

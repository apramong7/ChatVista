import React, { useState } from 'react';

import SendMessageButton from './../../../assets/images/sendMessageButton.svg';

const NewMessage = () => {
    const [message, setMessage] = useState('');

    const sendMessage = () => {
        console.log(message);
        setMessage('');
    }

    const handleTextChange = (event) => {
        setMessage(event.target.value);
    }

    const handleKeyPressed = (event) => {
        if(event.key === 'Enter') {
            event.preventDefault();
            sendMessage();
        }
    }

  return (
    <div className='new_message_container'>
      <input 
        className='new_message_input'
        value={message}
        placeholder='Type your message'
        type='text'
        onChange={handleTextChange}
        onKeyDown={handleKeyPressed}
      />
      <img 
        className='new_message_button'
        src={SendMessageButton} 
        onClick={sendMessage}
        alt="sendBtn"
      />
    </div>
  )
}

export default NewMessage;

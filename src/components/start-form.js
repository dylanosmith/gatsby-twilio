import React, { useState } from 'react';
import axios from "axios"

const StartForm = ({storeToken}) => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
  
    const handleSubmit = async (event) => {
      event.preventDefault();
  
      const result = await axios({
        method: 'POST',
        url: 'https://prune-swan-6312.twil.io/create-token',
        data: {
          identity: name
        }
  
      });
  
      const jwt = result.data;
  
      //todo add error handling
  
      storeToken(jwt);
  
    }
  
    return(
      <form onSubmit= {handleSubmit}>
        <label htmlFor="name">
          Display Name: <br/>
          <input 
          aria-label="text1"
            type="text" 
            name="name" 
            id="name" 
            value={name} 
            onChange={e => setName(e.target.value)}
          />
        </label>
        <br/>
        <label htmlFor="room">
          Room to join: <br/>
          <input 
            aria-label = "text2"
            type="text" 
            name="room" 
            id="room"
            value={room}
            onChange = {e => setRoom(e.target.value)}
  
          />
        </label>
        <br/>
        <button type="submit">Join Video Chat</button>
      </form>
    )
  
  }

  export default StartForm;
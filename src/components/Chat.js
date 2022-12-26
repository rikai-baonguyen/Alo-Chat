import React from 'react';
import add from '../assets/images/add.png';
import cam from '../assets/images/cam.png';
import more from '../assets/images/more.png';
import { Messages } from './Messages';
import { Input } from './Input';

export const Chat = () => {
  return (
    <div className='chat'>
      <div className='chatInfo'>
        <span>Lose Controller</span>
        <div className='chatIcons'>
          <img src={add} alt=''/>
          <img src={cam} alt=''/>
          <img src={more} alt=''/>
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  )
}

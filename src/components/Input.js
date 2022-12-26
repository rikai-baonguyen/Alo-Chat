import React from 'react';
import attach from '../assets/images/attach.png';
import img from '../assets/images/img.png';
 
export const Input = () => {
  return (
    <div className='input'>
      <input type='text' placeholder='Enter something...' />
      <div className='send'>
        <img src={attach} alt=''/>
        <input type='file' style={{display: 'none'}} id='file'/>
        <label htmlFor='file'>
          <img src={img} alt=''/>
        </label>
        <button>Send</button>
      </div>
    </div>
  )
}

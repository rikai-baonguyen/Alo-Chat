import React from 'react'
import cf from '../assets/images/cf.png';
import c4 from '../assets/images/C4.png';

export const Message = () => {
  return (
    <div className='message owner'>
      <div className='messageInfo'>
        <img src={cf} alt=''/>
        <span>now</span>
      </div>
      <div className='messageContent'>
        <p>Oiii</p>
        <img src={c4} alt='' />
      </div>
    </div>
  )
}

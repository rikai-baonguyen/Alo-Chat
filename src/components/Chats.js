import React from 'react'
import cf from '../assets/images/cf.png';
export const Chats = () => {
  return (
    <div className='chats'>
      <div className='userChat'>
        <img src={cf} alt=''/>
          <div className='userChatInfo'>
            <span>
              Lose Controller
            </span>
            <p>Onl đi</p>
          </div>
      </div>
      <div className='userChat'>
        <img src={cf} alt='' />
          <div className='userChatInfo'>
            <span>
              Lose Controller
            </span>
            <p>Nhiệt nè</p>
          </div>
      </div>
      <div className='userChat'>
        <img src={cf} alt=''/>
          <div className='userChatInfo'>
            <span>
              Lose Controller
            </span>
            <p>88 ko</p>
          </div>
      </div>
    </div>
  )
}

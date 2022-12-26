import React from 'react';
import cf from '../assets/images/cf.png';

export const Search = () => {
  return (
    <div className='search'>
      <div className='searchForm'>
        <input type='text' placeholder='Find a user...'/>
      </div>
      <div className='userChat'>
        <img src={cf} alt=''/>
        <div className='userChatInfo'>
          <span>
            Lose Controller
          </span>
        </div>
      </div>
    </div>
  )
}

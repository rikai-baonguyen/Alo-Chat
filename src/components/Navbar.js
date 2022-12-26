import React from 'react';
import Fox from '../assets/images/Fox.png';

export const Navbar = () => {
  return (
    <div className='navbar'>
      <span className='logo'>
        ALO CHAT
      </span>
      <div className='user'>
        <img src={Fox} alt='' />
        <span>KutiN</span>
        <button>Logout</button>
      </div>
    </div>
  )
}

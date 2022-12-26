import React from 'react';

export const Login = () => {
  return (
    <div className='formContainer'>
        <div className='formWrapper'>
            <span className='logo'>ALO CHAT</span>
            <span className='title'>Login</span>
            <form>
                <input type='email' placeholder='Email'/>
                <input type='password' placeholder='Password'/>
                <button>Sign Up</button>
            </form>
            <p>Do not have an account? Register</p>
            <p>OR</p>
        </div>  
    </div>
  )
}

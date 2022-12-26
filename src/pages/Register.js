import React, { useState } from 'react';
import Add from '../assets/images/addAvatar.png';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase';

const Register = () => {
  const [err, setErr] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].file[0];
    
    try{
      const res = await createUserWithEmailAndPassword(auth, email, password)
    }catch(err){
      setErr(true);
    }
  }

  return (
    <div className='formContainer'>
        <div className='formWrapper'>
            <span className='logo'>ALO CHAT</span>
            <span className='title'>Register</span>
            <form onSubmit={handleSubmit}>
                <input type='text' placeholder='Display name'/>
                <input type='email' placeholder='Email'/>
                <input type='password' placeholder='Password'/>
                <input style={{display:'none'}} type='file' id='file' />
                <label htmlFor='file'>
                    <img src={Add} alt=''/>
                    <span>Add avatar</span>
                </label>
                <button>Sign Up</button>
                {err && <span>Something went wrong</span>}
            </form>
            <p>Do you already have an account? Login</p>
        </div>  
    </div>
  )
}

export default Register;

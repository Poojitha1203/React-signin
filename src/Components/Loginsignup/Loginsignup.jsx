import React, { useState } from 'react'
import './Loginsignup.css';


import email_icon from '../assets/email.png.svg'
import password_icon from '../assets/password.png.svg'
import person_icon from '../assets/person.png.svg'
const Loginsignup = () => {
     const[action,setaction]=useState("Login");

  return (
    <div className='container'>
     <div className='header'>
        <div className='text'>{action}</div>
        <div className='underline'></div>
     </div>
     <div className='inputs'>

        {action ==="Login"?<div></div>: 
              <div className='input'>
              <img src={person_icon} alt=""/>
              <input type='text' placeholder='Name'/>
  
               </div>
        }

        
        <div className='input'>
            <img src={email_icon} alt=""/>
            <input type='email' placeholder='Email'/>

        </div>
        <div className='input'>
            <img src={password_icon} alt=""/>
            <input type='password' placeholder='Password'/>

        </div>

            {action ==="Sign Up"?<div></div>  :
                <div className='forgot-password'>Lost password ?<span>Click here</span></div>
            
        }

       
        <div className='submit-container'>
            <div className={action==="Login"?"submit gray" : "submit"} onClick={()=>{
                 
                setaction("Sign Up")}}>Sign up</div>
            <div className={action==="Sign Up"?"submit gray" : "submit"} onClick={()=>{setaction("Login")}}>Login</div>
        </div>
     </div>
  
  
      
    </div>
  )
}

export default Loginsignup

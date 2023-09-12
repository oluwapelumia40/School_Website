import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import "./ForgetPassword.css"

export default function ForgetPassword() {

    const[forgetPassword, setForgetPassword] = useState("")

  return (
    <div>
      <div className="forget-password-body">
        <div className="forget-password-style">
            <form action="">
                <div className="input-field">
                  <span className='forget-password-text'>Provide your email, while you retrieve your password.</span>
                    <input type="text" 
                        id="forgetPassword"
                         name="forgetPassword"
                        placeholder="@example.com"
                     value={forgetPassword}
                   onChange={(e)=>setForgetPassword(e.target.value)}/>
                <Link to="#" className='forget-password-link-style'> Submit</Link>
                </div>
            </form>
        </div>
      </div>
    </div>
  )
}

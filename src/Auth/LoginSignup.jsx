import React, { useState } from 'react'
import './LoginSignup.css'

import { Email} from '@material-ui/icons';
import { Password } from '@mui/icons-material';
import { Link } from 'react-router-dom';


export default function LoginSignup() {
    const [action, setAction] = useState("Login");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setPConfirmPassword] = useState("");

    const changeTitle = () => {
        return setAction("Login");
    }

    const changedTitle = () => {
        return setAction("Sign Up");
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
    };


  return (
    <div className="container">
    
    <form onSubmit={handleSubmit}>
       <div className="header">
        <div className="text"> {action} </div>
        <div className="underline"></div>
       </div>

        <div className="inputs">
            <div className="input">
                <Email/>
                <input type="email" 
                 id="email"
                 name="email"
                 placeholder='@example.com'
                 value={email} 
                 onChange={(e)=>setEmail(e.target.value)}/>
            </div>

            <div className="input">
                <Password/>
                <input type="password" 
                 id="password"
                 name="password"
                 placeholder='Password'
                 value={password}
                 onChange={(e)=>setPassword(e.target.value)}/>
            </div>

            {action==="Login"? <div></div> : <div className="input">
                <Password/>
                <input type="password"
                 name="confirmPassword"
                 placeholder='confirmPassword'
                 value={confirmPassword}
                 onChange={(e)=>setPConfirmPassword(e.target.value)}/>
            </div>}

        </div>
            {action==="Sign Up"? <div></div> : <Link to="/forgetpassword" className="forget-password"> <span> Lost Password? </span> </Link>}
        
        <div className="submit-container">
            <div className={action==="Login"? "submit-btn gray":"submit-btn"} onClick={changedTitle}> Sign Up </div>
            <div className={action==="Sign Up"? "submit-btn gray":"submit-btn"} onClick={changeTitle}>Login</div>
        </div>
        </form>
    </div>
  )
}

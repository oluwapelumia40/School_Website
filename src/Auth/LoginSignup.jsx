import React, { useState } from 'react'
import './LoginSignup.css'
import axios from "axios"
import { Email} from '@material-ui/icons';
import { Password } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { CircularProgress, Alert,Snackbar } from '@mui/material';


export default function LoginSignup() {
    const [action, setAction] = useState("Login");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [conPassword, setConPassword] = useState("");
    const [error, setError] = useState("")
    const [message, setMessage] = useState("")
    const [isFetching, setIsFetching] = useState(false)
     const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    
  };


    const changeTitle = () => {
        return setAction("Login"); 
    }

    const changedTitle = () => {
        return setAction("Sign Up");
    }

    const handleSubmit = async(e) =>{
        try{
            setIsFetching(true)
            setError("")
            e.preventDefault();
            const {data} = await axios.post("https://schoolmanagement-tabc.onrender.com/api/auth/register",{email, password, conPassword})
            if(data){
                setIsFetching(false)
                setMessage(data.message)
                setOpen(false);
            }


        }catch(error){
                setIsFetching(false)
                setError(error.response.data.error)
                console.log(error)
        }
        
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
                 value={conPassword}
                 onChange={(e)=>setConPassword(e.target.value)}/>
            </div>}

        </div>
            {action==="Sign Up"? <div></div> : <Link to="/forgetpassword" className="forget-password"> <span> Lost Password? </span> </Link>}
        
        <div className="submit-container">
            <button className={action==="Login"? "submit-btn gray":"submit-btn"} disabled={isFetching} type="submit" onClick={changedTitle}> 
            {
                isFetching ?
                <CircularProgress size="12px" style={{color:"white"}}/>
                :
                "Sign Up"
            }
             </button>
            <button className={action==="Sign Up"? "submit-btn gray":"submit-btn"} onClick={changeTitle}>Login</button>
            
        </div>
        <p style={{color:"red", marginTop:"10px", textAlign:"center"}}>{error}</p>
        </form>
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
              <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                {message}
              </Alert>
      </Snackbar>
    </div>
  )
}

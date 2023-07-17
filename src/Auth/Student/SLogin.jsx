import React from 'react'
import './SLogin.css';
import eLearning from "../../images/eLearning.png"
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { AppBar, Button, CssBaseline, Toolbar, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

export default function SLogin() {
  return (
    <div>
            <CssBaseline/>
            <AppBar position='relative'>
                <Toolbar>
                    <Typography variant='h5' align='center' className='headerText'>
                       STUDENT'S E-LEARNING PORTAL
                    </Typography>
                </Toolbar>
            </AppBar>

    <div className='login-page'>
       <div className='left-login'>
            <LazyLoadImage src={eLearning} className='loginPageImage'/>
       </div> 
       <div className='right-login'>
        <Typography variant='h4' gutterBottom> Login </Typography>
        <Typography gutterBottom paragraph> Login to access lectures and account information</Typography> 
           <label
                htmlFor='matricNo'
                className='label'>
                Matric No
           </label>
                <input 
                    className='inputBox' 
                    type="text"
                    name="matricNo"
                    placeholder='2014070501048'
                    /> <br></br>
            
            <label
                htmlFor='password'
                className='label'>
                Password
           </label>
                <input 
                    className='inputBox' 
                    type="password"
                    name="password"
                    placeholder='Password123'/>
            <div className='loginLink'> 
                <Link to="/sregister" className='studentRegisterLink'> Register? </Link>
                    <Link to="#" className='forgetPassLink'> Forget Password?</Link>
                        <div className="submitBtn">
                            <Button className='submitLoginBtn' variant='contained' color="primary"> Login</Button>
                        </div>
            </div>
       </div>
    </div>
    </div>
  )
}

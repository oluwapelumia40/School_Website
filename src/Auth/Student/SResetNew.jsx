import React from 'react'
import './SLogin.css';
import eLearning from "../../images/eLearning.png"
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { AppBar, Button, CssBaseline, Toolbar, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

export default function SResetNew() {
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
                <LazyLoadImage src={eLearning} className='loginImage'/>
        </div> 
        <div className='right-login'>
                <Typography variant='h4' gutterBottom> Reset Password </Typography>
                <Typography gutterBottom paragraph> Enter Your Valid Email Address to continue</Typography> 
                <label
                    htmlFor='password'
                    className='label'>
                    New Password
                </label>
                <input 
                    className='inputBox' 
                    type="password"
                    name="email"
                    placeholder='Enter your Password'
                /> <br></br>
                <label
                    htmlFor='conPassword'
                    className='label'>
                    Confirm Password
                </label>
                <input 
                    className='inputBox' 
                    type="password"
                    name="conPassword"
                    placeholder='Re:Enter your Password'
                /> <br></br>
                    
                <div className="submitBtn">
                    <Button className='submit' variant='contained' color="primary"> Submit</Button>
                </div>
                </div>
        </div>
    </div>
  )
}

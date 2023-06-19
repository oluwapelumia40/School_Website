import React from 'react'
import "./SRegister.css"
import eLearning from "../images/eLearning.png"
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { AppBar, Button, CssBaseline, Toolbar, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

export default function SLogin() {
  return (
    <div>
        <CssBaseline/>
            <AppBar position='fixed'>
                <Toolbar>
                    <Typography variant='h5' align='center' className='headerText'>
                       STUDENT'S E-LEARNING PORTAL
                    </Typography>
                </Toolbar>
            </AppBar>
    {/* <div>
        <p className='topInfo'> Admission Portal </p> 
            <p className='topDetails'> Welcome to LAUTECH Admission Portal. Register to kick start an application and login if you already created an account.</p>
    </div> */}
        <div className='register-page'>
            <div className='left-login'>
                <LazyLoadImage src={eLearning} className='registerImage' />
            </div> 
            <div className='right-details'> 
    <Typography variant='h5'> Admission Portal </Typography>
        <Typography gutterBottom className='welcomeText'> Welcome to LAUTECH Admission Portal. <br></br>Register to start an application or login if you already created an account. </Typography>
            <Typography variant='h6'> Admission Registration </Typography>
                <Typography gutterBottom> Please fill in the details below to register for admission.</Typography>
                    <p className='contactText'> Contact support on this number Bimbo <a href="tel: 09094689329" className='callNumber'> 09094689329 </a> and Sola <a href="tel: 08064240134" className='callNumber'> 08064240134 </a> </p> 
                        <Link to="/" className='loginBnt'> Click here to Login your account </Link>
                
                {/* first name */}
                <label
                    htmlFor='firstName'
                    className='label'>
                    First Name
                </label>
                    <input 
                        className='inputBox' 
                        type="text"
                        name="firstName"
                        placeholder='Enter your firstName' 
                        required />  

                {/* surname */}
                <label
                    htmlFor='surname'
                    className='label'>
                    Surname
                </label>
                    <input 
                        className='inputBox' 
                        type="text"
                        name="surname"
                        placeholder='Enter your surname' 
                        required />

                {/* othername */}
                <label
                    htmlFor='otherName'
                    className='label'>
                    Other name(s)
                </label>
                    <input 
                        className='inputBox' 
                        type="text"
                        name="otherName"
                        placeholder='Enter your other name (s)' 
                        required />

                {/* email address */}
                <label
                    htmlFor='email'
                    className='label'>
                    Email
                </label>
                    <input 
                        className='inputBox' 
                        type="email"
                        name="email"
                        placeholder='Enter your Email address, e.g example@gmail.com'
                        required /> 
                
                {/* Phone number */}
                <label
                    htmlFor='phoneNum'
                    className='label'>
                    Phone Number
                </label>
                    <input 
                         className='inputBox' 
                         type="text"
                         name="phoneNum"
                         placeholder='07031128163'
                         required />

                {/* faculty */}
                <label
                    htmlFor='faculty'
                    className='label'>
                    Faculty
                </label>
                    <input 
                        className='inputBox' 
                        type="text"
                        name="faculty"
                        placeholder='Enter your faculty, e.g Science'
                        required />

                {/* department */}
                <label
                    htmlFor='department'
                    className='label'>
                    Department
                </label>
                    <input 
                        className='inputBox' 
                        type="text"
                        name="department"
                        placeholder='Enter your department, e.g Computer Science'
                        required />

                {/* level */}
                <label
                    htmlFor='level'
                    className='label'>
                    Level
                </label>
                    <input 
                        className='inputBox' 
                        type="text"
                        name="level"
                        placeholder='Enter your level, e.g 300L'
                        required />

                {/* password */}
                <label
                    htmlFor='password'
                    className='label'>
                    Password
                </label>
                    <input 
                        className='inputBox' 
                        type="password"
                        name="password"
                        placeholder='Enter your password'
                        required />

                {/* confirm password */}
                <label
                    htmlFor='confirmPassword'
                    className='label'>
                    Confirm Password
                </label>
                    <input 
                        className='inputBox' 
                        type="password"
                        name="confirmPassword"
                        placeholder='Confirm your password'
                        required />

            <div>
                    <div className="submitBtn">
                        <Button className='submit' variant='contained' color="primary"> Register </Button>
                    </div>
            </div>
            </div>
    </div>
    </div>
  )
}

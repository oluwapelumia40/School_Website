import React, { useEffect, useState } from 'react'
import "./SRegister.css"
import eLearning from "../images/eLearning.png"
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { AppBar, Button, CssBaseline, Toolbar, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import axios from "axios"

export default function SLogin() {
    const [allFaculty, setAllFaculty] = useState([])
    const [first_name, setFirst_name] = useState("")
    const [last_name, setLast_name] = useState("")
    const [other_name, setOther_name] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [conPassword, setConPassword] = useState("")
    const [dob, setDob] = useState("")
    const [mobile, setMobile] = useState("")
    const [faculty, setFaculty] = useState("")
    const [depart, setDepart] = useState("")
    const [level, setLevel] = useState("")
    const [semester, setSemester] = useState("")
    const [session, setSession] = useState("")
    const [add, setAdd] = useState("")
    useEffect(()=>{
        getFaculty()
    },[])
    const getFaculty = async() =>{
        const Faculty = await axios.get("https://schoolmanagement-tabc.onrender.com/api/faculty")
        if(Faculty){
            setAllFaculty(Faculty.data)
            
        }
    }

    console.log({level})
  
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
                <Typography gutterBottom className='welcomeText'> Please fill in the details below to register for admission.</Typography>
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

                {/* Date of Birth */}
                <label
                htmFor='dob'
                className='label'>
                    DOB
                </label>
                <input type='date' className='inputBox' 
                value={dob} 
                onChange={(e)=>setDob(e.target.value)}/>

                {/* faculty */}
                <label
                    htmlFor='faculty'
                    className='label'>
                    Faculty
                </label>
                    <select
                    className='inputBox'
                    required
                    value={faculty}
                    onChange={(e)=>setFaculty(e.target.value)}
                    >
                        <option>
                            Select a faculty
                        </option>
                        {
                            allFaculty.map((itm, indx)=>(
                                <option key={indx} value={itm.faculty}>{itm.faculty}</option>
                            ))
                        }
                        
                    </select>

                {/* department */}
                <label
                    htmlFor='department'
                    className='label'>
                    Department
                </label>
                <select
                    className='inputBox'
                    required
                    value={depart}
                    onChange={(e)=>setDepart(e.target.value)}
                    >
                        <option>Selet a Department</option>
                        {
                            allFaculty.filter((itm)=>itm.faculty === faculty)?.map((itm, index)=>(
                                itm.depart?.map((itm, indx)=>(
                                    
                                    <option key={indx} value={itm.name}>{itm.name}</option>
                                ))
                            ))
                        }
                        
                    </select>


                {/* level */}
                <label
                    htmlFor='level'
                    className='label'>
                    Level
                </label>
                <select
                    className='inputBox'
                    value={level}
                    onChange={(e)=>setLevel(e.target.value)}
                    required>
                    <option value="100"> 100 Level</option>
                    <option value="200"> 200 Level</option>
                    <option value="300"> 300 Level</option>
                    <option value="400"> 400 Level</option>
                    <option value="100"> 500 Level</option>
                    <option value="100"> 600 Level</option>
                    </select>

                {/* semester */}
                <label
                    htmlFor='semester'
                    className='label'>
                    Semester
                </label>
                <select
                className='inputBox'
                value={semester}
                onChange={(e)=>setSemester(e.target.value)}>
                    <option value="First Semester"> First Semester </option>
                    <option value="First Semester"> Second Semester</option>
                </select>

                {/* session */}
                <label
                    htmlFor='session'
                    className='label'>
                    Session
                </label>
                <select
                className='inputBox'
                value={session}
                onChange={(e)=>setSession(e.target.value)}>
                    <option value="2022/2023"> 2022/2023 </option>
                    <option value="2023/2024"> 2023/2024 </option>
                </select>

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
                        <Button className='registerLinkBtn' variant='contained' color="primary"> Register </Button>
                    </div>
            </div>
            </div>
    </div>
    </div>
  )
}

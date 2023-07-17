import React, { useEffect, useState } from 'react'
import "./SRegister.css"
import eLearning from "../../images/eLearning.png"
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
<<<<<<< HEAD:src/Auth/SRegister.jsx

    console.log({level})
=======
    const handleSubmit = async(e) =>{
        e.preventDefault()
        const data = await axios.post("https://schoolmanagement-tabc.onrender.com/api/auth/register", {first_name, last_name, other_name,email, password, conPassword, dob, mobile, faculty, depart, level, semester, session, add} )
        console.log(data)
    }
>>>>>>> 177e1c6e74fa0a32f75e5e7c5889faa6f4a3879e:src/Auth/Student/SRegister.jsx
  
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
                {/* <form onSubmit={handleSubmit()}>
                    jfmfd
                    mfkj 
                    fjkk
                    //firts case
                </form> */}
                <label
                    htmlFor='first_Name'
                    className='label'>
                    First Name
                </label>
                    <input 
                        className='inputBox' 
                        type="text"
                        name="firstName"
                        value={first_name}
                        onChange={(e)=>setFirst_name(e.target.value)}
                        placeholder='Enter your firstName' 
                        required />  

                {/* surname */}
                <label
                    htmlFor='last_name'
                    className='label'>
                    Surname
                </label>
                    <input 
                        className='inputBox' 
                        type="text"
                        name="surname"
                        placeholder='Enter your surname' 
                        required
                        value={last_name}
                        onChange={(e)=>setLast_name(e.target.value)}
                        />

                {/* othername */}
                <label
                    htmlFor='other_name'
                    className='label'>
                    Other name(s)
                </label>
                    <input 
                        className='inputBox' 
                        type="text"
                        name="otherName"
                        placeholder='Enter your other name (s)' 
                        required
                        value={other_name}
                        onChange={(e)=>setOther_name(e.target.value)}
                        />

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
                        required 
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                        /> 
                {/* date of birth */}
                <label
                    htmlFor='dob'
                    className='label'>
                    Date of birth
                </label>
                    <input 
                        className='inputBox'
                        id="datePicker" 
                        type="date"
                        name="dob"
                        placeholder='Enter Your date of birth, e.g 20/10/2023'
                        required 
                        value={dob}
                        onChange={(e)=>setDob(e.target.value)}
                        /> 
                {/* Home address */}
                <label
                    htmlFor='add'
                    className='label'>
                    Home Address
                </label>
                    <textarea 
                        className='inputBox'
                        name="add"
                        placeholder='Enter Your Home address'
                        required 
                        value={add}
                        onChange={(e)=>setAdd(e.target.value)}
                        /> 
                {/* Phone number */}
                <label
                    htmlFor='mobile'
                    className='label'>
                    Phone Number
                </label>
                    <input 
                         className='inputBox' 
                         type="text"
                         name="phoneNum"
                         placeholder='07031128163'
                         required 
                         value={mobile}
                        onChange={(e)=>setMobile(e.target.value)}
                         />

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
                    htmlFor='depart'
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
<<<<<<< HEAD:src/Auth/SRegister.jsx
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
=======
                    required
                    value={level}
                    onChange={(e)=>setLevel(e.target.value)}
                    >
                        <option value="100">
                            100
                        </option>
                        <option value="200">
                            200
                        </option>
                        <option value="300">
                            300
                        </option>
                        <option value="400">
                            400
                        </option>
                        <option value="500">
                            500
                        </option>
                        <option value="600">
                            600
                        </option>
                    </select>

>>>>>>> 177e1c6e74fa0a32f75e5e7c5889faa6f4a3879e:src/Auth/Student/SRegister.jsx

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
                        required 
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}
                        />

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
                        required 
                        value={conPassword}
                        onChange={(e)=>setConPassword(e.target.value)}/>

                 {/* semester */}
                 <label
                    htmlFor='semester'
                    className='label'>
                    Semester
                </label>
                <select
                    className='inputBox'
                    required
                    value={semester}
                    onChange={(e)=>setSemester(e.target.value)}
                    >
                        <option value="first">
                            first
                        </option>
                        <option value="second">
                            second
                        </option>
                        
                    </select>
                     {/* level */}
                <label
                    htmlFor='level'
                    className='label'>
                    Session
                </label>
                <select
                    className='inputBox'
                    required
                    value={session}
                    onChange={(e)=>setSession(e.target.value)}
                    >
                        <option value="2023/2024">
                            2023/2024
                        </option>
                      
                </select>

            <div>
                    <div className="submitBtn">
<<<<<<< HEAD:src/Auth/SRegister.jsx
                        <Button className='registerLinkBtn' variant='contained' color="primary"> Register </Button>
=======
                        <Button className='submit' variant='contained' color="primary" onClick={handleSubmit}> Register </Button>
>>>>>>> 177e1c6e74fa0a32f75e5e7c5889faa6f4a3879e:src/Auth/Student/SRegister.jsx
                    </div>
            </div>
            </div>
    </div>
    </div>
  )
}
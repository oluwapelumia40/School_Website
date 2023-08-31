import React, { useState } from 'react'
import './Registration_Page.css'

import { Email, Person} from '@material-ui/icons';
import { Password } from '@mui/icons-material';

export const Registration_Page = () => {

    const [first_name, setFirst_name] = useState("")
    const [surname, setSurname] = useState("")
    const [other_name, setOther_name] = useState("")
    const [mobile, setMobile] = useState("")
    const [gender, setGender] = useState("")
    const [dob, setDob] = useState("")
    const [height, setHeight] = useState("")
    const [state, setState] = useState("")
    const [address, setAddress] = useState("")
    const [faculty, setFaculty] = useState("")
    const [department, setDepartment] = useState("")
    const [session, setSession] = useState("")
    const [program, setProgram] = useState("")
    const [level, setLevel] = useState("")
    const [semester, setSemester] = useState("")
    const [qualification, setQualification] = useState("")
    const [olevel, setOlevel] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

  return (

    <div className="body">
      <div className="main-container">

        <div className="header-text">
          <span className='reg-text'>
            Registration
          </span>
        <div className="underline"></div>
         <br/><br/>
          <span className='per-details'>
          Personal Details
          </span>
        </div>

      <div className="form-container">
        <form action="">
          <div className="field">

          <div className="input-field">
              <label htmlFor="last_name">Surname</label>
                <input type="text" 
                  id="last_name"
                    name="surname"
                 placeholder='Enter your surname'
                value={surname} 
              onChange={(e)=>setSurname(e.target.value)}
              required/>
            </div>

            <div className="input-field">
              <label htmlFor="first_name">First Name</label>
                <input type="text" 
                  id="first_name"
                    name="first_name"
                 placeholder='Enter your firstname'
                value={first_name} 
              onChange={(e)=>setFirst_name(e.target.value)}
              required/>
            </div>

            <div className="input-field">
              <label htmlFor="other_name">Other Name(s)</label>
                <input type="text" 
                  id="other_name"
                    name="other_name"
                 placeholder='Enter your other name(s)'
                value={other_name} 
              onChange={(e)=>setOther_name(e.target.value)}
              required/>
            </div>

            <div className="input-field">
              <label htmlFor="mobile">Mobile</label>
                <input type="number" 
                  id="mobile"
                    name="mobile"
                 placeholder='07031128086'
                value={mobile} 
              onChange={(e)=>setMobile(e.target.value)}
              required/>
            </div>

            <div className="input-field">
              <label htmlFor='gender'>Gender</label>
                  <select 
                  value={gender}
                  onChange={(e)=>setGender(e.target.value)}
                  required>
                    <option value="" disabled selected>Select gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="others">Others</option>
                  </select>
            </div>

            <div className="input-field">
              <label htmlFor="Mobile">Date of Birth</label>
                <input type="date" 
                  id="dob"
                    name="dob"
                value={dob} 
              onChange={(e)=>setDob(e.target.value)}
              required/>
            </div>

            <div className="input-field">
              <label htmlFor="height">Height</label>
                <input type="number" 
                  id="height"
                    name="height"
                 placeholder='5.6'
                value={height} 
              onChange={(e)=>setHeight(e.target.value)}
              required/>
            </div>

            <div className="input-field">
              <label htmlFor='state'>State of Origin</label>
                  <select 
                  value={state}
                  onChange={(e)=>setState(e.target.value)}
                  required>
                    <option value="" disabled selected>State of Origin</option>
                    <option value="lagos">Lagos</option>
                    <option value="oyo">Oyo</option>
                    <option value="ogun">Ogun</option>
                    <option value="osun">Osun</option>
                    <option value="ondo">Ondo</option>
                    <option value="ekiti">Ekiti</option>
                    <option value="abuja">Abuja</option>
                    <option value="kwara">Kwara</option>
                    <option value="delta">Delta</option>
                  </select>
            </div>

            <div className="input-field">
              <label htmlFor="address">Home address</label>
                <textarea 
                  id="address"
                    name="address"
                 placeholder='address'
                value={address} 
              onChange={(e)=>setAddress(e.target.value)}
              required/>
            </div>

            <div className="program-details">
              <span className='program'>
                Program Details
              </span> 
            </div>

            <div className="input-field">
              <label htmlFor='faculty'>Faculty</label>
                  <select 
                  value={faculty}
                  onChange={(e)=>setFaculty(e.target.value)}
                  required>
                    <option value="" disabled selected>Select faculty</option>
                  </select>
            </div>

            <div className="input-field">
              <label htmlFor='department'>department</label>
                  <select 
                  value={department}
                  onChange={(e)=>setDepartment(e.target.value)}
                  required>
                    <option value="" disabled selected>Select department</option>
                  </select>
            </div>

            <div className="input-field">
              <label htmlFor='session'>Session</label>
                  <select 
                  value={session}
                  onChange={(e)=>setSession(e.target.value)}
                  required>
                    <option value="" disabled selected>Select session</option>
                    <option value="2022/2023"> 2022/2023 </option>
                    <option value="2023/2024"> 2022/2023 </option>
                  </select>
            </div>

            <div className="input-field">
              <label htmlFor='program'>Program</label>
                  <select 
                  value={program}
                  onChange={(e)=>setProgram(e.target.value)}
                  required>
                    <option value="" disabled selected>Select program</option>
                    <option value="lodlc"> LODLC </option>
                    <option value="fulltime"> Fulltime </option>
                  </select>
            </div>

            <div className="input-field">
              <label htmlFor='level'>Level</label>
                  <select 
                  value={level}
                  onChange={(e)=>setLevel(e.target.value)}
                  required>
                    <option value="" disabled selected>Select level</option>
                    <option value="100"> LODLC </option>
                    <option value="200"> Fulltime </option>
                    <option value="200"> Fulltime </option>
                  </select>
            </div>

            <div className="input-field">
              <label htmlFor='semester'>Semester</label>
                  <select 
                  value={semester}
                  onChange={(e)=>setSemester(e.target.value)}
                  required>
                    <option value="" disabled selected>Select semester</option>
                    <option value="first semester"> First semester </option>
                    <option value="second semester"> Second semester </option>
                  </select>
            </div>

            <div className="program-details">
              <span className='program'>
                Qualification Details
              </span>
            </div>

            <div className="input-field">
               <select 
                  value={qualification}
                  onChange={(e)=>setQualification(e.target.value)}
                  required>
                    <option value="" disabled selected>Select level</option>
                    <option value="ssce"> SSCE </option>
                    <option value="ond"> OND </option>
                    <option value="hnd"> HND </option>
                  </select>
            </div>

            <div className="input-file">
              <label htmlFor="olevel"> Highest Qualification</label>
              <input type="file" 
                  id="olevel-result"
                    name="olevel-result"
                value={olevel} 
              onChange={(e)=>setOlevel(e.target.value)}
              required/>
            </div>

            <button className='submitBtn'>Submit</button>

          </div>
        </form>
      </div>
      </div>
    </div>

  )
}

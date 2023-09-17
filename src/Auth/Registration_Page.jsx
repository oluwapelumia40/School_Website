import React, { useState } from 'react'
import './Registration_Page.css'



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
    const [olevel, setOlevel] = useState("")
    const [diploma, setDiploma] = useState("")
    const [qualification, setQualification] = useState("")


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
                 spellCheck="true"
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
                 spellCheck="true"
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
                 spellCheck="true"
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
              spellCheck="true"
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
                    <option value="fulltime"> Full-time </option>
                    <option value="partime"> Part-time </option>
                  </select>
            </div>

            <div className="input-field">
              <label htmlFor='level'>Level</label>
                  <select 
                  value={level}
                  onChange={(e)=>setLevel(e.target.value)}
                  required>
                    <option value="" disabled selected>Select level</option>
                    <option value="100"> 100 </option>
                    <option value="200"> 200 </option>
                    <option value="300"> 300 </option>
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
              <details className='details-style'> you are to upload your certificate according to the options that you select, you are also to upload in Jpeg/PDF at (20KB) per details.</details>
            </div>

            <div className="input-field">
               <select 
                  value={olevel}
                  onChange={(e)=>setOlevel(e.target.value)}
                  required>
                    <option value="" disabled selected>O'Level</option>
                    <option value="waec"> WAEC </option>
                    <option value="neco"> NECO </option>
                    <option value="nabteb"> NABTEB </option>
                  </select>
            </div>
            <div className="input-field">
               <select 
                  value={diploma}
                  onChange={(e)=>setDiploma(e.target.value)}
                  required>
                    <option value="" disabled selected>Diploma</option>
                    <option value="ond"> OND </option>
                    <option value="nce"> NCE </option>
                  </select>
            </div>
            <div className="input-field">
               <select 
                  value={qualification}
                  onChange={(e)=>setQualification(e.target.value)}
                  required>
                    <option value="" disabled selected> Bachalor/Higher Diploma</option>
                    <option value="bsc"> Bachalor Degree </option>
                    <option value="HND"> HND </option>
                  </select>
            </div>

          <div className="input-file-grid">
            <div className="input-file file-space">
              <label htmlFor="olevel"> </label>
              <input type="file" 
                  id="olevel-result"
                    name="olevel-result"
                    accept='.jpg .jpeg .pdf'
              required/>
            </div>

            <div className="input-file">
              <label htmlFor="olevel"> </label>
              <input type="file" 
                  id="olevel-result"
                    name="olevel-result"
                    accept='.jpg .jpeg .pdf'
              required/>
            </div>

            <div className="input-file">
              <label htmlFor="olevel"> </label>
              <input type="file" 
                  id="olevel-result"
                    name="olevel-result"
                    accept='.jpg .jpeg .pdf'
              required/>
            </div>
          </div>

            <button className='submitBtn'>Submit</button>

          </div>
        </form>
      </div>
      </div>
    </div>

  )
}

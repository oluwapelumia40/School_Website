import React, { useState } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import "./TeacherRegister.css"
import { Button } from '@material-ui/core'
import { Link } from 'react-router-dom'

function TeacherRegister() {
  const [firstname, setFirstname] = useState("")
  const [othername, setOthername] = useState("")
  const [surname, setSurname] = useState("")
  const [userId, setUserId] = useState("")
  const [email, setEmail] = useState("")
  const [number, setNumber] = useState("")
  const [faculty, setFaculty] = useState("")
  const [department, setDepartment] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  
  const registerImage = "https://img.freepik.com/free-photo/front-view-young-beautiful-lady-white-t-shirt-black-jeans-coat-holding-green-book-white_140725-18660.jpg?size=626&ext=jpg&ga=GA1.2.879595502.1686989991&semt=ais";
  
  return (
    <div>
        <div className="teacherBody">
        <h1> ONLINE TEACHING MANAGEMENT SYSTEM</h1>
            <div className="registerPage">
                <div className="leftRegisterImage">
                  <LazyLoadImage className="teacherRegisterImage" 
                    src={registerImage}
                  />
                </div>
                <div className="rightRegisterPage">
                <Link to="/teacherlogin" className="teacherLoginLink"> Login </Link><br></br><br></br>
                  
                <h1 className="registrationText"> REGISTRATION </h1>
                
                  <form onSubmit={""}>
                    {/* First Name */}
                  <label
                      htmlFor="firstname"
                      className="label"> First Name
                  </label>
                    <input
                      type="text"
                      name="firstname"
                      className="input_Box"
                      placeholder="Enter your firstName"
                      value={firstname}
                      onChange={(e)=>setFirstname(e.target.value)}
                    />

                    {/* Surname */}
                  <label
                      htmlFor="surname"
                      className="label"> Surname
                  </label>
                    <input
                      type="text"
                      name="surname"
                      className="input_Box"
                      placeholder="Enter your surname"
                      value={surname}
                      onChange={(e)=>setSurname(e.target.value)}
                    />

                    {/* Other Name */}
                  <label
                      htmlFor="othername"
                      className="label"> Other name(s)
                  </label>
                    <input
                      type="text"
                      name="othername"
                      className="input_Box"
                      placeholder="Enter your other name (s)"
                      value={othername}
                      onChange={(e)=>setOthername(e.target.value)}
                    />

                    {/* Email */}
                  <label
                      htmlFor="email"
                      className="label"> Email
                  </label>
                    <input
                      type="email"
                      name="email"
                      className="input_Box"
                      placeholder="Enter your Email address, e.g example@gmail.com"
                      value={email}
                      onChange={(e)=>setEmail(e.target.value)}
                    />

                    {/* number */}
                  <label
                      htmlFor="number"
                      className="label"> Phone Number
                  </label>
                    <input
                      type="text"
                      name="phoneNumber"
                      className="input_Box"
                      placeholder="07031128163"
                      value={number}
                      onChange={(e)=>setNumber(e.target.value)}
                    />

                    {/* Faculty */}
                  <label
                      htmlFor="faculty"
                      className="label"> Faculty
                  </label>
                    <select
                      className="input_Boxes"
                      name="faculty"
                      required
                      value={faculty}
                      onChange={(e)=>setFaculty(e.target.value)}>
                      <option> 
                        Select a faculty
                      </option>
                    </select>

                    {/* Department */}
                    <label
                      htmlFor="department"
                      className="label"> Department
                    </label>
                      <select
                        className="input_Boxes"
                        name="department"
                        required
                        value={department}
                        onChange={(e)=>setDepartment(e.target.value)}>
                      <option> 
                          Select a department
                        </option>
                      </select>

                    {/* password */}
                      <label
                        htmlFor='password'
                        className='label'>
                        Password
                      </label>
                    <input 
                        className='input_Box' 
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
                        className='input_Box' 
                        type="password"
                        name="confirmPassword"
                        placeholder='Confirm your password'
                        required 
                        value={confirmPassword}
                        onChange={(e)=>setConfirmPassword(e.target.value)}
                      />
                    <Button className='teacherRegisterBtn' variant='contained' color="primary"> Register </Button>
                  </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TeacherRegister
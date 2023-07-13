import { Button } from '@material-ui/core'
import React from 'react'
import './TeacherLogin.css'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { Link } from 'react-router-dom'

export default function TeacherLogin() {
  return (
    <div className='body'>
        <div className="wrapper">
            <div className="leftBox">
            <LazyLoadImage className='loginImage' src={'https://img.freepik.com/free-photo/front-view-young-beautiful-lady-white-t-shirt-black-jeans-coat-holding-green-book-white_140725-18660.jpg?size=626&ext=jpg&ga=GA1.2.879595502.1686989991&semt=ais'}/>
            </div>
            <div className="loginPage">
                <h1> LOGIN</h1>
                <div className="form-group">
                    <label
                        htmlFor='userId'
                        className='label'>
                        User Id
                    </label>
                    <input 
                        className='inputBox' 
                        type="text"
                        name="matricNo"
                        placeholder='2014070501048'
                        /> 
                </div>
                <div className="form-group">
                    <label
                        htmlFor='password'
                        className='label'>
                        Password
                    </label>
                    <input 
                        className='inputBox' 
                        type="password"
                        name="matricNo"
                        placeholder='2014070501048'
                        /> 
                </div>
                <Button className='submit' variant='contained' color="primary"> Login</Button>
                <section>
                <Link to="#" className='forgetPassword'> Forget Password?</Link>
                <Link to="#" className='register'> Register</Link>
                </section>
            </div>
        </div>
    </div>
  )
}

import React, { useState } from 'react'
import './SLogin.css';
import eLearning from "../../images/giphy.gif"
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { AppBar, Button, CssBaseline, Grid, Toolbar, Typography } from '@material-ui/core';
import {Stack} from "@mui/material"
import { Link, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';

export default function SVerify() {
  const params = useParams()
  const [notValid, setNotValid] = useState(false)
  useEffect(()=>{
    handleVerify()
  }, [])
  const handleVerify = async() =>{
    try {
      const {data} = await axios.get(`https://schoolmanagement-tabc.onrender.com/api/auth/student/${params.id}/verify/${params.token}`)
      if(data){
        setNotValid(true)
        window.location.replace("/login")
      }
    } catch (error) {
      console.log(error)
    }
  
  }
  return (
    <div>
      {
        notValid ?
          <>
            <CssBaseline/>
            <AppBar position='relative'>
                <Toolbar>
                    <Typography variant='h5' align='center' className='headerText'>
                       STUDENT'S E-LEARNING PORTAL
                    </Typography>
                </Toolbar>
            </AppBar>
            <Stack direction="column" alignItems="center"  justifyContent="center" sx={{backgroundColor:"#fff"}}>
                <img src={eLearning} alt="verify"mt={4} style={{width: "500px", height:"400px"}}/>
                <Typography variant="h5" component="h5"mt={4}>Your Account has being verified</Typography>
                <Typography variant="p" component="p"mt={2}>Redirecting you to Log In page</Typography>
            </Stack>
          </>
          :
          <p>NOT Found......</p>
      }
          
            
    </div>
  )
}

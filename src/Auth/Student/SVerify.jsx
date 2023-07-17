import React from 'react'
import './SLogin.css';
import eLearning from "../../images/giphy.gif"
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { AppBar, Button, CssBaseline, Grid, Toolbar, Typography } from '@material-ui/core';
import {Stack} from "@mui/material"
import { Link } from 'react-router-dom';

export default function SVerify() {
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
            <Stack direction="column" alignItems="center"  justifyContent="center" sx={{backgroundColor:"#fff"}}>
                <img src={eLearning} alt="verify"mt={4} style={{width: "500px", height:"400px"}}/>
                <Typography variant="h5" component="h5"mt={4}>Your Account has being verified</Typography>
                <Typography variant="p" component="p"mt={2}>Redirecting you to Log In page</Typography>
            </Stack>
            
    </div>
  )
}

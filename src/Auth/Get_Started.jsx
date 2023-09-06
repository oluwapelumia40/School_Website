import React from 'react'
import { Link } from 'react-router-dom'

import './Get_Started.css'

export default function Get_Started() {
  return (
    <div>
      <div className="get-started-body">
        <span className='get-started-style'>
            <Link to="/student/login" className='link-style'> Get Started</Link>
        </span>
        </div>
    </div>
  )
}

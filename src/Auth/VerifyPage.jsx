import React from 'react'
import { Link } from 'react-router-dom'
import "./VerifyPage.css"

export default function VerifyPage() {
  return (
    <div>
      <div className="verify-page-body">
        <div className="verify-section">
        <div className="verify-page-text">
            <span className='verify-text'> It's great to have you aboard. </span>
        </div>
        <Link to="#" className='verify-link'> Verify </Link>
      </div>

      <div className="footer">
        <span className='footer-text'> ©2023 Project, Inc. All rights reserved. </span>
      </div>
        </div>

    </div>
  )
}

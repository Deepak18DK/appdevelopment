import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
      <div className="footer" style={{position:"webkit-sticky"}}>
       Copyright 2023 @Finmate 
        <div className="footer-r">
         <Link to='/privacypolicy'>Privacy Policy</Link>
         <Link to='/terms'>Terms &amp; Conditions</Link>
         <Link to ='/FAQ'>FAQ</Link>
         <Link>Feedback</Link>
        </div>
      </div>
    </div>
  )
}

export default Footer
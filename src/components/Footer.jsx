import React from 'react';
import '../stylesheet/Footer.css';
import { Link } from 'react-router-dom';

import { FaLinkedin , FaGithub , FaFacebook , FaMedium , FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import ScrollToTop from "react-scroll-to-top";
import { color } from 'framer-motion';

function Footer() {
const handleclick = () =>{
  window.screenTop(0,0)
}
  return (
    <div className='footer  p-5 d-flex gap-md-3 gap-5 justify-content-between align-items-center
    flex-md-row flex-column'>
      <div className="footerleft d-flex flex-row gap-md-5 gap-4">
      
      <Link to="https://www.linkedin.com/in/utpanna-pradhan-/" className='footer_link ' target='_blank'>
      <FaLinkedin size={24} className='icon_' />
      </Link>

      <Link to="https://github.com/utpanna-pradhan" className='footer_link '  target='_blank'>
      <FaGithub size={24} className='icon_' />
      </Link>
      

      <Link to="https://www.linkedin.com/in/utpanna-pradhan-/" className='footer_link ' target='_blank'> 
      <FaMedium size={24} className='icon_' />
      </Link>
      

      <Link to="https://twitter.com/UtpannaPradhan" className='footer_link ' target='_blank'> 
      <FaSquareXTwitter size={24} className='icon_'/>
      </Link>
     

      <Link to="https://www.instagram.com/utpanna_pradhan_/" className='footer_link ' target='_blank'>
      <FaInstagramSquare size={24} className='icon_' />
      </Link>
      

      <Link to="https://www.facebook.com/utpanna.pradhan" className='footer_link ' target='_blank'>
      <FaFacebook size={24} className='icon_'  />
      </Link>
      

      </div>
      <div className="footerright">
      <ScrollToTop  smooth className='topbtn' />              
    
        
        
       
      </div>
    </div>
  )
}

export default Footer

import React from 'react';
import '../stylesheet/Footer.css';
import { Link } from 'react-router-dom';

import { FaLinkedin , FaGithub , FaFacebook , FaMedium , FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import ScrollToTop from "react-scroll-to-top";

function Footer() {
const handleclick = () =>{
  window.screenTop(0,0)
}
  return (
    <div className='footer bg-dark text-white p-5 d-flex gap-md-3 gap-5 justify-content-between align-items-center
    flex-md-row flex-column'>
      <div className="footerleft d-flex flex-row gap-md-5 gap-4">
      
      <Link to="https://www.linkedin.com/in/utpanna-pradhan-/" className='text-white ' target='_blank'>
      <FaLinkedin size={24} className='icon_' />
      </Link>

      <Link to="https://github.com/utpanna-pradhan" className='text-white '  target='_blank'>
      <FaGithub size={24} className='icon_' />
      </Link>
      

      <Link to="https://www.linkedin.com/in/utpanna-pradhan-/" className='text-white ' target='_blank'> 
      <FaMedium size={24} className='icon_' />
      </Link>
      

      <Link to="https://twitter.com/UtpannaPradhan" className='text-white ' target='_blank'> 
      <FaSquareXTwitter size={24} className='icon_'/>
      </Link>
     

      <Link to="https://www.instagram.com/utpanna_pradhan_/" className='text-white ' target='_blank'>
      <FaInstagramSquare size={24} className='icon_' />
      </Link>
      

      <Link to="https://www.facebook.com/utpanna.pradhan" className='text-white ' target='_blank'>
      <FaFacebook size={24} className='icon_'  />
      </Link>
      

      </div>
      <div className="footerright">
      <ScrollToTop smooth  viewBox="0 0 256 256"/>
      {/* <Link to="/Home"> */}
      {/* <button className='fw-900' onClick={handleclick}>
            Back To Top
        </button> */}
      {/* </Link> */}
        
        
       
      </div>
    </div>
  )
}

export default Footer

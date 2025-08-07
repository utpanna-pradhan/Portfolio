import React from "react";
import "../stylesheet/Footer.css";
import { Link } from "react-router-dom";

import {
  FaLinkedin,
  FaGithub,
  FaFacebook,
  FaMedium,
  FaInstagramSquare,
} from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import ScrollToTop from "react-scroll-to-top";
// import { color } from 'framer-motion';

function Footer() {
  const handleclick = () => {
    window.screenTop(0, 0);
  };
  return (
    <div
      className="footer  p-5 d-flex gap-md-3 gap-5 justify-content-center justify-content-md-between 
    flex-md-row flex-column"
    >
      <div>
        <p className="mb-1">
          All rights reserved{" "}
          <em>
            {" "}
            <strong>@ {new Date().getFullYear()} Utpanna Pradhan.</strong>
          </em>
        </p>
        <small>
          Passionate developer crafting modern, user-friendly web experiences.
        </small>
      </div>
      <div className="footerleft d-flex flex-column  ">
        <div>
          <p>“Looking to collaborate? Get in touch" </p>
        </div>
        <div className="d-flex flex-row gap-3 justify-content-center justify-content-md-start">
          <Link
            to="https://www.linkedin.com/in/utpanna-pradhan-/"
            className="footer_link "
            target="_blank"
            aria-label="LinkedIn profile"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={24} className="icon_" />
          </Link>

          <Link
            to="https://github.com/utpanna-pradhan"
            className="footer_link "
            target="_blank"
            aria-label="Github profile"
            rel="noopener noreferrer"
          >
            <FaGithub size={24} className="icon_" />
          </Link>

          <Link
            to="https://medium.com/@utpanna828"
            className="footer_link "
            target="_blank"
            aria-label="Medium profile"
            rel="noopener noreferrer"
          >
            <FaMedium size={24} className="icon_" />
          </Link>

          <Link
            to="https://twitter.com/UtpannaPradhan"
            className="footer_link "
            target="_blank"
            aria-label="Twitter profile"
            rel="noopener noreferrer"
          >
            <FaSquareXTwitter size={24} className="icon_" />
          </Link>

          <Link
            to="https://www.instagram.com/utpanna_pradhan_/"
            className="footer_link "
            target="_blank"
            rel="noopener noreferrer"
            aria-label="instagram profile"
          >
            <FaInstagramSquare size={24} className="icon_" />
          </Link>

          <Link
            to="https://www.facebook.com/utpanna.pradhan"
            className="footer_link "
            target="_blank"
            rel="noopener noreferrer"
            aria-label="facebook profile"
          >
            <FaFacebook size={24} className="icon_" />
          </Link>
        </div>
      </div>
      <div className="d-flex flex-column fw gap-2 justify-content-center  justi">
        <Link to="/" className="foooter_pagelink">
          Home
        </Link>
        <Link to="/work" className="foooter_pagelink">
          Work
        </Link>
        <Link to="/blogs" className="foooter_pagelink">
          Blogs
        </Link>
        <Link to="/contact" className="foooter_pagelink">
          {" "}
          Contact{" "}
        </Link>
      </div>
      <div className="footerright">
        <ScrollToTop smooth className="topbtn" />
      </div>
    </div>
  );
}

export default Footer;

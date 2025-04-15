import React from "react";
import presentation from "../assets/presentation.png";
import blog2 from "../assets/Adobe Express - file.png";

import "../stylesheet/Blogs.css";
// import {motion} from "react"
import { motion } from "framer-motion";

function Blogs() {
  return (
    <>
      {/*-------------------------- blog1--------------------------------------- */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 40 }}
        transition={{ duration: 0.8 }}
      >
        <div className="card col-md-10 mx-auto">
          <div className="card-body d-flex">
            <a
              href="https://medium.com/@utpanna828/scroll-to-the-top-of-the-page-the-easy-way-in-react-js-b2c140a296d9"
              target="_blank"
            >
              <div className="img">
                <img src={presentation} alt="" className="blog1_img" />
              </div>
            </a>

            <div className="content ps-4 pe-4 ">
              <h5 className="pb-3">Scroll to the Top of the Page-Easy Way (in React.js)</h5>
              <p className="mb-0">Improves user experience (no more painful scrolling).</p>
              <p>   Makes navigation easier — especially long pages like blogs etc</p>
              {/* <ul>
                <li>Improves user experience (no more painful scrolling).</li>
                <li>Keeps your UI friendly .</li>
                <li>
                  Makes navigation easier — especially long pages like blogs etc
                </li>
              </ul> */}
              <a
                href="https://medium.com/@utpanna828/scroll-to-the-top-of-the-page-the-easy-way-in-react-js-b2c140a296d9"
                target="_blank"
              >
                <button type="button" class="btn btn-dark mt-2">
                  Read More
                </button>
              </a>
            </div>
          </div>
        </div>
      </motion.div>

      {/*-------------------------- blog2--------------------------------------- */}
      <br></br>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 40 }}
        transition={{ duration: 0.8 }}
      >
        <div className="card col-md-10 mx-auto">
          <div className="card-body d-flex">
            <a
              href="https://medium.com/@utpanna828/how-i-started-learning-frontend-development-1b120352a0ec"
              target="_blank"
            >
              <div className="img">
                <img src={blog2} alt="" className="blog1_img" />
              </div>
            </a>

            <div className="content ps-4 pe-4 ">
              <h5 className="pb-3">How I Started Learning Frontend Development</h5>
              <p className="mb-0">Learning One Thing at a Time.</p>
              <p>Making Small Goals</p>
             
              <a
                href="https://medium.com/@utpanna828/how-i-started-learning-frontend-development-1b120352a0ec"
                target="_blank"
              >
                <button type="button" class="btn btn-dark mt-2">
                  Read More
                </button>
              </a>
            </div>
          </div>
        </div>
      </motion.div>

 
    </>
  );
}

export default Blogs;

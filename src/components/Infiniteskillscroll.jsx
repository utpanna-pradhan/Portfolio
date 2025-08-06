import React from "react";
import { images } from "./scroll";
import "../stylesheet/Scroll.css";
import { motion } from "framer-motion";

function Infiniteskillscroll() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-center skills_heading">
          My Skills and Technologies
        </h2>
        <p className="text-center sub_Skill">
          Here are some of the skills and technologies I work with:
        </p>
          <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true, amount: 0.2 }}
                  >
                     <div className="outer mt-4">
          <div className="scroll-track">
            <div className="scroll-content">
              {[...images, ...images].map((image, index) => (
                <img
                  key={index}
                  src={image.src}
                  alt={image.name}
                  className="scroll_img"
                />
              ))}
            </div>
          </div>
        </div>


                  </motion.div>
       
      </motion.div>
    </>
  );
}

export default Infiniteskillscroll;

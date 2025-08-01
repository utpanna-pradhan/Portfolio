import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "../stylesheet/Contact.css";
import contactimg from "../assets/3d-female-character-holding-pencil.png";
import { motion } from "framer-motion";


function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_iu8dqxc",
        "template_5e7sp8n", // from EmailJS dashboard
        form.current,
        "DRxpDa0jBM7jywVLO" // from EmailJS dashboard
      )
      .then(
        (result) => {
          alert("✅ Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          alert("❌ Failed to send message. Try again later.");
          console.log(error.text);
        }
      );
  };

  return (
    <>
  <h1 className="contact_containerh1">
                Contact Me
              </h1>
      <div className="contact_container">
      
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.2 }}
      >
       
        <div className="row contact_sub_container">
          <div className="col-md-4">
            <form ref={form} onSubmit={sendEmail}>
              <input
                type="text"
                placeholder="Enter Your Name"
                name="name"
                required
              />
              <br />
              <br />
              <input
                type="email"
                placeholder="Enter Your Email"
                name="email"
                required
              />
              <br />
              <br />
              <textarea
                placeholder="Enter Your Message"
                name="message"
                required
              ></textarea>
              <br />
              <br />
              <button type="submit" className="sendmsg_Btn">
                Send Message
              </button>
            </form>
          </div>
          <div className="col-md-4 sofiafont">
            {/* <div className="right_contact_inner_img">
             
              
            </div> */}
            <div className="right_contact_top_content">
            
             <img src={contactimg} alt="" width={500} />
            </div>
          </div>
          
        </div>
      </motion.div>
    </div>
    </>
  
  );
}

export default Contact;

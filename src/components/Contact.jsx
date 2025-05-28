// import React from "react";
// import { motion } from "framer-motion";

// function Contact() {
//   return (
//     <div>
//       <motion.h1
//         className="work-title pb-0 mb-0"
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{
//           duration: 0.8,
//           ease: [0.16, 1, 0.3, 1],
//         }}
//       >
//         Get in touch
//       </motion.h1>
//       <p className="text-center text-gray-600"> I'd love to hear from you.</p>
//       <form className="w-50 mx-auto">
//           <div className="mb-3">
//           <label for="exampleInputText" className="form-label">
//            Your Name
//           </label>
//           <input
//             type="text"
//             className="form-control"
//             id="exampleInputText" placeholder="Enter Your Name"
//             aria-describedby="textHelp"
//           />
         
//         </div>
//         <div className="mb-3">
//           <label for="exampleInputEmail1" className="form-label">
//            Your Email address
//           </label>
//           <input
//             type="email"
//             className="form-control" placeholder="Enter Your Email"
//             id="exampleInputEmail1"
//             aria-describedby="emailHelp"
//           />
         
//         </div>
//         <div className="mb-3">
//           <label for="exampleInputPassword1" className="form-label">
//            Message
//           </label>
//           <textarea
//             className="form-control"
//             id="exampleInputTextarea1" placeholder="Enter Your Message..."
//           />
//         </div>
        
//         <button type="submit" className="btn btn-primary w-100">
//          Send Message <i className="fa-solid fa-paper-plane text-white"></i>
//         </button>
//       </form>
//     </div>
//   );
// }

// export default Contact;
import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      alert(data.message);
    } catch (error) {
      alert("Message sending failed.");
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" onChange={handleChange} placeholder="Your Name" required />
      <input type="email" name="email" onChange={handleChange} placeholder="Your Email" required />
      <textarea name="message" onChange={handleChange} placeholder="Your Message" required />
      <button type="submit">Send Message</button>
    </form>
  );
}

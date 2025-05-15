import React from "react";
import presentation from "../assets/presentation.png";
import blog2 from "../assets/Adobe Express - file.png";

import "../stylesheet/Blogs.css";
import { motion } from "framer-motion";

const blogData = [
  {
    id: 1,
    image: blog2,
    title: "How I Started Learning Frontend Development",
    description: ["Learning One Thing at a Time.", "Making Small Goals"],
    link: "https://medium.com/@utpanna828/how-i-started-learning-frontend-development-1b120352a0ec",
  },
  {
    id: 2,
    image: presentation,
    title: "Scroll to the Top of the Page-Easy Way (in React.js)",
    description: [
      "Improves user experience (no more painful scrolling).",
      "Makes navigation easier — especially long pages like blogs etc",
    ],
    link: "https://medium.com/@utpanna828/scroll-to-the-top-of-the-page-the-easy-way-in-react-js-b2c140a296d9",
  },
  {
    id: 3,
    image: blog2,
    title: "How I Started Learning Frontend Development",
    description: ["Learning One Thing at a Time.", "Making Small Goals"],
    link: "https://medium.com/@utpanna828/how-i-started-learning-frontend-development-1b120352a0ec",
  },
  {
    id: 3,
    image: blog2,
    title: "How I Started Learning Frontend Development",
    description: ["Learning One Thing at a Time.", "Making Small Goals"],
    link: "https://medium.com/@utpanna828/how-i-started-learning-frontend-development-1b120352a0ec",
  },
];

const Blogs = () => {
  return (
    <>
      {blogData.map((blog, index) => (
        <motion.div
          key={blog.id}
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: index * 0.2 }}
          className="mb-5"
        >
          <div className="card col-md-10 mx-auto shadow-sm blog-card">
            <div className="card-body d-flex align-items-center">
              <a href={blog.link} target="_blank" rel="noopener noreferrer">
                <motion.div whileHover={{ scale: 1.05 }} className="img">
                  <img src={blog.image} alt={blog.title} className="blog1_img rounded" />
                </motion.div>
              </a>

              <div className="content ps-4 pe-4">
                <h5 className="pb-3">{blog.title}</h5>
                {blog.description.map((desc, idx) => (
                  <p key={idx} className="mb-0">{desc}</p>
                ))}
                <a href={blog.link} target="_blank" rel="noopener noreferrer">
                  <motion.button
                    type="button"
                    className="btn btn-dark mt-3"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Read More
                  </motion.button>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </>
  );
};

export default Blogs;

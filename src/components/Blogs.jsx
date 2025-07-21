import React, { useState } from "react";
import blogimg from "../assets/Untitled design (2).png";
import "../stylesheet/Blogs.css";
import blogData from "./blogs.json";
import newblogData from "./latestblog.json";
import { motion } from "framer-motion";

const Blogs = () => {
  const [filteredBlogs, setFilterBlogs] = useState(blogData);
  const [activeCategory, setActiveCategory] = useState("All");

  function handleCategoryChange(category) {
    setActiveCategory(category);
    if (category === "All") {
      setFilterBlogs(blogData);
    } else {
      setFilterBlogs(blogData.filter((blog) => blog.category === category));
    }
  }
 
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
      <div className="container-fluid">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="blog_img">
            <img src={blogimg} alt="" />
          </div>
          </motion.div>
       
           <h1 className="blog-title">My Personal BLOG</h1>
          <p className="blog-desc">For Passionate People And Web Developer</p>
              <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="text-white  latest_heading">Latest Blogs</h2>
        </motion.div>
         
      

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          // whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          // viewport={{ once: true, amount: 0.2 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="latest_blog">
            <div className="latest_blog_left w-50 ">
              <div className="latest_blog_left_card">
                {newblogData.map((blog) => (
                  <div key={blog.id} className="blog_left_Card">
                    <img
                      src={blog.thumbnail}
                      alt={blog.title}
                      className="img-fluid latest_blog_left_thumbnail"
                    />
                    <div className="latest_blog_left_card_main">
                      <h4>{blog.title}</h4>
                      <p>{blog.description.slice(0, 150)}...</p>

                      <div className="mt-auto">
                        <a
                          href={blog.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <button
                            className="readmore_btn"
                            style={{ width: "55%" }}
                          >
                            <div className="svg-wrapper-1">
                              <div className="svg-wrapper">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24"
                                  width="22"
                                  height="22"
                                >
                                  <path fill="none" d="M0 0h24v24H0z"></path>
                                  <path
                                    fill="currentColor"
                                    d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                                  ></path>
                                </svg>
                              </div>
                            </div>
                            <span>Read More</span>
                          </button>
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="latest_blog_content w-50">
              <div className="blog_side_title ">
                <h4 >✍️ About My Blogs</h4>
              </div>
              <div className="blog_side_desc pb-4">
                <p>
                  Welcome to my blog — a creative corner where I share what I
                  learn, build, and explore. These posts are crafted for
                  developers, learners, and curious minds who are passionate
                  about web development and continuous growth.
                </p>
              </div>
              <div className="blog_side_title">
                <h4 >🔧 Frontend Development</h4>
              </div>
              <div className="blog_side_desc pb-4">
                <p >
                  I write practical and simplified blogs on core frontend topics
                  including HTML, CSS, JavaScript, React, Git, and more. Whether
                  it's concepts, how-to guides, or handy tips — everything is
                  shared in a beginner-friendly way.
                </p>
              </div>

              <div className="blog_side_title">
                <h4 >🧠 Beginner-Friendly Guides</h4>
              </div>
              <div className="blog_side_desc pb-4">
                <p>
                  Whether you're just starting out or need a quick refresher,
                  you'll find practical explanations and use cases for core web
                  development topics.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        <br />
        <br />
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="blog_category">
            <button
              className={
                activeCategory === "All"
                  ? "button-28 active-button"
                  : "button-28"
              }
              onClick={() => handleCategoryChange("All")}
            >
              All
            </button>

            <button
              className={
                activeCategory === "learning"
                  ? "button-28 active-button"
                  : "button-28"
              }
              onClick={() => handleCategoryChange("learning")}
            >
              Learning
            </button>

            <button
              className={
                activeCategory === "question-answer"
                  ? "button-28 active-button"
                  : "button-28"
              }
              onClick={() => handleCategoryChange("question-answer")}
            >
              Question-Answer
            </button>
          </div>
        </motion.div>
        


   {/* <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.2 }}
        >
           <div className="parent_blog">
                 


          {filteredBlogs.map((blog) => (
     
          <div key={blog.id} className="blog_container">
              <img
                src={blog.thumbnail}
                alt={blog.title}
                className="img-fluid blog_thumbnail_img"
              />
              <div className="blog_card_content">
                <h4>{blog.title}</h4>
                <p>{blog.description.slice(0, 150)}...</p>
                <p className="blog_meta">{blog.date}</p>
                <div className="mt-auto readmore_wrapper">
                  <a href={blog.link} target="_blank" rel="noopener noreferrer">
                    <button className="readmore_btn  ">
                      <div className="svg-wrapper-1">
                        <div className="svg-wrapper">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="22"
                            height="22"
                          >
                            <path fill="none" d="M0 0h24v24H0z"></path>
                            <path
                              fill="currentColor"
                              d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                            ></path>
                          </svg>
                        </div>
                      </div>
                      <span>Read More</span>
                    </button>
                  </a>
                </div>
              </div>
            </div>

   
            
          ))}
        </div>
                    
        </motion.div> */}
        <div className="parent_blog">
  {filteredBlogs.map((blog) => (
    <motion.div
      key={blog.id}
      className="blog_container"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.3 }}
      whileHover={{ y: -8, boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)" }}
    >
      <img src={blog.thumbnail} alt={blog.title} className="img-fluid blog_thumbnail_img" />
      <div className="blog_card_content">
        <h4>{blog.title}</h4>
        <p>{blog.description.slice(0, 150)}...</p>
        <p className="blog_meta">{blog.date}</p>
        <div className="mt-auto readmore_wrapper">
          <a href={blog.link} target="_blank" rel="noopener noreferrer">
            <button className="readmore_btn">
              <div className="svg-wrapper-1">
                <div className="svg-wrapper"> 
                   <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="22"
                            height="22"
                          >
                            <path fill="none" d="M0 0h24v24H0z"></path>
                            <path
                              fill="currentColor"
                              d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                            ></path>
                          </svg>
                </div>
              </div>
              <span>Read More</span>
            </button>
          </a>
        </div>
      </div>
    </motion.div>
  ))}
</div>

       
      </div>
      </motion.div>
    </>
  );
};
export default Blogs;

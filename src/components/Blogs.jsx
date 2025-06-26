import React from "react";
// import blog6 from "/src/assets/blog6.png";

import blog6 from "/src/assets/Presentation.png";
import blog2 from "../assets/Adobe Express - file.png";
import blog3 from "../assets/create a coding image where a girl is intensly code and the image should be cartoon .jpeg";
import blog4 from "../assets/Website Creator-cuate.png";
import blog5 from "../assets/Source code-pana.png";
import blog7 from "../assets/blog3.webp";

import "../stylesheet/Blogs.css";
import { motion } from "framer-motion";

const blogData = [
     {
    id: 13,
    image: blog13,
    title: "Part 10: Accessibility & HTML Best Practices (Build for Everyone!)",
    description: ["In this third part of the series, I’ll cover:Some of the most essential HTML elements.."],
    link: "https://medium.com/@utpanna828/part-10-accessibility-html-best-practices-build-for-everyone-828ede004568",
  },
     {
    id: 12,
    image: blog12,
    title: "Part 9: Embeds & External Content",
    description: ["In this third part of the series, I’ll cover:Some of the most essential HTML elements.."],
    link: "https://medium.com/@utpanna828/part-9-embeds-external-content-b7e3173c416e",
  },
     {
    id: 11,
    image: blog11,
    title: "Part 8: Meta Tags & SEO Basics",
    description: ["In this third part of the series, I’ll cover:Some of the most essential HTML elements.."],
    link: "https://medium.com/@utpanna828/part-8-meta-tags-seo-basics-527caf664111",
  },
     {
    id: 10,
    image: blog10,
    title: "Part 7: Advanced Input Types & Attributes",
    description: ["In this third part of the series, I’ll cover:Some of the most essential HTML elements.."],
    link: "https://medium.com/@utpanna828/part-7-advanced-input-types-attributes-3d8f5a47f58b",
  },
     {
    id: 9,
    image: blog9,
    title: "Part 6: Semantic HTML — The Meaning Behind Structure",
    description: ["In this third part of the series, I’ll cover:Some of the most essential HTML elements.."],
    link: "https://medium.com/@utpanna828/part-6-semantic-html-the-meaning-behind-structure-0bfb9df1b780",
  },
     {
    id: 8,
    image: blog8,
    title: "Up Next — Part 5: More Useful HTML Tags (With Examples + Questions)",
    description: ["In this third part of the series, I’ll cover:Some of the most essential HTML elements.."],
    link: "https://medium.com/@utpanna828/up-next-part-5-more-useful-html-tags-with-examples-questions-22834ed63b92",
  },
     {
    id: 7,
    image: blog7,
    title: "Part 4 -HTML Elements( Dive into More HTML Tags)",
    description: ["In this third part of the series, I’ll cover:Some of the most essential HTML elements.."],
    link: "https://medium.com/@utpanna828/html-elements-part-4-dive-into-more-html-tags-7ca5111a4fac",
  },
   {
    id: 6,
    image: blog6,
    title: "HTML Elements Explained: Headings, Links, Images, Lists, Tables & Forms— A Beginner’s Guide(Part 3)",
    description: ["In this third part of the series, I’ll cover:Some of the most essential HTML elements.."],
    link: "https://medium.com/@utpanna828/html-elements-explained-headings-links-images-lists-tables-forms-a-beginners-guide-part-f3adfe273b29",
  },
      {
    id: 5,
    image: blog5,
    title: "How To Run Html file and Basic HTML Elements,Tags,Attributes — A Beginner’s Guide(Part 2)",
    description: ["In this second part of the series, I’ll cover:"],
    link: "https://medium.com/@utpanna828/how-to-run-html-file-and-basic-html-elements-tags-attributes-a-beginners-guide-part-2-1359e2e51495",
  },
    {
    id: 4,
    image: blog4,
    title: "Introduction to HTML: A Beginner’s Guide (Part 1)",
    description: ["When you open any website, behind the scenes, it all begins with HTML. Whether you’re browsing your favorite social media site or reading a blog like this one"],
    link: "https://medium.com/@utpanna828/introduction-to-html-a-beginners-guide-part-1-79afd94f314d",
  },
    {
    id: 3,
    image: blog3,
    title: "Everything You Need to Know About Web Development in 2025",
    description: ["Web development is the backbone of the internet. Whether you’re browsing your favorite online store, using a social media platform, or reading this article"],
    link: "https://medium.com/@utpanna828/%EF%B8%8F-everything-you-need-to-know-about-web-development-in-2025-51c14c65f212",
  },
    {
    id: 2,
    image: blog6,
    title: "Scroll to the Top of the Page-Easy Way (in React.js)",
    description: [
      "Improves user experience (no more painful scrolling).",
      "Makes navigation easier — especially long pages like blogs etc",
    ],
    link: "https://medium.com/@utpanna828/scroll-to-the-top-of-the-page-the-easy-way-in-react-js-b2c140a296d9",
  },
  {
    id: 1,
    image: blog2,
    title: "How I Started Learning Frontend Development",
    description: ["Learning One Thing at a Time.", "Making Small Goals"],
    link: "https://medium.com/@utpanna828/how-i-started-learning-frontend-development-1b120352a0ec",
  },




];

const Blogs = () => {
  return (
    <>
    <div>
       <motion.h1 
               className="blog-title"
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ 
                 duration: 0.8,
                 ease: [0.16, 1, 0.3, 1]
               }}
             >
              Blog Section
             </motion.h1>
    </div>
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
                <h4 className="pb-3">{blog.title}</h4>
                {blog.description.map((desc, idx) => (
                  <p key={idx} className="mb-0">{desc}</p>
                ))}
                <a href={blog.link} target="_blank" rel="noopener noreferrer">
                  <motion.button
                    type="button"
                    className="btn btn-primary mt-3"
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

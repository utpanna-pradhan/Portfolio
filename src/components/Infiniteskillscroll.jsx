import React from "react";
import { images } from "./scroll";
import "../stylesheet/Scroll.css";
import { motion } from "framer-motion";

function Infiniteskillscroll() {
  return (
    <div className="scroll-container">
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
                {/* {[...images, ...images].map((image, index) => (
                  <img
                    key={index}
                    src={image.src}
                    alt={image.name}
                    className="scroll_img"
                  />
                ))} */}

  {[...images, ...images].map((skill) => (
    
    <div
      key={skill.name + Math.random()}
      className={`skill-card  category-${skill.category.toLowerCase()} flex flex-column`}
      title={`${skill.name} (${skill.category})`}
    >
      <div>
     <img src={skill.src} width={45}  alt="JavaScript" className="skill-icon" />
    
      </div>
     
      <div>
         <span className="skill-name ">{skill.name}</span>
        </div>
     
    </div>
  ))}

              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
      <span className="code-text" style={{ top: "10%", left: "0%" }}>
        const x = 42;
      </span>
      <span className="code-text" style={{ top: "35%", left: "5%" }}>
        console.log('Hello');
      </span>
      <span className="code-text" style={{ top: "10%", left: "90%" }}>
        alert(x);
      </span>
       <span className="code-text" style={{ top: "20%", left: "80%" }}>
        npm init
      </span>
       <span className="code-text" style={{ top: "30%", left: "90%" }}>
        npm install express
      </span>
       <span className="code-text" style={{ top: "40%", left: "90%" }}>
        import React from 'react';
      </span>
      <span className="code-text" style={{ top: "11%", left: "15%" }}>
        <p>git add .</p>
      </span>
      <span className="code-text" style={{ top: "15%", left: "15%" }}>
        <p>git commit </p>
      </span>
      <span className="code-text" style={{ top: "19%", left: "15%" }}>
        <p>git pull</p>
      </span>
      <span className="code-text" style={{ top: "23%", left: "15%" }}>
        <p>git push</p>
      </span>
      <span className="code-text" style={{ top: "95%", left: "10%" }}>
        return &lt;div /&gt;;
      </span>
      <span className="code-text" style={{ top: "92%", left: "80%" }}>
        return &lt;div /&gt;;
      </span>
      <span className="code-text" style={{ top: "90%", left: "50%" }}>
        return &lt;div /&gt;;
      </span>
      <span className="code-text" style={{ top: "95%", left: "65%" }}>
        return &lt;div /&gt;;
      </span>
      <span className="code-text" style={{ top: "40%", left: "70%" }}>
        function App() {}
      </span>
      <span className="code-text" style={{ top: "5%", left: "25%" }}>
  export default App;
</span>
<span className="code-text" style={{ top: "12%", left: "65%" }}>
  const api = fetch();
</span>
<span className="code-text" style={{ top: "28%", left: "40%" }}>
  setState(value);
</span>
<span className="code-text" style={{ top: "55%", left: "15%" }}>
  const router = useRouter();
</span>
<span className="code-text" style={{ top: "60%", left: "85%" }}>
  console.error("Oops!");
</span>
<span className="code-text" style={{ top: "72%", left: "35%" }}>
  res.status(200);
</span>
<span className="code-text" style={{ top: "78%", left: "5%" }}>
  import axios from "axios";
</span>
<span className="code-text" style={{ top: "80%", left: "75%" }}>
  const token = getToken();
</span>
<span className="code-text" style={{ top: "85%", left: "45%" }}>
  document.querySelector("#app");
</span>
<span className="code-text" style={{ top: "3%", left: "55%" }}>
  const server = createServer();
</span>
<span className="code-text" style={{ top: "8%", left: "35%" }}>
  Math.random();
</span>
<span className="code-text" style={{ top: "18%", left: "75%" }}>
  const data = [];
</span>
<span className="code-text" style={{ top: "25%", left: "20%" }}>
  if (error) throw error;
</span>
<span className="code-text" style={{ top: "33%", left: "60%" }}>
  JSON.stringify(obj);
</span>
<span className="code-text" style={{ top: "47%", left: "50%" }}>
  window.addEventListener();
</span>
<span className="code-text" style={{ top: "65%", left: "25%" }}>
  const map = new Map();
</span>
<span className="code-text" style={{ top: "70%", left: "90%" }}>
  Promise.all([]);
</span>
<span className="code-text" style={{ top: "83%", left: "15%" }}>
  const date = new Date();
</span>
<span className="code-text" style={{ top: "88%", left: "55%" }}>
  localStorage.clear();
</span>
<span className="code-text" style={{ top: "93%", left: "25%" }}>
  sessionStorage.setItem();
</span>
<span className="code-text" style={{ top: "97%", left: "85%" }}>
  const user = "admin";
</span>
    </div>
  );
}

export default Infiniteskillscroll;

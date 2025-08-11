// import {Link} from 'react-router-dom';

import "../stylesheet/Home.css";
import RotatingText from "./TextAnimations/RotatingText/RotatingText.jsx";
import Particles from "./Backgrounds/Particles/Particles.jsx";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Infiniteskillscroll from "./Infiniteskillscroll.jsx";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage } from "@react-three/drei";
import { useGLTF } from "@react-three/drei";
import laptop from "../assets/laptop.glb";
import { FaGithub } from "react-icons/fa";
import { FaArrowCircleDown } from "react-icons/fa";

function Model(props) {
  const { scene } = useGLTF(laptop);
  return (
    <primitive
      object={scene}
      scale={[30, 30, 30]}
      position={[0, -1, 0]}
      {...props}
    />
  );
}

export default function Home() {
  return (
    <div className="main_home">
      {/* Fullscreen Particles */}
      <div className="particles_background">
        <Particles
          particleColors={["#ffffff", "#ffffff"]}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>

      {/* Page Content */}
  <svg className="topcurve" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill=" rgba(79, 139, 250, 0.3)" fill-opacity="1" d="M0,160L60,138.7C120,117,240,75,360,80C480,85,600,139,720,144C840,149,960,107,1080,101.3C1200,96,1320,128,1380,144L1440,160L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.2 }}
      >
       
        <div className="home_Content d-flex flex-column flex-md-row justify-content-center justify-content-md-between gap-4 align-items-center mt-4 mb-4">
          {/* Left */}
          <div className="home_left_img">
            <div className="h-[400px] w-full relative mt-28">
              <Canvas camera={{ position: [0, 1.2, 6], fov: 25 }}>
                <ambientLight />
                <Stage>
                  <Model />
                </Stage>
                <OrbitControls autoRotate enableZoom={false} />
              </Canvas>
            </div>
          </div>

          {/* Right */}
          <div className="home_right_content">
            <h1 className="myname">Utpanna Pradhan</h1>
            <RotatingText
              className="my_profession font-bold"
              texts={[
                "Frontend Developer",
                "Full-Stack Developer ",
                "Technical Writer",
                "Freelancer",
                "Learner",
              ]}
              mainClassName="px-2 sm:px-2 md:px-3 fs-1 overflow-hidden py-0.5 sm:py-1 md:py-2 justify-start rounded-lg"
              staggerFrom={"last"}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={2500}
            />
            <div className="home_button mt-4 d-flex justify-content-start align-items-start md:align-items-center gap-4">
              <Link to="/contact">
                <motion.button
                  className="btn fw-bold fs-5 ps-3 pe-3 pt-2 pb-2"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Connect with me
                </motion.button>
              </Link>
              <Link
                to="https://github.com/utpanna-pradhan"
                className="footer_link"
                target="_blank"
              >
                <FaGithub size={40} className="icon_" />
              </Link>
            </div>
          </div>
        </div>

        <div className="text-center mt-4 mb-4 scrolltxt">
          <small>Scroll down <FaArrowCircleDown /></small>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <Infiniteskillscroll />
        </motion.div>
        
      </motion.div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="rgba(79, 139, 250, 0.3)" fill-opacity="1" d="M0,128L60,149.3C120,171,240,213,360,224C480,235,600,213,720,213.3C840,213,960,235,1080,213.3C1200,192,1320,128,1380,96L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
    </div>
  );
}

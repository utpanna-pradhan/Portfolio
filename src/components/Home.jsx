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
    <div className="mt-4">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div
          className="bg_particle"
          style={{ width: "100%", height: "400px", position: "relative" }}
        >
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

          <div className="home_Content d-flex flex-column flex-md-row justify-content-center justify-content-md-between gap-5 align-items-center mt-4 mb-4">
            <div className="home_left_img ">
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
            <div className=" home_right_content">
              <h1 className="myname ">Utpanna Pradhan</h1>
              <RotatingText
                className="my_profession font-bold"
                texts={[
                  "Frontend Developer",
                  "Full-Stack Developer ",
                  "Technical Writer",
                  "Freelancer",
                  "Learner",
                ]}
                mainClassName="px-2 sm:px-2 md:px-3  fs-1 overflow-hidden py-0.5 sm:py-1 md:py-2 justify-start rounded-lg"
                staggerFrom={"last"}
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-120%" }}
                staggerDuration={0.025}
                splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                rotationInterval={2500}
              />
              <div className="home_button mt-4 d-flex  justify-content-start align-align-items-start md:align-items-center gap-4">
                <Link to="/contact">
                  <motion.button className="btn  fw-bold fs-5 ps-3 pe-3 pt-2 pb-2"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onHoverStart={() => console.log("hover started!")}
                  >
                      Connect with me
                  </motion.button>
                  {/* <button className="btn  fw-bold fs-5 ps-3 pe-3 pt-2 pb-2">
                    Connect with me
                  </button> */}
                </Link>
                <Link
                  to="https://github.com/utpanna-pradhan"
                  className="footer_link "
                  target="_blank"
                >
                  <FaGithub size={40} className="icon_" />
                </Link>

                {/* <Link to ="../assets/utpanna pradhan cv 2025.pdf" >
             <button className="btn btn-light text-black fw-bold fs-4 font-bold ps-4 pe-4 pt-2 pb-2">
                CV
              </button>
             </Link> */}
                {/* <a
                  href="../assets/utpanna pradhan cv 2025.pdf"
                  download
                  className="btn cv_btn  fw-bold fs-5 ps-3 pe-3 pt-2 pb-2"
                >
                  CV
                </a> */}
              </div>
            </div>
          </div>
        </div>
        <Infiniteskillscroll />
      </motion.div>
    </div>
  );
}

import React, { useRef } from 'react';
import SoilToSiliconCard from './SoilToSiliconCard';
import { motion, useScroll, useTransform } from "framer-motion";

const transitionConfig = { duration: 0.6, ease: "easeOut" };

const HeroContainer = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"], 
  });
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <motion.section
      ref={sectionRef}
      style={{ opacity }}
      className="px-6 md:px-16 lg:px-24 py-12 md:py-20 max-w-7xl mx-auto font-[Montserrat] text-white"
    >
      <div className="flex flex-col md:flex-row items-start justify-between gap-10 md:gap-8 relative">
        
        {/* Left Content */}
        <div className="flex-1 text-center md:text-left">
          <motion.h1
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ ...transitionConfig, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 leading-tight"
          >
            A bridge from <br />
            <span className="text-teal-400">Soil</span> To <span className="text-teal-400">Silicon</span>
          </motion.h1>

          <motion.p
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ ...transitionConfig, delay: 0.3 }}
            className="text-base md:text-lg text-slate-300 mb-8 max-w-full md:max-w-xl"
          >
            Experience the future of agriculture with our revolutionary AI platform. Harness quantum-powered analytics, predictive intelligence, and autonomous systems to transform your farming operations beyond imagination.
          </motion.p>

          <motion.div
            initial={{ scale: 0.8, y: 20, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            transition={{ ...transitionConfig, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start"
          >
            <motion.button
              whileHover={{ scale: 1.08, boxShadow: '0px 0px 15px rgba(0, 255, 200, 0.3)' }}
              whileTap={{ scale: 0.97 }}
              className="flex gap-1 border cursor-crosshair border-teal-400 z-9 text-teal-400 px-5 py-2 rounded-xl hover:bg-teal-400 hover:text-gray-950"
            >
              <i className="ri-play-mini-fill"></i>
              Neural Demo
            </motion.button>

            <motion.div
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="flex items-center space-x-2 px-4 py-2 border-[0.1px] border-teal-900 rounded-full bg-teal-400/10 text-white w-fit backdrop-blur-sm shadow-sm"
            >
              <motion.div 
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1.5 h-1.5 bg-teal-300 rounded-full"
              />
              <span className="text-sm font-medium">Next-Gen Agriculture AI</span>
            </motion.div>
          </motion.div>
        </div>

        {/* Right Card */}
        <div className="flex-1 flex justify-start md:justify-end items-start md:items-start relative">
          <SoilToSiliconCard />
        </div>

      </div>
    </motion.section>
  );
};

export default HeroContainer;

import React from 'react';
import { motion, useScroll } from "framer-motion";

const ProgressBar = () => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div 
      style={{ scaleX: scrollYProgress }}
      className='fixed top-[84.5px] left-0 w-full h-[2px] bg-teal-500 origin-left z-40 shadow-[0_0_8px_rgba(45,212,191,0.8)]'
    />
  );
}

export default ProgressBar;

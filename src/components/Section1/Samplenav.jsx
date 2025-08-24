
import React from 'react'
import { delay, motion } from 'framer-motion';

// const navVariants = {
//   hidden: { y: -50, opacity: 0 },
//   visible: {
//     y: 0,
//     opacity: 1,
//     transition: {
//       duration: 0.6,
//       ease: "easeOut",
//       when: "beforeChildren",
//       staggerChildren: 0.2,
//     },
//   },
// };
// const itemVariants = {
//   hidden: { opacity: 0, y: -40 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.6,
//       ease: "easeInOut",
//     },
//   },
// };



const Navbar = () => {



  return (
    <div className="fixed top-0 left-0 w-full px-6 z-40">
        <div className="head absolute top-0 left-0 px-6 z-50 h-[120px] w-full bg-gray-800 flex items-center">

          <motion.img
          animate={{
            x:30,
            rotate:360
          }}
          transition={{
            duration:2
          }}
          src="https://www.pngitem.com/pimgs/m/352-3521130_agriculture-crops-icon-png-transparent-png.png" alt="logo" className="rounded-[50%]"/>

          
          <div className="nav absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-10 text-white h-full font-semibold text-sm">
            <div className="relative group cursor-pointer ">
              <motion.h4
              initial={{
                y:-80
              }}
              animate={{
                y:0
              }}
              transition={{
                duration:1
              }}
              whileHover={{
                color:"green",
                scale:1.4,
                duration:0.8
              }}
              >Features
              </motion.h4>
              <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ delay: 2, duration: 0.5 }}
              className="absolute left-0 -bottom-1 w-0 h-[2px] bg-green-400 transition-all duration-300 group-hover:w-full"></motion.div>
            </div>
      
            <div className="relative group cursor-pointer">
              <motion.h4
              initial={{
                y:-80
              }}
              animate={{
                y:0
              }}
              transition={{
                duration:2
              }}
              whileHover={{
                color:"yellow",
                scale:1.4,
                duration:0.8
              }}
              >About
              </motion.h4>
              <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ delay: 2, duration: 0.5 }}
              className="absolute left-0 -bottom-1 w-0 h-[2px] bg-green-400 transition-all duration-300 group-hover:w-full"></motion.div>
            </div>

            <div className="relative group cursor-pointer">
              <motion.h4
              initial={{
                y:-80
              }}
              animate={{
                y:0
              }}
              transition={{
                duration:3
              }}
              whileHover={{
                color:"red",
                scale:1.4,
                duration:0.8
              }}
              >CodeX
              </motion.h4>
              <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ delay: 2, duration: 0.5 }}
              className="absolute left-0 -bottom-1 w-0 h-[2px] bg-red-400 transition-all duration-300 group-hover:w-full"></motion.div>
            </div>

            <div className="relative group cursor-pointer">
              <motion.h4
              initial={{
                y:-80
              }}
              animate={{
                y:0
              }}
              transition={{
                duration:4,
              }}
              whileHover={{
                color:"yellowgreen",
                scale:1.4,
                duration:0.8
              }}
              >Talk To Us
              </motion.h4>
              <motion.div 
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ delay: 2, duration: 0.5 }}
              className="absolute left-0 -bottom-1 w-0 h-[2px] bg-green-400 transition-all duration-300 group-hover:w-full"></motion.div>
            </div>
          </div>
          <motion.a
          href="#"
          className="hidden md:inline-block bg-gradient-to-r from-[#00ffcc] to-[#4ecdc4] text-[#0d0d0d] px-7 py-3 rounded-[50px] font-semibold text-[0.9rem] relative overflow-hidden"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.98 }}
          data-interactive
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
            initial={{ x: '-100%' }}
            whileHover={{ x: '100%' }}
            transition={{ duration: 0.6 }}
          />
          <span className="relative z-10">Launch App</span>
        </motion.a>
        </div>
      </div>
  );
};

export default Navbar;

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const navVariants = {
  hidden: { y: -50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: -40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeInOut",
    },
  },
};

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      animate="visible"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-md bg-[#0d0d0d]/70 py-3 shadow-lg border-b border-teal-500/30"
          : "bg-[#0d0d0d] py-6 shadow-md border-b border-gray-800"
      }`}
    >
      <div className={`mx-auto flex items-center justify-between transition-all duration-500 ${
        scrolled ? 'px-6 max-w-7xl' : 'px-20 max-w-screen-xl'
      }`}>
        {/* Logo / Heading */}
        <div className="text-2xl font-bold text-teal-400">Soil 2 Silicon</div>

        {/* Navigation Links */}
        <div className="flex items-center space-x-8">
          {['Features', 'About', 'Code', 'Review'].map((item) => (
            <motion.a
              key={item}
              variants={itemVariants}
              href={`#${item.toLowerCase()}`}
              className="text-md font-bold transition-colors hover:text-teal-300"
            >
              {item}
            </motion.a>
          ))}

          {/* Launch App Button */}
          <motion.button
            whileHover={{
              boxShadow: "0px 10px 30px 0px var(--tw-shadow-color)",
              scale: 1.05,
              color: "white"
            }}
            style={{ "--tw-shadow-color": "#73FAC4" }}
            className="ml-6 cursor-crosshair bg-teal-400 hover:bg-teal-500 text-slate-950 font-semibold py-2 px-4 rounded-3xl transition-colors"
          >
            Launch App
          </motion.button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;

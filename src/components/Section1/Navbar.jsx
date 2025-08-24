// import React, { useRef, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

// gsap.registerPlugin(ScrollTrigger);

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

// const Navbar = () => {
//   const navRef = useRef(null);

//   useEffect(() => {
//     const el = navRef.current;

//     // Set initial styles
//     gsap.set(el, {
//       backgroundColor: '#0d0d0d',
//       backdropFilter: 'blur(0px)',
//       borderColor: 'transparent',
//       color: 'white',
//     });

//     const handleScroll = () => {
//       if (window.scrollY > 20) {
//         gsap.to(el, {
//           backgroundColor: 'rgba(255, 255, 255, 0.08)',
//           backdropFilter: 'blur(12px)',
//           borderColor: 'rgba(255, 255, 255, 0.2)',
//           duration: 0.5,
//           ease: 'power2.out',
//         });
//       } else {
//         gsap.to(el, {
//           backgroundColor: '#0d0d0d',
//           backdropFilter: 'blur(0px)',
//           borderColor: 'transparent',
//           duration: 0.5,
//           ease: 'power2.out',
//         });
//       }
//     };

//     handleScroll(); // Prevent flash

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <>
//       <motion.nav
//         ref={navRef}
//         variants={navVariants}
//         initial="hidden"
//         animate="visible"
//         className="fixed top-0 left-0 right-0 z-50 text-white px-20 font-[Poppins] py-4 pt-7 flex items-center justify-between shadow-md border-b-[0.5px]"
//       >
//         <div className="text-2xl font-bold text-teal-400">
//           icon
//         </div>

//         <div className="flex items-center space-x-8">

//           <motion.a
//             variants={itemVariants}
//             whileHover={{ scale: 1.1 }}
//             href="#features"
//             className="text-md hover:text-teal-300 font-regular relative inline-block pb-2"
//           >
//             Features
//             <motion.div
//               className="absolute bottom-0 left-0 w-full h-0.5 bg-teal-300 rounded-sm"
//               variants={itemVariants}
//               initial={{ scaleX: 0 }}
//               whileHover={{ scaleX: 1 }}
//               transition={{ duration: 0.3, ease: "easeInOut" }}
//               style={{ originX: "50%" }}
//             />
//           </motion.a>

//           <motion.a
//             variants={itemVariants}
//             whileHover={{ scale: 1.1 }}
//             href="#about"
//             className="text-md hover:text-teal-300 font-regular relative inline-block pb-2"
//           >
//             About
//             <motion.div
//               className="absolute bottom-0 left-0 w-full h-0.5 bg-teal-300 rounded-sm"
//               variants={itemVariants}
//               initial={{ scaleX: 0 }}
//               whileHover={{ scaleX: 1 }}
//               transition={{ duration: 0.3, ease: "easeInOut" }}
//               style={{ originX: "50%" }}
//             />
//           </motion.a>

//           <motion.a
//             variants={itemVariants}
//             whileHover={{ scale: 1.1 }}
//             href="#codex"
//             className="text-md hover:text-red-300 font-regular relative inline-block pb-2"
//           >
//             codeX
//             <motion.div
//               className="absolute bottom-0 left-0 w-full h-0.5 bg-red-500 rounded-sm"
//               variants={itemVariants}
//               initial={{ scaleX: 0 }}
//               whileHover={{ scaleX: 1 }}
//               transition={{ duration: 0.3, ease: "easeInOut" }}
//               style={{ originX: "50%" }}
//             />
//           </motion.a>

//           <motion.a
//             variants={itemVariants}
//             whileHover={{ scale: 1.1 }}
//             href="#talktous"
//             className="text-md hover:text-teal-300 font-regular relative inline-block pb-2"
//           >
//             Talk To Us
//             <motion.div
//               className="absolute bottom-0 left-0 w-full h-0.5 bg-teal-300 rounded-sm"
//               variants={itemVariants}
//               initial={{ scaleX: 0 }}
//               whileHover={{ scaleX: 1 }}
//               transition={{ duration: 0.3, ease: "easeInOut" }}
//               style={{ originX: "50%" }}
//             />
//           </motion.a>

//           <motion.button
//             variants={itemVariants}
//             whileHover={{
//               boxShadow: "0px 10px 30px 0px var(--tw-shadow-color)",
//               scale: 1.05,
//               color: "white"
//             }}
//             style={{ "--tw-shadow-color": "#73FAC4" }}
//             className="ml-6 cursor-crosshair bg-teal-400 hover:bg-teal-500 text-slate-950 font-semibold py-2 px-4 rounded-3xl"
//           >
//             Launch App
//           </motion.button>
//         </div>
//       </motion.nav>

//       <div className="h-20"></div>
//     </>
//   );
// };

// export default Navbar;


















































































import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

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
  const navRef = useRef(null);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const el = navRef.current;

    // Initial navbar style
    gsap.set(el, {
      backgroundColor: '#0d0d0d',
      backdropFilter: 'blur(0px)',
      borderColor: 'transparent',
      color: 'white',
    });

    const handleScroll = () => {
      if (window.scrollY > 20) {
        gsap.to(el, {
          backgroundColor: 'rgba(255, 255, 255, 0.08)',
          backdropFilter: 'blur(12px)',
          borderColor: 'rgba(255, 255, 255, 0.2)',
          duration: 0.5,
          ease: 'power2.out',
        });
      } else {
        gsap.to(el, {
          backgroundColor: '#0d0d0d',
          backdropFilter: 'blur(0px)',
          borderColor: 'transparent',
          duration: 0.5,
          ease: 'power2.out',
        });
      }
    };

    handleScroll(); // Prevent flash
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Improved IntersectionObserver logic
  useEffect(() => {
    // select only sections that have ids used in nav
    const ids = ["features", "about", "codex", "talk"];
    const sections = ids.map((id) => document.getElementById(id)).filter(Boolean);

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // pick only intersecting entries
        const visible = entries.filter(e => e.isIntersecting);
        if (visible.length > 0) {
          // choose the entry with the largest intersectionRatio
          visible.sort((a, b) => b.intersectionRatio - a.intersectionRatio);
          setActiveSection(visible[0].target.id);
        } else {
          // none visible enough — clear activeSection
          setActiveSection("");
        }
      },
      {
        // a set of thresholds so we get smoother ratio updates; tweak if needed
        threshold: [0, 0.25, 0.5, 0.75, 1],
        root: null,
      }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <motion.nav
        ref={navRef}
        variants={navVariants}
        initial="hidden"
        animate="visible"
        className="fixed top-0 left-0 right-0 z-50 text-white px-20 font-[Poppins] py-4 pt-7 flex items-center justify-between shadow-md border-b-[0.5px]"
      >
        <div className="text-2xl font-bold text-teal-400">
          icon
        </div>

        <div className="flex items-center space-x-8">

          <motion.a
            variants={itemVariants}
            whileHover={{ scale: 1.1 }}
            href="#features"
            className="text-md hover:text-teal-300 font-regular relative inline-block pb-2"
          >
            Features
            <motion.div
              className="absolute bottom-0 left-0 w-full h-0.5 bg-teal-300 rounded-sm"
              variants={itemVariants}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: activeSection === 'features' ? 1 : 0 }}
              whileHover={{ scaleX: 1 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              style={{ originX: "50%" }}
            />
          </motion.a>

          <motion.a
            variants={itemVariants}
            whileHover={{ scale: 1.1 }}
            href="#about"
            className="text-md hover:text-teal-300 font-regular relative inline-block pb-2"
          >
            About
            <motion.div
              className="absolute bottom-0 left-0 w-full h-0.5 bg-teal-300 rounded-sm"
              variants={itemVariants}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: activeSection === 'about' ? 1 : 0 }}
              whileHover={{ scaleX: 1 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              style={{ originX: "50%" }}
            />
          </motion.a>

          <motion.a
            variants={itemVariants}
            whileHover={{ scale: 1.1 }}
            href="#codex"
            className="text-md hover:text-red-300 font-regular relative inline-block pb-2"
          >
            codeX
            <motion.div
              className="absolute bottom-0 left-0 w-full h-0.5 bg-red-500 rounded-sm"
              variants={itemVariants}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: activeSection === 'codex' ? 1 : 0 }}
              whileHover={{ scaleX: 1 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              style={{ originX: "50%" }}
            />
          </motion.a>

          <motion.a
            variants={itemVariants}
            whileHover={{ scale: 1.1 }}
            href="#talk"
            className="text-md hover:text-teal-300 font-regular relative inline-block pb-2"
          >
            Talk To Us
            <motion.div
              className="absolute bottom-0 left-0 w-full h-0.5 bg-teal-300 rounded-sm"
              variants={itemVariants}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: activeSection === 'talk' ? 1 : 0 }}
              whileHover={{ scaleX: 1 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              style={{ originX: "50%" }}
            />
          </motion.a>

          <motion.button
            variants={itemVariants}
            whileHover={{
              boxShadow: "0px 10px 30px 0px var(--tw-shadow-color)",
              scale: 1.05,
              color: "white"
            }}
            style={{ "--tw-shadow-color": "#73FAC4" }}
            className="ml-6 cursor-crosshair bg-teal-400 hover:bg-teal-500 text-slate-950 font-semibold py-2 px-4 rounded-3xl"
          >
            Launch App
          </motion.button>
        </div>
      </motion.nav>

      <div className="h-20"></div>
    </>
  );
};

export default Navbar;

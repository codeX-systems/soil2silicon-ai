// // src/components/CustomCursor.jsx
// import React, { useEffect, useState } from 'react';
// import { motion } from 'framer-motion';

// const CustomCursor = () => {
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
//   const [isHovering, setIsHovering] = useState(false);

//   useEffect(() => {
//     const updateMousePosition = (e) => {
//       setMousePosition({ x: e.clientX, y: e.clientY });
//     };

//     const handleMouseEnter = () => setIsHovering(true);
//     const handleMouseLeave = () => setIsHovering(false);

//     // Add event listeners for interactive elements
//     const interactiveElements = document.querySelectorAll('a, button, [data-interactive]');
    
//     interactiveElements.forEach(el => {
//       el.addEventListener('mouseenter', handleMouseEnter);
//       el.addEventListener('mouseleave', handleMouseLeave);
//     });

//     window.addEventListener('mousemove', updateMousePosition);

//     return () => {
//       window.removeEventListener('mousemove', updateMousePosition);
//       interactiveElements.forEach(el => {
//         el.removeEventListener('mouseenter', handleMouseEnter);
//         el.removeEventListener('mouseleave', handleMouseLeave);
//       });
//     };
//   }, []);

//   return (
//     <>
//       {/* Cursor */}
//       <motion.div
//         className="fixed w-5 h-5 border-2 border-[#00ffcc] rounded-full pointer-events-none z-[9999] mix-blend-difference"
//         animate={{
//           x: mousePosition.x - 10,
//           y: mousePosition.y - 10,
//           scale: isHovering ? 1.5 : 1,
//         }}
//         transition={{ type: "spring", stiffness: 500, damping: 28 }}
//       />
      
//       {/* Cursor Glow */}
//       <motion.div
//         className="fixed w-10 h-10 rounded-full pointer-events-none z-[9998]"
//         style={{
//           background: 'radial-gradient(circle, rgba(0,255,204,0.3) 0%, transparent 70%)',
//         }}
//         animate={{
//           x: mousePosition.x - 20,
//           y: mousePosition.y - 20,
//           scale: isHovering ? 1.2 : 1,
//         }}
//         transition={{ type: "spring", stiffness: 400, damping: 30 }}
//       />
//     </>
//   );
// };

// export default CustomCursor;





































// src/components/CustomCursor.jsx
// src/components/CustomCursor.jsx
// import React, { useEffect, useState } from 'react';
// import { motion } from 'framer-motion';

// const CustomCursor = () => {
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
//   const [isHovering, setIsHovering] = useState(false);

//   useEffect(() => {
//     const updateMousePosition = (e) => {
//       setMousePosition({ x: e.clientX, y: e.clientY });
//     };

//     const handleMouseEnter = () => setIsHovering(true);
//     const handleMouseLeave = () => setIsHovering(false);

//     // Track hover on interactive elements
//     const interactiveElements = document.querySelectorAll('a, button, [data-interactive]');
//     interactiveElements.forEach(el => {
//       el.addEventListener('mouseenter', handleMouseEnter);
//       el.addEventListener('mouseleave', handleMouseLeave);
//     });

//     window.addEventListener('mousemove', updateMousePosition);

//     return () => {
//       window.removeEventListener('mousemove', updateMousePosition);
//       interactiveElements.forEach(el => {
//         el.removeEventListener('mouseenter', handleMouseEnter);
//         el.removeEventListener('mouseleave', handleMouseLeave);
//       });
//     };
//   }, []);

//   return (
//     <>
//       {/* Leaf Cursor */}
//       <motion.div
//         className="fixed pointer-events-none z-[9999] mix-blend-difference" // ✅ Contrast effect
//         animate={{
//           x: mousePosition.x - 18,
//           y: mousePosition.y - 18,
//           scale: isHovering ? 1.5 : 1,
//         }}
//         transition={{ type: "spring", stiffness: 500, damping: 28 }}
//       >
//         <svg
//           width="36"
//           height="36"
//           viewBox="0 0 64 64"
//           fill="none"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           {/* Main Leaf Outline */}
//           <path
//             d="M32 2C18 12 10 24 10 36c0 12 10 22 22 22s22-10 22-22C54 24 46 12 32 2z"
//             stroke="#00ffcc"
//             strokeWidth="2.5"
//             fill="none"
//           />
//           {/* Leaf Veins */}
//           <path
//             d="M32 8v44M20 20l12 16M44 20L32 36"
//             stroke="#00ffcc"
//             strokeWidth="1.5"
//             strokeLinecap="round"
//           />
//         </svg>
//       </motion.div>

//       {/* Glow Effect */}
//       <motion.div
//         className="fixed rounded-full pointer-events-none z-[9998] mix-blend-difference"
//         style={{
//           width: "60px",
//           height: "60px",
//           background: 'radial-gradient(circle, rgba(0,255,204,0.25) 0%, transparent 70%)',
//         }}
//         animate={{
//           x: mousePosition.x - 30,
//           y: mousePosition.y - 30,
//           scale: isHovering ? 1.2 : 1,
//           opacity: isHovering ? 0.6 : 0.4,
//         }}
//         transition={{ type: "spring", stiffness: 400, damping: 30 }}
//       />
//     </>
//   );
// };

// export default CustomCursor;


































// // src/components/CustomCursor.jsx
// import React, { useEffect, useState } from 'react';
// import { motion } from 'framer-motion';

// const CustomCursor = () => {
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
//   const [isHovering, setIsHovering] = useState(false);

//   useEffect(() => {
//     const updateMousePosition = (e) => {
//       setMousePosition({ x: e.clientX, y: e.clientY });
//     };

//     const handleMouseEnter = () => setIsHovering(true);
//     const handleMouseLeave = () => setIsHovering(false);

//     const interactiveElements = document.querySelectorAll('a, button, [data-interactive]');
//     interactiveElements.forEach(el => {
//       el.addEventListener('mouseenter', handleMouseEnter);
//       el.addEventListener('mouseleave', handleMouseLeave);
//     });

//     window.addEventListener('mousemove', updateMousePosition);

//     return () => {
//       window.removeEventListener('mousemove', updateMousePosition);
//       interactiveElements.forEach(el => {
//         el.removeEventListener('mouseenter', handleMouseEnter);
//         el.removeEventListener('mouseleave', handleMouseLeave);
//       });
//     };
//   }, []);

//   return (
//     <>
//       {/* Leaf Cursor */}
//       <motion.div
//         className="fixed pointer-events-none z-[9999] mix-blend-difference"
//         animate={{
//           x: mousePosition.x - 18,
//           y: mousePosition.y - 18,
//           scale: isHovering ? 1.5 : 1,
//         }}
//         transition={{ type: "spring", stiffness: 500, damping: 28 }}
//       >
//         <svg
//           width="36"
//           height="36"
//           viewBox="0 0 64 64"
//           fill="none"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           {/* Main Leaf Outline */}
//           <path
//             d="M32 2C18 12 10 24 10 36c0 12 10 22 22 22s22-10 22-22C54 24 46 12 32 2z"
//             stroke="#00ffcc"
//             strokeWidth="2.5"
//             fill="none"
//           />
//           {/* Leaf Veins */}
//           <path
//             d="
//               M32 8v44
//               M20 20l12 16
//               M44 20L32 36
//               M20 36l12 16
//               M44 36L32 52
//             "
//             stroke="#00ffcc"
//             strokeWidth="1.5"
//             strokeLinecap="round"
//           />
//         </svg>
//       </motion.div>

//       {/* Glow Effect */}
//       <motion.div
//         className="fixed rounded-full pointer-events-none z-[9998] mix-blend-difference"
//         style={{
//           width: "60px",
//           height: "60px",
//           background: 'radial-gradient(circle, rgba(0,255,204,0.25) 0%, transparent 70%)',
//         }}
//         animate={{
//           x: mousePosition.x - 30,
//           y: mousePosition.y - 30,
//           scale: isHovering ? 1.2 : 1,
//           opacity: isHovering ? 0.6 : 0.4,
//         }}
//         transition={{ type: "spring", stiffness: 400, damping: 30 }}
//       />
//     </>
//   );
// };

// export default CustomCursor;





























// src/components/CustomCursor.jsx
import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const CustomCursor = () => {
  const [isHovering, setIsHovering] = useState(false);

  // Motion values (instant updates, no re-render)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth spring animation
  const springX = useSpring(mouseX, { stiffness: 500, damping: 28 });
  const springY = useSpring(mouseY, { stiffness: 500, damping: 28 });

  useEffect(() => {
    const updateMousePosition = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    const interactiveElements = document.querySelectorAll(
      "a, button, [data-interactive]"
    );
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, [mouseX, mouseY]);

  return (
    <>
      {/* Leaf Cursor */}
      <motion.div
        className="fixed pointer-events-none z-[9999] mix-blend-difference"
        style={{
          x: springX,
          y: springY,
        }}
        animate={{
          scale: isHovering ? 1.5 : 1,
          rotate: -45, // tilt left 45 degrees
        }}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      >
        <svg
          width="36"
          height="36"
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ transform: "translate(-18px, -18px)" }} // center the cursor
        >
          <path
            d="M32 2C18 12 10 24 10 36c0 12 10 22 22 22s22-10 22-22C54 24 46 12 32 2z"
            stroke="#00ffcc"
            strokeWidth="2.5"
            fill="none"
          />
          <path
            d="
              M32 8v44
              M20 20l12 16
              M44 20L32 36
              M20 36l12 16
              M44 36L32 52
            "
            stroke="#00ffcc"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </motion.div>

      {/* Glow Effect */}
      <motion.div
        className="fixed rounded-full pointer-events-none z-[9998] mix-blend-difference"
        style={{
          width: "60px",
          height: "60px",
          background:
            "radial-gradient(circle, rgba(0,255,204,0.25) 0%, transparent 70%)",
          x: springX,
          y: springY,
          transform: "translate(-30px, -30px)", // center glow
        }}
        animate={{
          scale: isHovering ? 1.2 : 1,
          opacity: isHovering ? 0.6 : 0.4,
        }}
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
      />
    </>
  );
};

export default CustomCursor;


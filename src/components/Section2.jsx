// // Section1/NextSection.jsx
// import React from 'react';

// const Section2 = () => {
//   return (
//     <section className="h-screen bg-white flex items-center justify-center">
//       <h1 className="text-5xl font-bold text-gray-800">Next Section Placeholder</h1>
//     </section>
//   );
// };

// export default Section2;







import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Section2 = () => {
  const sectionRef = useRef(null);

  // Track scroll relative to this section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"], 
    // "start end": section top hits bottom of viewport
    // "end start": section bottom hits top of viewport
  });

  /**
   * We create a 3-stage opacity:
   *  - At start: 0.2 (faded)
   *  - Midpoint: 1 (fully visible)
   *  - End: 0.2 (fade out again)
   */
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.2, 1, 0.2]);

  return (
    <motion.section
      ref={sectionRef}
      style={{ opacity }}
      className="h-screen bg-white flex items-center justify-center"
    >
      {/* Video Background */}
      <video
        className=" inset-0 w-full h-full object-cover opacity-70"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/final_logo_render.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* Video Background */}
      <video
        className="absolute -z-99 inset-0 w-full h-full object-cover opacity-70"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/final_logo_render.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </motion.section>
  );
};

export default Section2;

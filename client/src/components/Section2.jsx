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

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.2, 1, 0.2]);

  return (
    <>

    
      {/* ================= DESKTOP VIEW ================= */}
      <motion.section
        ref={sectionRef}
        style={{ opacity }}
        // className="hidden md:flex h-screen bg-white items-center justify-center relative"
      >
        {/* Video 1 */}
        {/* <video
          className="inset-0 w-full h-full object-cover opacity-70"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/final_logo_render.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video> */}

        {/* Video 2 */}
        <video
          className="absolute -z-10 inset-0 w-full h-full object-cover opacity-70"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/final_logo_render.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </motion.section>

      {/* ================= MOBILE VIEW ================= */}
      <motion.section
        ref={sectionRef}
        style={{ opacity }}
        // className="flex md:hidden h-screen bg-white items-center justify-center relative"
      >
        {/* Video 1 */}
        {/* <video
          className="inset-0 w-full h-full object-cover opacity-70"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/final_logo_render.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video> */}

        {/* Video 2 */}
        <video
          className="absolute -z-10 inset-0 w-full h-full object-cover opacity-70"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/final_logo_render.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </motion.section>
    </>
  );
};

export default Section2;

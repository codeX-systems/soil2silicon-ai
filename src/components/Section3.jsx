// import React, { useRef, useEffect } from 'react';
// import { motion, useScroll, useTransform, useInView } from 'framer-motion';

// const features = [
//   { title: "AI-Powered Solutions", desc: "Harness artificial intelligence for smarter decision-making." },
//   { title: "Blockchain Security", desc: "Ensure tamper-proof and transparent digital transactions." },
//   { title: "Green Tech", desc: "Innovations designed to protect the environment and conserve energy." },
//   { title: "IoT Integration", desc: "Seamlessly connect devices to create smarter ecosystems." },
// ];

// const cardVariants = {
//   hidden: { opacity: 0, y: 50 },
//   visible: (i) => ({
//     opacity: 1,
//     y: 0,
//     transition: { delay: i * 0.3, duration: 0.6, ease: "easeOut" },
//   }),
// };

// const Section3 = ({ onInViewChange }) => {
//   const sectionRef = useRef(null);

//   // Section fade
//   const { scrollYProgress } = useScroll({
//     target: sectionRef,
//     offset: ["start end", "end start"],
//   });
//   const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.2, 1, 0.2]);

//   // Detect when Section 3 is visible
//   const inView = useInView(sectionRef, { amount: 0.3 });

//   useEffect(() => {
//     onInViewChange?.(inView); // Notify parent (Navbar) when visible
//   }, [inView, onInViewChange]);

//   return (
//     <motion.section
//       ref={sectionRef}
//       id="features"
//       style={{ opacity }}
//       className="h-auto py-24 bg-gray-900 flex flex-col items-center justify-center"
//     >
//       <h1 className="text-5xl font-bold text-white mb-12">
//         Section 3 — Future Innovations
//       </h1>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6 max-w-5xl">
//         {features.map((feature, i) => (
//           <motion.div
//             key={i}
//             custom={i}
//             initial="hidden"
//             animate={inView ? "visible" : "hidden"}
//             variants={cardVariants}
//             className="bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-700 hover:border-teal-400 transition"
//           >
//             <h2 className="text-2xl font-semibold text-teal-400 mb-2">{feature.title}</h2>
//             <p className="text-gray-300">{feature.desc}</p>
//           </motion.div>
//         ))}
//       </div>
//     </motion.section>
//   );
// };

// export default Section3;















































// src/components/Section3.jsx
import React from "react";
import { motion, useInView } from "framer-motion";

const features = [
  { title: "AI-Powered Solutions", desc: "Harness artificial intelligence for smarter decision-making." },
  { title: "Blockchain Security", desc: "Ensure tamper-proof and transparent digital transactions." },
  { title: "Green Tech", desc: "Innovations designed to protect the environment and conserve energy." },
  { title: "IoT Integration", desc: "Seamlessly connect devices to create smarter ecosystems." },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.3, duration: 0.6, ease: "easeOut" },
  }),
};

const Section3 = () => {
  const ref = React.useRef(null);
  const inView = useInView(ref, { amount: 0.3 });

  return (
    <motion.section
      ref={ref}
      id="features"
      className="h-screen w-screen overflow-hidden bg-gray-900 flex flex-col items-center justify-center text-white"
    >
      <h1 className="text-5xl font-bold mb-16">Future Innovations</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-6 max-w-5xl">
        {features.map((feature, i) => (
          <motion.div
            key={i}
            custom={i}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={cardVariants}
            className="bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700 hover:border-teal-400 transition"
          >
            <h2 className="text-2xl font-semibold text-teal-400 mb-4">{feature.title}</h2>
            <p className="text-gray-300">{feature.desc}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Section3;







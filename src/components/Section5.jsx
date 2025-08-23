// src/components/Section5.jsx
import React from "react";
import { motion, useInView } from "framer-motion";

const codexPoints = [
  { title: "Collaborative Coding", desc: "Build projects together in real-time with global developers." },
  { title: "Version Control", desc: "Integrated Git workflows for seamless project management." },
  { title: "Code Intelligence", desc: "AI-assisted coding to accelerate development and reduce bugs." },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.3, duration: 0.6, ease: "easeOut" },
  }),
};

const Section5 = () => {
  const ref = React.useRef(null);
  const inView = useInView(ref, { amount: 0.3 });

  return (
    <motion.section
      ref={ref}
      id="codex"
      className="h-screen w-screen overflow-hidden bg-gray-900 flex flex-col items-center justify-center text-white"
    >
      <h1 className="text-5xl font-bold mb-16">CodeX</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-6 max-w-6xl">
        {codexPoints.map((point, i) => (
          <motion.div
            key={i}
            custom={i}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={cardVariants}
            className="bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700 hover:border-teal-400 transition"
          >
            <h2 className="text-2xl font-semibold text-teal-400 mb-4">{point.title}</h2>
            <p className="text-gray-300">{point.desc}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Section5;

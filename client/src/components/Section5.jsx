// import React from "react";
// import { motion, useInView } from "framer-motion";

// const codexPoints = [
//   { title: "Collaborative Coding", desc: "Build projects together in real-time with global developers." },
//   { title: "Version Control", desc: "Integrated Git workflows for seamless project management." },
//   { title: "Code Intelligence", desc: "AI-assisted coding to accelerate development and reduce bugs." },
// ];

// const cardVariants = {
//   hidden: { opacity: 0, y: 50 },
//   visible: (i) => ({
//     opacity: 1,
//     y: 0,
//     transition: { delay: i * 0.3, duration: 0.6, ease: "easeOut" },
//   }),
// };

// const Section5 = () => {
//   const ref = React.useRef(null);
//   const inView = useInView(ref, { amount: 0.3 });

//   return (
//     <motion.section
//       ref={ref}
//       id="codex"
//       className="
//         w-full 
//         bg-gray-900 
//         flex flex-col items-center text-white
        
//         /* SHORT HEIGHT */
//         py-14 md:py-20
//       "
//     >
//       <h1 className="text-4xl md:text-5xl font-bold mb-10 md:mb-16">
//         CodeX
//       </h1>

//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 px-6 max-w-6xl">
//         {codexPoints.map((point, i) => (
//           <motion.div
//             key={i}
//             custom={i}
//             initial="hidden"
//             animate={inView ? "visible" : "hidden"}
//             variants={cardVariants}
//             className="
//               bg-gray-800 rounded-xl shadow-lg border border-gray-700 
//               hover:border-teal-400 transition
              
//               /* MOBILE SMALLER CARDS */
//               p-5
              
//               /* DESKTOP SAME SIZE */
//               md:p-8
//             "
//           >
//             <h2 className="
//               font-semibold text-teal-400
//               text-xl md:text-2xl
//               mb-3 md:mb-4
//             ">
//               {point.title}
//             </h2>

//             <p className="text-gray-300 text-sm md:text-base">
//               {point.desc}
//             </p>
//           </motion.div>
//         ))}
//       </div>
//     </motion.section>
//   );
// };

// export default Section5;

// ----------------------UPDATED UI-------------------------
import React from "react";
import { motion, useInView } from "framer-motion";
import { useTranslation } from "react-i18next";

const Section5 = () => {
  const { t } = useTranslation();
  const ref = React.useRef(null);
  const inView = useInView(ref, { amount: 0.2, once: true });

  // Array of keys for the features grid
  const codexPoints = [
    { title: t("section5.features.collab.title"), desc: t("section5.features.collab.desc") },
    { title: t("section5.features.version.title"), desc: t("section5.features.version.desc") },
    { title: t("section5.features.intelligence.title"), desc: t("section5.features.intelligence.desc") },
  ];

  const teamMembers = ["SP Rohan", "A Datta", "S Izrail", "A Khan"];

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
    }),
  };

  return (
    <motion.section
      ref={ref}
      id="codex"
      className="w-full bg-gray-900 flex flex-col items-center text-white py-16 md:py-24 px-6"
    >
      {/* 1. Header */}
      <motion.h1
        custom={0}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={fadeUpVariants}
        className="text-4xl md:text-5xl font-bold mb-6 tracking-tight"
      >
        {t("section5.header")}
      </motion.h1>

      {/* 2. Team Intro & Pills */}
      <motion.div
        custom={1}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={fadeUpVariants}
        className="flex flex-col items-center max-w-2xl text-center mb-10"
      >
        <p className="text-gray-400 text-base md:text-lg mb-6">
          {t("section5.teamIntro.part1")}{" "}
          <span className="text-white font-semibold">{t("section5.teamIntro.webDev")}</span>{" "}
          {t("section5.teamIntro.and")}{" "}
          <span className="text-white font-semibold">{t("section5.teamIntro.mlOps")}</span>.
        </p>
        
        <div className="flex flex-wrap justify-center gap-3">
          {teamMembers.map((member, idx) => (
            <div 
              key={idx}
              className="px-4 py-2 rounded-full bg-gray-800 border border-gray-700 text-teal-300 text-sm font-medium shadow-sm"
            >
              {member}
            </div>
          ))}
        </div>
      </motion.div>

      {/* 3. Problem Statement Highlight Card */}
      <motion.div
        custom={2}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={fadeUpVariants}
        className="w-full max-w-4xl bg-gradient-to-br from-gray-800 to-gray-900 border border-teal-500/30 rounded-2xl p-6 md:p-10 mb-16 shadow-xl relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal-500 to-emerald-400 opacity-75"></div>
        
        <h3 className="text-teal-400 font-bold text-sm uppercase tracking-widest mb-3">
          {t("section5.mission.label")}
        </h3>
        <p className="text-gray-200 text-lg md:text-2xl font-medium leading-relaxed">
          {t("section5.mission.statement")}
        </p>
      </motion.div>

      {/* 4. Core Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 w-full max-w-6xl">
        {codexPoints.map((point, i) => (
          <motion.div
            key={i}
            custom={i + 3}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeUpVariants}
            className="bg-gray-800 rounded-xl shadow-lg border border-gray-700 hover:border-teal-400 hover:shadow-teal-900/20 hover:-translate-y-1 transition-all duration-300 p-6 md:p-8"
          >
            <h2 className="font-semibold text-teal-400 text-xl md:text-2xl mb-3 md:mb-4">
              {point.title}
            </h2>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed">
              {point.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Section5;

// import React, { useRef } from 'react';
// import SoilToSiliconCard from './SoilToSiliconCard';
// import { motion, useScroll, useTransform } from "framer-motion";

// const transitionConfig = { duration: 0.6, ease: "easeOut" };

// const HeroContainer = () => {
//   const sectionRef = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: sectionRef,
//     offset: ["start start", "end start"], 
//   });
//   const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

//   return (
//     <motion.section
//       ref={sectionRef}
//       style={{ opacity }}
//       className="relative z-10 px-6 md:px-16 lg:px-24 py-12 md:py-20 max-w-7xl mx-auto font-[Montserrat] text-white"
//     >
//       {/* 🔥 Added z-20 to keep content above background elements */}
//       <div className="flex flex-col md:flex-row items-start justify-between gap-10 md:gap-8 relative z-20">
        
//         {/* Left Content */}
//         <div className="flex-1 text-center md:text-left">
//           <motion.h1
//             initial={{ y: 40, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ ...transitionConfig, delay: 0.1 }}
//             className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 leading-tight"
//           >
//             A bridge from <br />
//             <span className="text-teal-400">Soil</span> To <span className="text-teal-400">Silicon</span>
//           </motion.h1>

//           <motion.p
//             initial={{ y: 40, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ ...transitionConfig, delay: 0.3 }}
//             className="text-base md:text-lg text-slate-300 mb-8 max-w-full md:max-w-xl"
//           >
//             Experience the future of agriculture with our revolutionary AI platform. Harness quantum-powered analytics, predictive intelligence, and autonomous systems to transform your farming operations beyond imagination.
//           </motion.p>

//           <motion.div
//             initial={{ scale: 0.8, y: 20, opacity: 0 }}
//             animate={{ scale: 1, y: 0, opacity: 1 }}
//             transition={{ ...transitionConfig, delay: 0.5 }}
//             className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start"
//           >
//             <motion.button
//               whileHover={{ scale: 1.08, boxShadow: '0px 0px 15px rgba(0, 255, 200, 0.3)' }}
//               whileTap={{ scale: 0.97 }}
//               className="flex gap-1 border cursor-crosshair border-teal-400 z-10 text-teal-400 px-5 py-2 rounded-xl hover:bg-teal-400 hover:text-gray-950"
//             >
//               <i className="ri-play-mini-fill"></i>
//               Neural Demo
//             </motion.button>

//             <motion.div
//               initial={{ y: 40, opacity: 0 }}
//               animate={{ y: 0, opacity: 1 }}
//               transition={{ duration: 0.5, ease: "easeOut" }}
//               className="flex items-center space-x-2 px-4 py-2 border-[0.1px] border-teal-900 rounded-full bg-teal-400/10 text-white w-fit backdrop-blur-sm shadow-sm"
//             >
//               <motion.div 
//                 animate={{ opacity: [1, 0.3, 1] }}
//                 transition={{ duration: 2, repeat: Infinity }}
//                 className="w-1.5 h-1.5 bg-teal-300 rounded-full"
//               />
//               <span className="text-sm font-medium">Next-Gen Agriculture AI</span>
//             </motion.div>
//           </motion.div>
//         </div>

//         {/* Right Card Container */}
//         <div className="flex-1 flex justify-start md:justify-end items-start relative min-h-[500px]">
//           <SoilToSiliconCard />
//         </div>

//       </div>
//     </motion.section>
//   );
// };

// export default HeroContainer;

// ========================================================================
import React, { useRef } from "react";
import SoilToSiliconCard from "./SoilToSiliconCard";
import { motion, useScroll, useTransform } from "framer-motion";
import { useTranslation } from "react-i18next";

const transitionConfig = { duration: 0.6, ease: "easeOut" };

const HeroContainer = () => {
  const { t } = useTranslation();
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <motion.section
      ref={sectionRef}
      style={{ opacity }}
      className="relative z-10 px-6 md:px-16 lg:px-24 py-16 md:py-24 max-w-7xl mx-auto font-[Montserrat] text-white"
    >
      <div className="flex flex-col md:flex-row items-center justify-between gap-12 relative z-20">
        
        {/* Left Content */}
        <div className="flex-1 text-center md:text-left">
          <motion.h1
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ ...transitionConfig, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 leading-tight"
          >
            {t("hero_titleLine1")} <br />
            <span className="text-teal-400">
              {t("hero_titleHighlight")}
            </span>
          </motion.h1>

          <motion.p
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ ...transitionConfig, delay: 0.3 }}
            className="text-base md:text-lg text-slate-300 mb-8 max-w-xl"
          >
            {t("hero_description")}
          </motion.p>

          <motion.div
            initial={{ scale: 0.8, y: 20, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            transition={{ ...transitionConfig, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start"
          >
            {/* Primary CTA */}
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 0px 20px rgba(20, 184, 166, 0.4)",
              }}
              whileTap={{ scale: 0.97 }}
              className="px-6 py-3 rounded-xl bg-teal-500 text-white font-semibold shadow-lg hover:bg-teal-400 transition"
            >
              {t("hero_cta")}
            </motion.button>

            {/* AI Badge */}
            <motion.div
              animate={{ opacity: [1, 0.4, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex items-center space-x-2 px-4 py-2 border border-teal-400 rounded-full bg-teal-500/10 backdrop-blur-sm"
            >
              <div className="w-2 h-2 bg-teal-400 rounded-full" />
              <span className="text-sm font-medium text-teal-300">
                {t("hero_badge")}
              </span>
            </motion.div>
          </motion.div>
        </div>

        {/* Right Card */}
        <div className="flex-1 flex justify-center md:justify-end items-center relative min-h-[450px]">
          <SoilToSiliconCard />
        </div>
      </div>
    </motion.section>
  );
};

export default HeroContainer;
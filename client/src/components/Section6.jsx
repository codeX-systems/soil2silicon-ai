// // src/components/Section6.jsx
// import React, { useState, useEffect, useRef } from "react";
// import { motion, useInView } from "framer-motion";

// const contactOptions = [
//   {
//     title: "Email Us",
//     desc: "Reach out at contact@futuretech.com for inquiries and support.",
//   },
//   {
//     title: "Join Our Community",
//     desc: "Be part of our global developer forum and exchange ideas.",
//   },
//   {
//     title: "Follow Us",
//     desc: "Stay updated via Twitter, LinkedIn, and Instagram.",
//   },
// ];

// /* ================= TYPING HOOK ================= */

// const useTyping = (text, speed = 40) => {
//   const [display, setDisplay] = useState("");

//   useEffect(() => {
//     let i = 0;
//     const interval = setInterval(() => {
//       setDisplay(text.slice(0, i + 1));
//       i++;
//       if (i === text.length) clearInterval(interval);
//     }, speed);

//     return () => clearInterval(interval);
//   }, [text, speed]);

//   return display;
// };

// /* ================= ANIMATION VARIANTS ================= */

// const footerContainer = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: { staggerChildren: 0.2 },
//   },
// };

// const footerItem = {
//   hidden: { opacity: 0, y: 40 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: { type: "spring", stiffness: 60, damping: 18 },
//   },
// };

// const Section6 = () => {
//   const ref = useRef(null);
//   const inView = useInView(ref, { amount: 0.3 });

//   const typedText = useTyping("The future of smart digital solutions");

//   return (
//     <motion.section ref={ref} id="contact" className="w-full bg-black text-white">
      
//       {/* HEADER */}
//       <motion.div
//         initial={{ opacity: 0, x: -120 }}
//         animate={inView ? { opacity: 1, x: 0 } : {}}
//         transition={{ duration: 0.7 }}
//         className="py-12 px-6 md:px-16 backdrop-blur-lg bg-gray-800/40 border-b border-gray-700"
//       >
//         <h1 className="text-4xl md:text-6xl font-bold text-teal-400 ml-6 md:ml-20">
//           Contact
//         </h1>
//       </motion.div>

//       <div className="py-10 px-6 md:px-16">

//         {/* DESKTOP */}
//         <motion.div
//           variants={footerContainer}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           className="hidden md:grid grid-cols-4 gap-8"
//         >
//           <motion.div variants={footerItem}>
//             <h2 className="font-semibold text-gray-200 text-xl">
//               The future of smart digital solutions
//             </h2>
//           </motion.div>

//           {contactOptions.map((option, i) => (
//             <motion.div key={i} variants={footerItem}>
//               <h3 className="text-teal-400 font-semibold mb-2">
//                 {option.title}
//               </h3>
//               <p className="text-gray-400 text-sm">{option.desc}</p>
//             </motion.div>
//           ))}
//         </motion.div>

//         {/* MOBILE */}
//         <div className="md:hidden text-center space-y-6">
//           <motion.h2
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-xl font-semibold text-gray-200"
//           >
//             {typedText}
//             <span className="animate-pulse text-teal-400">|</span>
//           </motion.h2>

//           <div className="border-t border-gray-700"></div>

//           <div className="text-sm text-gray-500 space-y-2">
//             <p>© 2026 FutureTech. All rights reserved.</p>
//             <p>Building smarter digital experiences for tomorrow.</p>
//           </div>
//         </div>

//         {/* BOTTOM */}
//         <motion.div
//           variants={footerItem}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           className="hidden md:flex mt-10 border-t border-gray-800 pt-6 text-sm text-gray-500 justify-between"
//         >
//           <p>© 2026 FutureTech. All rights reserved.</p>
//           <p>Building smarter digital experiences for tomorrow.</p>
//         </motion.div>

//       </div>
//     </motion.section>
//   );
// };

// export default Section6;


// src/components/Section6.jsx
import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const Section6 = () => {
  const { t } = useTranslation();

  return (
    <section id="contact" className="w-full bg-gray-900 py-24 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Text */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {t("section6.titlePart1")} <span className="text-teal-400">{t("section6.titleHighlight")}</span> {t("section6.titlePart2")}
            </h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              {t("section6.description")}
            </p>
            
            <div className="flex flex-col gap-4">
              <a 
                href="mailto:team.codex@example.com" 
                className="text-white hover:text-teal-400 transition-colors flex items-center gap-3 text-lg font-medium"
              >
                <span className="p-2 bg-white/5 rounded-lg border border-white/10">📧</span>
                team.codex@example.com
              </a>
              <a 
                href="https://github.com/codex-dev" 
                target="_blank" 
                rel="noreferrer"
                className="text-white hover:text-teal-400 transition-colors flex items-center gap-3 text-lg font-medium"
              >
                <span className="p-2 bg-white/5 rounded-lg border border-white/10">Github</span>
                github.com/codex-dev
              </a>
            </div>
          </motion.div>

          {/* Right Side: Simple CTA Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <div className="relative bg-gray-800 border border-white/10 p-10 rounded-2xl">
              <h3 className="text-2xl font-bold text-white mb-4">
                {t("section6.ctaCard.title")}
              </h3>
              <p className="text-gray-400 mb-8">
                {t("section6.ctaCard.description")}
              </p>
              <button className="w-full bg-teal-500 hover:bg-teal-400 text-gray-900 font-bold py-4 rounded-xl transition-all active:scale-95">
                {t("section6.ctaCard.button")}
              </button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Section6;
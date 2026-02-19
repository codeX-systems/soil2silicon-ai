// src/components/Section6.jsx
import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

const contactOptions = [
  {
    title: "Email Us",
    desc: "Reach out at contact@futuretech.com for inquiries and support.",
  },
  {
    title: "Join Our Community",
    desc: "Be part of our global developer forum and exchange ideas.",
  },
  {
    title: "Follow Us",
    desc: "Stay updated via Twitter, LinkedIn, and Instagram.",
  },
];

/* ================= TYPING HOOK ================= */

const useTyping = (text, speed = 40) => {
  const [display, setDisplay] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplay(text.slice(0, i + 1));
      i++;
      if (i === text.length) clearInterval(interval);
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return display;
};

/* ================= ANIMATION VARIANTS ================= */

const footerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const footerItem = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 60, damping: 18 },
  },
};

const Section6 = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.3 });

  const typedText = useTyping("The future of smart digital solutions");

  return (
    <motion.section ref={ref} id="contact" className="w-full bg-black text-white">
      
      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, x: -120 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.7 }}
        className="py-12 px-6 md:px-16 backdrop-blur-lg bg-gray-800/40 border-b border-gray-700"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-teal-400 ml-6 md:ml-20">
          Contact
        </h1>
      </motion.div>

      <div className="py-10 px-6 md:px-16">

        {/* DESKTOP */}
        <motion.div
          variants={footerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="hidden md:grid grid-cols-4 gap-8"
        >
          <motion.div variants={footerItem}>
            <h2 className="font-semibold text-gray-200 text-xl">
              The future of smart digital solutions
            </h2>
          </motion.div>

          {contactOptions.map((option, i) => (
            <motion.div key={i} variants={footerItem}>
              <h3 className="text-teal-400 font-semibold mb-2">
                {option.title}
              </h3>
              <p className="text-gray-400 text-sm">{option.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* MOBILE */}
        <div className="md:hidden text-center space-y-6">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xl font-semibold text-gray-200"
          >
            {typedText}
            <span className="animate-pulse text-teal-400">|</span>
          </motion.h2>

          <div className="border-t border-gray-700"></div>

          <div className="text-sm text-gray-500 space-y-2">
            <p>© 2026 FutureTech. All rights reserved.</p>
            <p>Building smarter digital experiences for tomorrow.</p>
          </div>
        </div>

        {/* BOTTOM */}
        <motion.div
          variants={footerItem}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="hidden md:flex mt-10 border-t border-gray-800 pt-6 text-sm text-gray-500 justify-between"
        >
          <p>© 2026 FutureTech. All rights reserved.</p>
          <p>Building smarter digital experiences for tomorrow.</p>
        </motion.div>

      </div>
    </motion.section>
  );
};

export default Section6;

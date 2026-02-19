import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const data = [
  {
    title: "AI-Driven Crop Intelligence",
    slides: [
      "Soil-based crop and variety recommendations",
      "ML-powered yield prediction models",
      "Disease detection from crop images",
      "Smarter planning using data insights",
    ],
  },
  {
    title: "Precision Soil & Fertilizer Guidance",
    slides: [
      "AI-based soil type identification",
      "Crop-specific fertilizer recommendations",
      "Nutrient balance for healthier soil",
      "Reduced waste, improved productivity",
    ],
  },
  {
    title: "Smart Farming with IoT Monitoring",
    slides: [
      "Real-time soil moisture tracking",
      "pH, NPK, and temperature sensing",
      "Remote farm condition monitoring",
      "Data-driven field decisions",
    ],
  },
  {
    title: "Sustainable & Climate-Aware Agriculture",
    slides: [
      "Weather-based farming recommendations",
      "Optimized water and resource usage",
      "Eco-friendly nutrient management",
      "Long-term soil sustainability",
    ],
  },
  {
    title: "Voice-Enabled & Inclusive Farming",
    slides: [
      "Multilingual AI voice assistance",
      "Simple, farmer-friendly interface",
      "Offline support for low connectivity",
      "Accessible insights for all literacy levels",
    ],
  },
];





export default function OurSolutions() {
  const [active, setActive] = useState(0);
  const [slide, setSlide] = useState(0);

  // AUTO SWIPE
  useEffect(() => {
    const interval = setInterval(() => {
      setSlide((prev) =>
        prev === data[active].slides.length - 1 ? 0 : prev + 1
      );
    }, 3500);

    return () => clearInterval(interval);
  }, [slide, active]);

  return (
    <section 
     id="solutions"
    className="bg-gray-900 text-white py-16 px-6 relative overflow-hidden scroll-mt-28">
          <h1 className="text-center text-3xl md:text-4xl font-bold mb-10 relative z-10">
    Our Solutions
  </h1>




      {/* ================= DESKTOP VIEW ================= */}
      <div className="hidden md:block">
        {/* Animated dotted background */}
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#00ffc833_1px,transparent_1px)] [background-size:25px_25px]" />

        

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 relative z-10">
          {/* LEFT MENU */}
          <div className="space-y-5">
            {data.map((item, i) => (
              <div
                key={i}
                onClick={() => {
                  setActive(i);
                  setSlide(0);
                }}
                className={`cursor-pointer px-4 py-2.5 rounded-md transition border-l-4 min-w-[200px] backdrop-blur-md ${
                  active === i
                    ? "border-teal-400 bg-teal-900/20 shadow-md shadow-teal-500/20"
                    : "border-gray-600 bg-gray-800"
                }`}
              >
               <h2 className="text-lg font-semibold text-teal-400">
  {item.title}
</h2>
              </div>
            ))}
          </div>

          {/* RIGHT PANEL */}
          <div className="relative h-[320px] overflow-hidden rounded-xl border border-teal-400/20 backdrop-blur-md">
            {/* SOIL ➜ SILICON GRADIENT */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(90deg, #3b2f1e 0%, #0f2027 50%, #0a0f1c 100%)",
              }}
            />

            {/* EARTH GLOW */}
            <motion.div
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ repeat: Infinity, duration: 6 }}
              className="absolute w-72 h-72 bg-green-700/20 blur-3xl rounded-full -left-20 -top-20"
            />

            <motion.svg
              viewBox="0 0 800 600"
              className="absolute right-0 bottom-0 w-full h-full opacity-20 pointer-events-none"
            >
              <defs>
                <linearGradient id="vineGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#22d3ee" />
                  <stop offset="100%" stopColor="#4ade80" />
                </linearGradient>
              </defs>

              {[
                { x: 100, delay: 0 },
                { x: 250, delay: 1 },
                { x: 400, delay: 2 },
                { x: 550, delay: 3 },
                { x: 700, delay: 4 },
              ].map((vine, i) => (
                <motion.path
                  key={i}
                  d={`M${vine.x} 600 
                      C${vine.x - 30} 500, ${vine.x + 40} 450, ${vine.x} 350
                      C${vine.x - 50} 250, ${vine.x + 50} 150, ${vine.x} 50`}
                  stroke="url(#vineGradient)"
                  strokeWidth="2"
                  fill="transparent"
                  strokeDasharray="6 10"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: [0, 1, 0] }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    delay: vine.delay,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </motion.svg>




            {/* CONTENT */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full px-10 text-center">
              <AnimatePresence mode="wait">
                <motion.p
                  key={slide}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -40 }}
                  transition={{ duration: 0.5 }}
                  className="text-lg md:text-xl"
                >
                  {data[active].slides[slide]}
                </motion.p>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
      {/* ================ END DESKTOP VIEW ================ */}




      {/* ================= MOBILE VIEW ================= */}
      <div className="md:hidden max-w-md mx-auto space-y-6 relative z-10">
        {data.map((item, i) => (
          <div
            key={i}
            onClick={() => {
              setActive(i);
              setSlide(0);
            }}
            className="relative cursor-pointer p-4 rounded-xl bg-gray-800 border border-teal-400/20 backdrop-blur-md shadow-md overflow-hidden"
          >
            {/* GLOW */}
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 6 }}
              className="absolute w-36 h-36 bg-green-700/20 blur-3xl rounded-full -top-10 -left-8"
            />

            <h2 className="relative text-base font-semibold z-10 text-teal-400">
  {item.title}
</h2>

            <AnimatePresence>
              {active === i && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.35 }}
                  className="overflow-hidden mt-3 relative z-10"
                >
                  <motion.p
                    key={slide}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-sm text-gray-300"
                  >
                    {item.slides[slide]}
                  </motion.p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
      {/* ================ END MOBILE VIEW ================ */}
    </section>
  );
}

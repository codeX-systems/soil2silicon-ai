// import React from 'react';
// import { motion } from "framer-motion"

// const Samplecard = () => {
//  return (
//    <motion.div
//      initial={{ opacity: 0, x: -50, y: 30, rotateX: -15, rotateY: 15 }}
//      animate={{ opacity: 1, x: 0, y: 0, rotateX: -15, rotateY: 15 }}
//      transition={{ duration: 0.8, ease: "easeOut" }}
//      whileHover={{
//        rotateX: 0,
//        rotateY: 0,
//        rotateZ: 0,
//        scale: 1.05,
//        transition: { type: "spring", stiffness: 300, damping: 20 },
//      }}
//      className="w-full cursor-grab relative max-w-xl h-96 p-6 bg-transparent border border-gray-800 border-opacity-10 rounded-3xl backdrop-blur-md shadow-2xl text-white overflow-hidden"
//    >
     
//      {/* Animated Top Border */}
//      <div className="absolute top-0 left-0 w-full h-1 overflow-hidden rounded-t-3xl">
//        <motion.div 
//          className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-transparent via-teal-400 to-transparent"
//          animate={{ x: ['-100%', '100%'] }}
//          transition={{ 
//            duration: 3, 
//            repeat: Infinity, 
//            ease: "linear",
//            repeatDelay: 1
//          }}
//        />
//      </div>

//      {/* Header and Neural AI Card aligned */}
//      <div className="flex items-center justify-between mb-8">
//        <h2 className="text-xl font-bold text-white">Soil_2_Silicon</h2>

//        {/* Inline "Neural AI" Card */}
//        <div className="flex items-center space-x-2 px-3 py-1 border border-teal-400 rounded-full bg-opacity-10 text-white text-xs backdrop-blur-sm">
//          <motion.div 
//            className="w-2 h-2 bg-teal-400 rounded-full"
//            animate={{ opacity: [1, 0.3, 1] }}
//            transition={{ duration: 2, repeat: Infinity }}
//          />
//          <span className="font-medium tracking-wide">Neural AI</span>
//        </div>
//      </div>

//      {/* Stats Boxes */}
//      <div className="grid grid-cols-3 gap-4 mb-8">
//        <motion.div 
//          className="bg-gray-800 bg-opacity-30 rounded-xl p-4 text-center"
//          whileHover={{ scale: 1.05 }}
//          transition={{ type: "spring", stiffness: 400, damping: 25 }}
//        >
//          <div className="text-2xl font-bold text-teal-400">92%</div>
//          <div className="text-sm text-gray-300">Accuracy</div>
//        </motion.div>
//        <motion.div 
//          className="bg-gray-800 bg-opacity-30 rounded-xl p-4 text-center"
//          whileHover={{ scale: 1.05 }}
//          transition={{ type: "spring", stiffness: 400, damping: 25 }}
//        >
//          <div className="text-2xl font-bold text-teal-400">150+</div>
//          <div className="text-sm text-gray-300">Farms Tracked</div>
//        </motion.div>
//        <motion.div 
//          className="bg-gray-800 bg-opacity-30 rounded-xl p-4 text-center"
//          whileHover={{ scale: 1.05 }}
//          transition={{ type: "spring", stiffness: 400, damping: 25 }}
//        >
//          <div className="text-2xl font-bold text-teal-400">12x</div>
//          <div className="text-sm text-gray-300">ROI</div>
//        </motion.div>
//      </div>

//      {/* Insight Block */}
//      <div className="bg-gray-800 bg-opacity-20 rounded-xl p-4 w-full">
//        <div className="space-y-3">
//          <motion.div 
//            className="h-2 rounded relative overflow-hidden"
//            initial={{ width: 0 }}
//            animate={{ width: '85%' }}
//            transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
//          >
//            <motion.div
//              className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-teal-400 to-teal-300"
//              animate={{ 
//                opacity: [0.4, 1, 0.4],
//                scaleX: [0.8, 1, 0.8]
//              }}
//              transition={{
//                duration: 2,
//                repeat: Infinity,
//                ease: "easeInOut"
//              }}
//            />
//          </motion.div>
//          <motion.div 
//            className="h-2 rounded relative overflow-hidden"
//            initial={{ width: 0 }}
//            animate={{ width: '70%' }}
//            transition={{ duration: 1.5, delay: 0.7, ease: "easeOut" }}
//          >
//            <motion.div
//              className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-teal-400 to-teal-300"
//              animate={{ 
//                opacity: [0.4, 1, 0.4],
//                scaleX: [0.8, 1, 0.8]
//              }}
//              transition={{
//                duration: 2,
//                repeat: Infinity,
//                ease: "easeInOut",
//                delay: 0.3
//              }}
//            />
//          </motion.div>
//          <motion.div 
//            className="h-2 rounded relative overflow-hidden"
//            initial={{ width: 0 }}
//            animate={{ width: '60%' }}
//            transition={{ duration: 1.5, delay: 0.9, ease: "easeOut" }}
//          >
//            <motion.div
//              className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-teal-400 to-teal-300"
//              animate={{ 
//                opacity: [0.4, 1, 0.4],
//                scaleX: [0.8, 1, 0.8]
//              }}
//              transition={{
//                duration: 2,
//                repeat: Infinity,
//                ease: "easeInOut",
//                delay: 0.6
//              }}
//            />
//          </motion.div>
//        </div>
//      </div>

//      {/* Subtle background glow */}
//      <div className="absolute inset-0 bg-gradient-to-br from-teal-500 via-transparent to-purple-500 opacity-5 pointer-events-none rounded-3xl" />
//    </motion.div>
//  );
// };

// export default Samplecard;

// =========================================================================

import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const Samplecard = () => {
  const { t } = useTranslation();

  return (
    <motion.div
      initial={{ opacity: 0, x: -50, y: 30, rotateX: -15, rotateY: 15 }}
      animate={{ opacity: 1, x: 0, y: 0, rotateX: -15, rotateY: 15 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      whileHover={{
        rotateX: 0,
        rotateY: 0,
        rotateZ: 0,
        scale: 1.05,
        transition: { type: "spring", stiffness: 300, damping: 20 },
      }}
      className="w-full cursor-grab relative max-w-xl h-96 p-6 bg-transparent border border-gray-800 border-opacity-10 rounded-3xl backdrop-blur-md shadow-2xl text-white overflow-hidden"
    >
      {/* Animated Top Border */}
      <div className="absolute top-0 left-0 w-full h-1 overflow-hidden rounded-t-3xl">
        <motion.div
          className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-transparent via-teal-400 to-transparent"
          animate={{ x: ["-100%", "100%"] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear",
            repeatDelay: 1,
          }}
        />
      </div>

      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-xl font-bold text-white">
          {t("samplecard_title")}
        </h2>

        {/* Neural AI Badge */}
        <div className="flex items-center space-x-2 px-3 py-1 border border-teal-400 rounded-full bg-opacity-10 text-white text-xs backdrop-blur-sm">
          <motion.div
            className="w-2 h-2 bg-teal-400 rounded-full"
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <span className="font-medium tracking-wide">
            {t("samplecard_badge")}
          </span>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        <motion.div
          className="bg-gray-800 bg-opacity-30 rounded-xl p-4 text-center"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
        >
          <div className="text-2xl font-bold text-teal-400">92%</div>
          <div className="text-sm text-gray-300">
            {t("samplecard_accuracy")}
          </div>
        </motion.div>

        <motion.div
          className="bg-gray-800 bg-opacity-30 rounded-xl p-4 text-center"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
        >
          <div className="text-2xl font-bold text-teal-400">150+</div>
          <div className="text-sm text-gray-300">
            {t("samplecard_farms")}
          </div>
        </motion.div>

        <motion.div
          className="bg-gray-800 bg-opacity-30 rounded-xl p-4 text-center"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
        >
          <div className="text-2xl font-bold text-teal-400">12x</div>
          <div className="text-sm text-gray-300">
            {t("samplecard_roi")}
          </div>
        </motion.div>
      </div>

      {/* Insight Bars */}
      <div className="bg-gray-800 bg-opacity-20 rounded-xl p-4 w-full">
        <div className="space-y-3">
          {[85, 70, 60].map((width, index) => (
            <motion.div
              key={index}
              className="h-2 rounded relative overflow-hidden"
              initial={{ width: 0 }}
              animate={{ width: `${width}%` }}
              transition={{
                duration: 1.5,
                delay: 0.5 + index * 0.2,
                ease: "easeOut",
              }}
            >
              <motion.div
                className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-teal-400 to-teal-300"
                animate={{
                  opacity: [0.4, 1, 0.4],
                  scaleX: [0.8, 1, 0.8],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.3,
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-500 via-transparent to-purple-500 opacity-5 pointer-events-none rounded-3xl" />
    </motion.div>
  );
};

export default Samplecard;
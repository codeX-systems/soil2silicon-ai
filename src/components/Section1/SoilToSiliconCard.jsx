import React from 'react';
import { motion } from "framer-motion"

const SoilToSiliconCard = () => {
 return (
   <div className="absolute right-0 mt-12 top-0 h-full w-[45%] text-white p-6 z-10 rounded-l-xl flex flex-col justify-center items-center gap-4 bg-transparent">
          
          <motion.div
            initial={{ opacity: 0, rotateY: -20, rotateX: 10 }}
            animate={{ opacity: 1, rotateY: 0, rotateX: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="perspective-[1500px] relative"
          >
            {/* Glowing Background */}
            <motion.div
              className="absolute -inset-4 z-0 rounded-[30px] bg-[#00ffcc33] blur-3xl"
              animate={{ opacity: [0.2, 0.4, 0.2] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            />

            {/* Card Content */}
            <motion.div
              className="relative z-10 bg-[#111111] w-[400px] h-[400px] border border-white/10 rounded-[28px] p-8 overflow-hidden backdrop-blur-lg transform-gpu shadow-[0_0_40px_#00ffcc44]"
              style={{ transformStyle: 'preserve-3d' }}
              initial={{ rotateY: -10, rotateX: 5 }}
              whileHover={{ rotateY: 0, rotateX: 0, scale: 1.02 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              data-interactive
            >
              {/* Scanning Line */}
              <motion.div
                className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#00ffcc] to-transparent"
                animate={{ x: ['-100%', '100%'] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              />

              {/* Header */}
              <div className="flex justify-between items-center mb-8">
                <h3 className="font-mono text-xl font-semibold text-white tracking-wide">QUANTUM_FARM.exe</h3>
                <div className="flex items-center gap-2 bg-[#00ffcc]/10 border border-[#00ffcc]/40 px-3 py-1 rounded-full">
                  <motion.div
                    className="w-2.5 h-2.5 bg-[#00ffcc] rounded-full"
                    animate={{
                      scale: [1, 1.2, 1],
                      boxShadow: ['0 0 10px #00ffcc', '0 0 20px #00ffcc', '0 0 10px #00ffcc']
                    }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                  <span className="text-xs font-medium text-[#00ffcc]">Neural Active</span>
                </div>
              </div>

              {/* Stats Section */}
              <div className="grid grid-cols-3 gap-4 text-center mb-8">
                {[
                  { value: '97.3%', label: 'Crop Optimization' },
                  { value: '5.2K', label: 'Hectares Monitored' },
                  { value: '+47%', label: 'Yield Enhancement' }
                ].map((metric, index) => (
                  <motion.div
                    key={index}
                    className="bg-white/5 border border-white/10 p-4 rounded-xl text-center backdrop-blur-sm hover:border-[#00ffcc]/40 transition-all"
                    whileHover={{ y: -4 }}
                    data-interactive
                  >
                    <motion.div
                      className="text-xl font-black mb-1 font-mono"
                      style={{
                        background: 'linear-gradient(135deg, #00ffcc, #4ecdc4)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                      }}
                      initial={{ scale: 0.9 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      {metric.value}
                    </motion.div>
                    <div className="text-xs text-white/70 leading-tight font-medium">
                      {metric.label}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Footer Glow/Placeholder */}
              <div className="h-30 bg-gradient-to-br from-[#00ffcc]/5 to-[#4ecdc4]/5 rounded-2xl border border-[#00ffcc]/10 relative overflow-hidden">
                <div className="absolute inset-0">
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute h-0.5 rounded-sm"
                      style={{
                        background: 'linear-gradient(90deg, #00ffcc, #4ecdc4)',
                        top: `${30 + i * 20}%`,
                        left: `${10 + i * 5}%`,
                        width: `${60 - i * 10}%`,
                      }}
                      animate={{
                        opacity: [0.3, 1, 0.3],
                        scaleX: [1, 1.2, 1],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        delay: i * 1,
                        ease: "easeInOut"
                      }}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
 );
};

export default SoilToSiliconCard;
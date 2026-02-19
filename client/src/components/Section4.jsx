// // src/components/Section4.jsx
// import React, { useState, useRef } from "react";
// import { motion, useInView } from "framer-motion";

// const aboutPoints = [
//   {
//     title: "Our Vision",
//     desc: "To drive innovation and empower communities through technology, making agriculture smarter and sustainable.",
//     details:
//       "We envision a world where agriculture is not just productive but also environmentally sustainable. Our vision is to bridge the gap between technology and traditional farming by integrating AI, IoT, and smart analytics, creating systems that not only improve yield but also preserve natural resources. By fostering collaboration between farmers, innovators, and policymakers, we aim to build a future where farming is resilient, adaptive, and future-proof.",
//     media: "/our_vision2.jpg",
//     type: "image",
//   },
//   {
//     title: "Our Mission",
//     desc: "Deliver cutting-edge solutions that make a tangible impact from soil to silicon, transforming agriculture into a future-ready industry.",
//     details:
//       "Our mission is to empower farmers with tools that reduce effort, maximize productivity, and enable data-driven decisions. From soil sensors to AI-driven crop monitoring, we aim to make technology affordable and accessible to every farmer worldwide.",
//     media: "/our_mission.mp4",
//     type: "video",
//   },
//   {
//     title: "Our Values",
//     desc: "Integrity, creativity, and sustainability guide everything we do, ensuring that innovation benefits both people and the planet.",
//     details:
//       "We believe that technology should serve humanity. Guided by integrity and sustainability, we ensure every solution is designed to have a positive social and environmental impact, while fostering creativity within our teams and communities.",
//     media: "/values.jpg",
//     type: "image",
//   },
// ];

// const problemSolutions = [
//   {
//     problem: "Soil Degradation",
//     desc: "Declining soil fertility and excessive chemical usage reduce crop yield.",
//     solution:
//       "We combat soil degradation using smart soil sensors and AI-driven nutrient management systems that restore balance and promote sustainability.",
//   },
//   {
//     problem: "Inefficient Water Use",
//     desc: "Over-irrigation wastes water and harms soil health.",
//     solution:
//       "Our precision irrigation technology powered by IoT ensures water is delivered only where and when it’s needed, reducing waste and improving yield.",
//   },
//   {
//     problem: "Lack of Smart Monitoring",
//     desc: "Farmers lack real-time insights on soil and crops.",
//     solution:
//       "By integrating IoT devices with silicon-based AI chips, we enable real-time monitoring of crops, soil, and weather patterns.",
//   },
// ];

// const Section4 = () => {
//   const ref = useRef(null);
//   const inView = useInView(ref, { amount: 0.3 });
//   const [selectedCard, setSelectedCard] = useState(null);

//   // close modal on outside click
//   const handleOverlayClick = (e) => {
//     if (e.target.id === "modal-overlay") {
//       setSelectedCard(null);
//     }
//   };

//   return (
//     <motion.section
//       ref={ref}
//       id="about"
//       className="h-auto w-full overflow-hidden bg-gray-900 flex flex-col items-center justify-center text-center py-20"
//     >
//       {/* 🔲 Title */}
//       <h1 className="text-5xl font-bold mb-16 text-white">About Us</h1>

//       <div className="max-w-7xl mx-auto px-6">
//         {/* 🌟 Vision / Mission / Values Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
//           {aboutPoints.map((point, i) => (
//             <motion.div
//               key={i}
//               initial={{ opacity: 0, y: 40 }}
//               animate={inView ? { opacity: 1, y: 0 } : {}}
//               transition={{ delay: i * 0.3, duration: 0.6, ease: "easeOut" }}
//               className="bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-700 hover:border-teal-400 hover:shadow-teal-500/30 transition-all duration-300 flex flex-col cursor-pointer"
//               onClick={() => setSelectedCard(point)}
//             >
//               {/* Media */}
//               <div className="w-full h-40 mb-4 overflow-hidden rounded-lg">
//                 {point.type === "image" ? (
//                   <img
//                     src={point.media}
//                     alt={point.title}
//                     className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
//                   />
//                 ) : (
//                   <video
//                     src={point.media}
//                     autoPlay
//                     loop
//                     muted
//                     className="w-full h-full object-cover"
//                   />
//                 )}
//               </div>

//               {/* Title */}
//               <h2 className="text-2xl font-semibold text-teal-400 mb-3">
//                 {point.title}
//               </h2>

//               {/* Short Description */}
//               <p className="text-gray-300 text-sm line-clamp-3">
//                 {point.desc}
//               </p>

//               {/* See More Button */}
//               <button
//                 onClick={() => setSelectedCard(point)}
//                 className="mt-3 text-teal-400 text-sm hover:underline"
//               >
//                 See more
//               </button>
//             </motion.div>
//           ))}
//         </div>

//         {/* 🌟 Problems & Solutions Section */}
//         <div className="w-full z-10 text-left mt-20 mb-12">
//           <motion.h2
//             initial={{ opacity: 0, scale: 0.8 }}
//             animate={inView ? { opacity: 1, scale: 1 } : {}}
//             transition={{ duration: 0.8, ease: "easeOut" }}
//             className="text-3xl md:text-4xl font-bold text-white"
//           >
//             Problems & Solutions
//           </motion.h2>
//           <motion.p
//             initial={{ opacity: 0 }}
//             animate={inView ? { opacity: 1 } : {}}
//             transition={{ delay: 0.3, duration: 0.8 }}
//             className="mt-2 text-gray-400 text-sm md:text-base"
//           >
//             Key agricultural challenges and our smart solutions.
//           </motion.p>
//         </div>

//         {/* Flip Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {problemSolutions.map((p, i) => (
//             <motion.div
//               key={i}
//               initial={{ opacity: 0, x: 100 }}
//               animate={inView ? { opacity: 1, x: 0 } : {}}
//               transition={{ delay: i * 0.3, duration: 0.8, ease: "easeOut" }}
//               className="group w-80 h-64 mx-auto perspective"
//             >
//               <div className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180">
//                 {/* Problem Side */}
//                 <div className="absolute inset-0 p-6 bg-red-900/30 border border-red-500/30 rounded-2xl shadow-lg backface-hidden flex flex-col justify-center">
//                   <h3 className="text-xl font-semibold text-red-300 mb-2">
//                     ❌ {p.problem}
//                   </h3>
//                   <p className="text-gray-300 text-sm">{p.desc}</p>
//                 </div>
//                 {/* Solution Side */}
//                 <div className="absolute inset-0 p-6 bg-teal-900/30 border border-teal-500/30 rounded-2xl shadow-lg backface-hidden rotate-y-180 flex flex-col justify-center">
//                   <h3 className="text-xl font-semibold text-teal-300 mb-2">
//                     ✅ Solution
//                   </h3>
//                   <p className="text-gray-300 text-sm">{p.solution}</p>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>

//       {/* 🔲 Modal Popup */}
//       {selectedCard && (
//         <div
//           id="modal-overlay"
//           onClick={handleOverlayClick}
//           className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
//         >
//           <motion.div
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={{ opacity: 1, scale: 1 }}
//             exit={{ opacity: 0 }}
//             className="bg-gray-800 rounded-2xl shadow-lg w-[90%] md:w-[70%] lg:w-[60%] flex flex-col md:flex-row overflow-hidden"
//           >
//             {/* Media Left */}
//             <div className="w-full md:w-1/2 h-64 md:h-auto">
//               {selectedCard.type === "image" ? (
//                 <img
//                   src={selectedCard.media}
//                   alt={selectedCard.title}
//                   className="w-full h-full object-cover"
//                 />
//               ) : (
//                 <video
//                   src={selectedCard.media}
//                   autoPlay
//                   loop
//                   muted
//                   className="w-full h-full object-cover"
//                 />
//               )}
//             </div>

//             {/* Content Right */}
//             <div className="w-full md:w-1/2 p-6 flex flex-col justify-between">
//               <div>
//                 <h2 className="text-2xl font-semibold text-teal-400 mb-3">
//                   {selectedCard.title}
//                 </h2>
//                 <div className="text-gray-300 text-sm max-h-64 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-teal-600 scrollbar-track-gray-700">
//                   {selectedCard.details}
//                 </div>
//               </div>

//               <button
//                 onClick={() => setSelectedCard(null)}
//                 className="mt-4 px-4 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition"
//               >
//                 Close
//               </button>
//             </div>
//           </motion.div>
//         </div>
//       )}

//       {/* Extra Styles for Flip Animation */}
//       <style>{`
//         .perspective { perspective: 1000px; }
//         .transform-style-preserve-3d { transform-style: preserve-3d; }
//         .backface-hidden { -webkit-backface-visibility: hidden; backface-visibility: hidden; }
//         .rotate-y-180 { transform: rotateY(180deg); }
//         /* Thin teal scrollbar */
//         .scrollbar-thin::-webkit-scrollbar { width: 6px; }
//         .scrollbar-thin::-webkit-scrollbar-thumb { background-color: #14b8a6; border-radius: 6px; }
//         .scrollbar-thin::-webkit-scrollbar-track { background: #1f2937; }
//       `}</style>
//     </motion.section>
//   );
// };

// export default Section4;

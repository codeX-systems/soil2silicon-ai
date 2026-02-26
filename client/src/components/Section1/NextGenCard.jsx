// import React from 'react';
// import { motion } from "framer-motion";

// const NextGenCard = () => {
//   return (
//     <motion.div
//     initial={{ y: 40, opacity: 0 }}
//     animate={{ y: 0, opacity: 1 }}
//     transition={{ duration: 0.5, ease: "easeOut" }}
//     className="flex items-center space-x-2 px-4 py-2 ml-40 mt-10 border-[0.1px] border-teal-900 rounded-full bg-teal-400/10 text-white w-fit backdrop-blur-sm shadow-sm">
      
//       {/* Small Circle */}
//       <motion.div 
//       animate={{ opacity: [1, 0.3, 1] }}
//       transition={{ duration: 2, repeat: Infinity }}
//       className="w-1.5 h-1.5 bg-teal-300 rounded-full"></motion.div>
      
//       {/* Text */}
//       <span className="text-sm font-medium">
//         Next-Gen Agriculture AI
//       </span>
//     </motion.div>
//   );
// };

// export default NextGenCard;

// ====================================================================================

import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const NextGenCard = () => {
  const { t } = useTranslation();

  return (
    <motion.div
      initial={{ y: 40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="flex items-center space-x-2 px-4 py-2 ml-40 mt-10 border-[0.1px] border-teal-900 rounded-full bg-teal-400/10 text-white w-fit backdrop-blur-sm shadow-sm"
    >
      {/* Small Circle */}
      <motion.div
        animate={{ opacity: [1, 0.3, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="w-1.5 h-1.5 bg-teal-300 rounded-full"
      />

      {/* Text */}
      <span className="text-sm font-medium">
        {t("nextgen_badge")}
      </span>
    </motion.div>
  );
};

export default NextGenCard;
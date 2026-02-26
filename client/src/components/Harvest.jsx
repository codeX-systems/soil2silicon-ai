// import React from "react";

// // Harvest Component
// // Updated Props:
// // - percentage: number (0-100)
// // - cropName: string (The name of the crop closest to harvest)
// // - isMultiple: boolean (Shows if there are other crops growing)

// export default function HarvestBar({ percentage = 0, cropName = "Crops", isMultiple = false }) {
//   // Determine color based on ripeness/readiness
//   const getBarColor = () => {
//     if (percentage < 30) return "bg-emerald-400";
//     if (percentage < 70) return "bg-green-500";
//     return "bg-gradient-to-r from-green-500 to-yellow-400";
//   };

//   return (
//     <div className="mx-4 my-2 p-6 bg-white rounded-3xl border border-green-100 shadow-sm relative overflow-hidden">
//       {/* Background Decorative Icon */}
//       <div className="absolute top-[-10px] right-[-10px] text-5xl opacity-5 pointer-events-none">🌾</div>
      
//       <div className="flex justify-between items-end mb-4">
//         <div>
//           <p className="text-[10px] font-black text-green-600 uppercase tracking-widest mb-1">
//             Growth Progress
//           </p>
//           <h3 className="text-xl font-bold text-green-900 flex items-center gap-2">
//             {cropName}
//             {isMultiple && (
//               <span className="text-[9px] bg-green-100 text-green-700 px-2 py-0.5 rounded-full border border-green-200 uppercase">
//                 + Others
//               </span>
//             )}
//           </h3>
//         </div>
//         <div className="text-right">
//           <span className="text-2xl font-black text-green-700">{percentage}%</span>
//         </div>
//       </div>

//       {/* Progress Bar Container */}
//       <div className="w-full bg-green-50 rounded-full h-4 overflow-hidden border border-green-100 shadow-inner">
//         {/* Filled Section */}
//         <div
//           className={`${getBarColor()} h-full rounded-full transition-all duration-1000 ease-out shadow-sm`}
//           style={{ width: `${percentage}%` }}
//         ></div>
//       </div>

//       {/* Status Message */}
//       <div className="mt-3 flex justify-between items-center text-[10px] font-bold uppercase tracking-tight">
//         <span className="text-green-600">
//             {percentage === 100 ? "Ready for Harvest" : "Maturing..."}
//         </span>
//         <span className="text-gray-400 italic font-normal capitalize">
//             {percentage > 80 ? "Ripening soon" : "In growth stage"}
//         </span>
//       </div>
//     </div>
//   );
// }

// =============================================================================================================

import React from "react";
import { useTranslation } from "react-i18next";

// Harvest Component
// Updated Props:
// - percentage: number (0-100)
// - cropName: string (The name of the crop closest to harvest)
// - isMultiple: boolean (Shows if there are other crops growing)

export default function HarvestBar({ percentage = 0, cropName = "Crops", isMultiple = false }) {
  const { t } = useTranslation();

  // Determine color based on ripeness/readiness
  const getBarColor = () => {
    if (percentage < 30) return "bg-emerald-400";
    if (percentage < 70) return "bg-green-500";
    return "bg-gradient-to-r from-green-500 to-yellow-400";
  };

  return (
    <div className="mx-4 my-2 p-6 bg-white rounded-3xl border border-green-100 shadow-sm relative overflow-hidden">
      {/* Background Decorative Icon */}
      <div className="absolute top-[-10px] right-[-10px] text-5xl opacity-5 pointer-events-none">🌾</div>
      
      <div className="flex justify-between items-end mb-4">
        <div>
          <p className="text-[10px] font-black text-green-600 uppercase tracking-widest mb-1">
            {t("harvest_growth_progress")}
          </p>
          <h3 className="text-xl font-bold text-green-900 flex items-center gap-2">
            {cropName}
            {isMultiple && (
              <span className="text-[9px] bg-green-100 text-green-700 px-2 py-0.5 rounded-full border border-green-200 uppercase">
                {t("harvest_others")}
              </span>
            )}
          </h3>
        </div>
        <div className="text-right">
          <span className="text-2xl font-black text-green-700">{percentage}%</span>
        </div>
      </div>

      {/* Progress Bar Container */}
      <div className="w-full bg-green-50 rounded-full h-4 overflow-hidden border border-green-100 shadow-inner">
        {/* Filled Section */}
        <div
          className={`${getBarColor()} h-full rounded-full transition-all duration-1000 ease-out shadow-sm`}
          style={{ width: `${percentage}%` }}
        ></div>
      </div>

      {/* Status Message */}
      <div className="mt-3 flex justify-between items-center text-[10px] font-bold uppercase tracking-tight">
        <span className="text-green-600">
          {percentage === 100
            ? t("harvest_ready")
            : t("harvest_maturing")}
        </span>
        <span className="text-gray-400 italic font-normal capitalize">
          {percentage > 80
            ? t("harvest_ripening_soon")
            : t("harvest_in_growth")}
        </span>
      </div>
    </div>
  );
}
// import React from "react";

// // Task Component
// // Props:
// // - count: number of active tasks

// export default function TaskCount({ count = 0 }) {
//   return (
//     <div className="flex flex-col items-center text-green-900">
//       {/* Number of Active Tasks */}
//       <div className="text-2xl font-bold">{count}</div>

//       {/* Label */}
//       <div className="text-sm text-green-700">Tasks Active</div>
//     </div>
//   );
// }
// ===================================================================

import React from "react";
import { useTranslation } from "react-i18next";

// Task Component
// Props:
// - count: number of active tasks

export default function TaskCount({ count = 0 }) {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-center text-green-900">
      {/* Number of Active Tasks */}
      <div className="text-2xl font-bold">{count}</div>

      {/* Label */}
      <div className="text-sm text-green-700">
        {t("task_active")}
      </div>
    </div>
  );
}
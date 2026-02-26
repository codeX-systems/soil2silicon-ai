// import React from "react";
// import Username from "./Username";
// import TaskCount from "./Task";

// import userIcon from "../assets/user_icon2.svg"; 

// export default function Header({ userImage, username, taskCount, onProfileClick }) {
//   return (
//     <header className="w-full bg-green-200 p-4 flex items-center justify-between shadow">
      
//       {/* Username Section - Left (Clicking this opens profile) */}
//       <div 
//         className="pl-2 flex items-center gap-4 cursor-pointer hover:opacity-80 transition-opacity"
//         onClick={onProfileClick}
//       >
//         <Username 
//           imageSrc={userImage || userIcon} 
//           username={username || "John"} 
//         />
//       </div>

//       {/* Task Section - Right */}
//       <div className="flex items-center gap-4">
//         <TaskCount count={taskCount} />

//         {/* Home button */}
//         <button
//           onClick={(e) => {
//             e.stopPropagation(); // 🛑 Stops the click from reaching the profile trigger
//             window.location.href = "/";
//           }} 
//           className="flex items-center gap-1 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-2xl font-semibold shadow-md transition-all duration-200"
//         >
//           🏠 Home
//         </button>
//       </div>
//     </header>
//   );
// }

// ====================================================================

import React from "react";
import { useTranslation } from "react-i18next";
import Username from "./Username";
import TaskCount from "./Task";

import userIcon from "../assets/user_icon2.svg"; 

export default function Header({ userImage, username, taskCount, onProfileClick }) {
  const { t, i18n } = useTranslation();

  const handleLanguageChange = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <header className="w-full bg-green-200 p-4 flex items-center justify-between shadow">
      
      {/* Username Section - Left (Clicking this opens profile) */}
      <div 
        className="pl-2 flex items-center gap-4 cursor-pointer hover:opacity-80 transition-opacity"
        onClick={onProfileClick}
      >
        <Username 
          imageSrc={userImage || userIcon} 
          username={username || "John"} 
        />
      </div>

      {/* Task Section - Right */}
      <div className="flex items-center gap-4">
        <TaskCount count={taskCount} />

        {/* 🌍 Language Dropdown */}
        <select
          onChange={handleLanguageChange}
          value={i18n.language}
          className="bg-white px-3 py-2 rounded-2xl shadow-md border border-green-400 text-sm font-medium focus:outline-none"
        >
          <option value="en">English</option>
          <option value="hi">हिंदी</option>
          <option value="bn">বাংলা</option>
        </select>

        {/* Home button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            window.location.href = "/";
          }} 
          className="flex items-center gap-1 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-2xl font-semibold shadow-md transition-all duration-200"
        >
          🏠 {t("nav_home")}
        </button>
      </div>
    </header>
  );
}
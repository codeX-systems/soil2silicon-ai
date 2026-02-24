import React from "react";
import Username from "./Username";
import TaskCount from "./Task";

import userIcon from "../assets/user_icon2.svg"; 
// adjust the path depending on where Header.jsx is located

export default function Header({ userImage, username, taskCount }) {
  return (
    <header className="w-full bg-green-200 p-4 flex items-center justify-between shadow">
      
      {/* Username Section - Left */}
      <div className="pl-2 flex items-center gap-4">
        <Username 
          imageSrc={userImage || userIcon} 
          username={username || "John"} 
        />
      </div>

      {/* Task Section - Right */}
      <div className="flex items-center gap-4">
        <TaskCount count={taskCount} />

        {/* Home button */}
        <button
          onClick={() => window.location.href = "/"} // go back to main site
          className="flex items-center gap-1 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-2xl font-semibold shadow-md transition-all duration-200"
        >
          🏠 Home
        </button>
      </div>
    </header>
  );
}
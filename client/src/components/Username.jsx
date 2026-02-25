import React from "react";

export default function Username({ imageSrc, username, size = 50 }) {
  // Generate a professional initial-based avatar if imageSrc is null or empty
  const avatarFallback = `https://ui-avatars.com/api/?name=${username || "User"}&background=15803d&color=fff`;

  return (
    <div className="flex items-center gap-3">
      {/* Profile Circle */}
      <div
        className="rounded-full overflow-hidden bg-green-100 flex items-center justify-center border-2 border-green-600 shadow-sm"
        style={{ width: size, height: size }}
      >
        <img
          src={imageSrc || avatarFallback}
          alt="User Profile"
          className="w-full h-full object-cover"
          onError={(e) => { e.target.src = avatarFallback; }}
        />
      </div>

      {/* Username Text - Left Aligned */}
      <div className="flex flex-col">
        <span className="text-[10px] font-bold text-green-700 uppercase tracking-wider leading-none">
          Welcome back,
        </span>
        <div className="text-green-900 text-lg font-black leading-tight">
          {username || "Farmer"}
        </div>
      </div>
    </div>
  );
}
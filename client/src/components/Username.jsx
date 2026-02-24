import React from "react";

// Username Component
// Props:
// - imageSrc: URL for user profile image
// - username: displayed username text
// - size: optional size for the profile circle (default: 64px)

export default function Username({ imageSrc, username, size = 64 }) {
  return (
    <div className="flex flex-col items-center space-y-2">
      {/* Profile Circle */}
      <div
        className="rounded-full overflow-hidden bg-green-200 flex items-center justify-center"
        style={{ width: size, height: size }}
      >
        {imageSrc ? (
          <img
            src={imageSrc}
            alt="User"
            className="w-full h-full object-cover"
          />
        ) : (
          <span className="text-green-800 text-sm">No Img</span>
        )}
      </div>

      {/* Username */}
      <div className="text-green-900 text-sm font-medium text-center">
        {username || "User Name"}
      </div>
    </div>
  );
}
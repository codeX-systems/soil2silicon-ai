import React from "react";

export default function Elements({ icon, title, onClick }) {
  return (
    <div className="flex flex-col items-center justify-center space-y-3">

      {/* Outer square */}
      <div
        className="w-20 h-20 bg-green-200 rounded-2xl shadow flex items-center justify-center cursor-pointer active:scale-95 transition"
        onClick={onClick}
      >
        {/* Normalized icon frame (fixes uneven PNG padding) */}
        <div className="w-14 h-14 flex items-center justify-center overflow-hidden">
          
          {typeof icon === "string" ? (
            <img
              src={icon}
              alt=""
              className="w-full h-full object-contain object-center block"
              style={{ padding: 0, margin: 0 }}
            />
          ) : (
            React.cloneElement(icon, {
              className: "w-12 h-12 mx-auto my-auto"
            })
          )}

        </div>
      </div>

      {/* Title */}
      <div className="text-sm text-green-900 font-semibold text-center leading-tight">
        {title}
      </div>
    </div>
  );
}

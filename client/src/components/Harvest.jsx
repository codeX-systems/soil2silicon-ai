import React from "react";

// Harvest Component
// Props:
// - percentage: number (0-100)
// - color: optional bar color
// - label: optional label text (default: "Ready to harvest")

export default function HarvestBar({ percentage = 0, color = "bg-green-500", label = "Ready to harvest" }) {
  return (
    <div className="w-full flex flex-col space-y-2 p-4">
      {/* Progress Bar Container */}
      <div className="w-full bg-green-200 rounded-full h-4 overflow-hidden">
        {/* Filled Section */}
        <div
          className={`${color} h-full rounded-full transition-all duration-500`}
          style={{ width: `${percentage}%` }}
        ></div>
      </div>

      {/* Percentage & Label */}
      <div className="flex justify-between text-sm text-green-800 font-medium">
        <span>{percentage}%</span>
        <span>{label}</span>
      </div>
    </div>
  );
}
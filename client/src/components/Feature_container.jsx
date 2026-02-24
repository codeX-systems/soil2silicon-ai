import React from "react";
import Elements from "./Elements";

// Feature Icon Container
// Props:
// - icon: JSX element to be passed into Elements
// - title: label below the icon
// - onClick: click handler for the icon

export default function FeatureContainer({ icon, title, onClick }) {
  return (
    <div className="flex flex-row items-center p-4 bg-green-100 rounded-2xl shadow-sm w-28 h-35 justify-between">

      {/* Elements Component */}
      <Elements 
        icon={icon} 
        title={title}
        onClick={onClick}
      />

    </div>
  );
}

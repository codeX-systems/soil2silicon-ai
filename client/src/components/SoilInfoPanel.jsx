import React, { useState } from "react";

const SoilInfoPanel = ({ soilData }) => {
  const [isOpen, setIsOpen] = useState(false);

  if (!soilData || soilData.length === 0) return null;

  return (
    <div className="mx-4 mb-6">

      {/* Toggle Header */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="cursor-pointer bg-yellow-600 text-white px-4 py-3 rounded-2xl flex justify-between items-center shadow-md"
      >
        <span className="font-bold">🧪 Soil Information</span>
        <span>{isOpen ? "▲" : "▼"}</span>
      </div>

      {/* Collapsible Content */}
      {isOpen && (
        <div className="p-4 bg-white rounded-3xl shadow-md mt-2 space-y-4">

          {soilData.map((s, idx) => (
            <div key={idx} className="p-4 bg-yellow-50 border rounded-2xl">

              <div className="flex gap-4 items-center">
                <img
                  src={s.image_url || "https://via.placeholder.com/100"}
                  alt="soil"
                  className="w-20 h-20 rounded-xl object-cover border"
                  onError={(e) => {
                    e.target.src = "https://via.placeholder.com/100";
                  }}
                />

                <div>
                  <h3 className="font-bold text-yellow-800">
                    {s.soil_type}
                  </h3>

                  <p className="text-xs mt-1">
                    N: {s.N} | P: {s.P} | K: {s.K}
                  </p>

                  <p className="text-xs">
                    💧 Moisture: {s.moisture_percent}%
                  </p>
                </div>
              </div>

            </div>
          ))}

        </div>
      )}
    </div>
  );
};

export default SoilInfoPanel;
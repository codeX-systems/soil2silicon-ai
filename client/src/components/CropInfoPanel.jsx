import { useEffect, useState } from "react";
import { fetchCropHealth } from "../api";

const CropInfoPanel = ({ currentCrops }) => {
  const [selectedCrop, setSelectedCrop] = useState(null);
  const [data, setData] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  // Auto select first crop
  useEffect(() => {
    if (currentCrops.length > 0) {
      setSelectedCrop(currentCrops[0].crop_name);
    }
  }, [currentCrops]);

  // Fetch crop info
  useEffect(() => {
    if (!selectedCrop) return;

    const load = async () => {
      try {
        const res = await fetchCropHealth(selectedCrop);
        setData(res);
      } catch (err) {
        console.error(err);
        setData(null);
      }
    };

    load();
  }, [selectedCrop]);

  // ---------check crop data
  useEffect(() => {
  console.log("CROP DATA:", data);
}, [data]);

  if (!currentCrops || currentCrops.length === 0) return null;

  return (
  <div className="mx-4 mb-6">

    {/* Toggle Header */}
    <div
      onClick={() => setIsOpen(!isOpen)}
      className="cursor-pointer bg-green-600 text-white px-4 py-3 rounded-2xl flex justify-between items-center shadow-md"
    >
      <span className="font-bold">
        🌱 {selectedCrop ? selectedCrop : "Crop"} Info
      </span>
      <span>{isOpen ? "▲" : "▼"}</span>
    </div>

    {/* Collapsible Content */}
    {isOpen && (
      <div className="p-4 bg-white rounded-3xl shadow-md mt-2">

        {/* Crop Selector */}
        <div className="flex gap-2 overflow-x-auto mb-4">
          {currentCrops.map((c) => (
            <button
              key={c.crop_id}
              onClick={() => setSelectedCrop(c.crop_name)}
              className={`px-4 py-2 rounded-full text-sm font-bold whitespace-nowrap ${
                selectedCrop === c.crop_name
                  ? "bg-green-600 text-white"
                  : "bg-green-100 text-green-700"
              }`}
            >
              {c.crop_name}
            </button>
          ))}
        </div>

        {!data ? (
          <p className="text-center text-gray-400">No data available</p>
        ) : (
          <>
            {/* Crop Header */}
            <div className="text-center mb-6">
              <img
                src={data.img}
                alt=""
                className="w-24 h-24 mx-auto rounded-full border"
              />
              <h2 className="text-xl font-bold mt-2">{data.crop_name}</h2>
              <p className="text-sm text-green-600 font-semibold">
                {data.bengali_name} | {data.hindi_name}
              </p>
            </div>

            {/* Diseases */}
            <div className="space-y-4 max-h-[400px] overflow-y-auto">
              {data.diseases.map((d, idx) => (
                <div key={idx} className="p-3 border rounded-xl bg-green-50">
                  <div className="flex gap-3">
                    <img
                      src={d.img}
                      alt=""
                      className="w-20 h-20 object-cover rounded-lg"
                    />

                    <div className="flex-1">
                      <h3 className="font-bold text-green-900">
                        {d.name}
                      </h3>
                      <p className="text-xs text-green-600">
                        {d.bengali_name} | {d.hindi_name}
                      </p>

                      <p className="text-xs mt-1">⏱ {d.time_weeks}</p>
                      <p className="text-xs mt-1">🛡 {d.prevention}</p>
                      <p className="text-xs mt-1">💊 {d.cure}</p>

                      <p className="text-xs mt-1 italic text-gray-600">
                        🌱 {d.organic_inputs}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

      </div>
    )}
  </div>
);
};

export default CropInfoPanel;
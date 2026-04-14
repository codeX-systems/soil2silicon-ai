import { useState } from "react";
import { searchCrops } from "../api";

const CropSearch = ({ onSelect }) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  let debounceTimer;

  const handleSearch = (value) => {
    setQuery(value);

    if (value.length < 2) {
      setResults([]);
      return;
    }

    clearTimeout(debounceTimer);

    debounceTimer = setTimeout(async () => {
      try {
        const data = await searchCrops(value);
        setResults(data);
      } catch (err) {
        console.error(err);
      }
    }, 300);
  };

  return (
    <div className="relative w-full">
      <input
        value={query}
        onChange={(e) => handleSearch(e.target.value)}
        placeholder="Search crop..."
        className="w-full px-4 py-3 rounded-xl border border-green-300 bg-green-50 focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
      />

      {results.length > 0 && (
        <div className="absolute w-full bg-white border border-green-200 rounded-xl mt-1 shadow-lg z-10 max-h-40 overflow-y-auto">
          {results.map((crop, idx) => (
            <div
              key={idx}
              onClick={() => {
                onSelect(crop);
                setQuery(crop);
                setResults([]);
              }}
              className="p-2 hover:bg-green-100 cursor-pointer text-sm"
            >
              {crop}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CropSearch;
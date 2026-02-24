import React, { useState } from "react";
import Header from "./Header";
import Harvest from "./Harvest";
import FeatureContainer from "./Feature_container";
import Footer from "./Footer";

// Assets
import grownew from "../assets/sapling.png";
import predict from "../assets/predict.png";
import weather from "../assets/weather.png";
import soil from "../assets/soil.png";
import trending from "../assets/trending.png";
import github from "../assets/github.png";

// ------------------
// Reusable Modal UI
// ------------------
const ModalWrapper = ({ children, close }) => (
  <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
    <div className="bg-white rounded-3xl w-full max-w-lg p-6 md:p-8 shadow-xl max-h-[90vh] overflow-y-auto relative">
      <button
        onClick={close}
        className="absolute top-4 right-4 text-gray-500 text-xl"
      >
        ✕
      </button>
      {children}
    </div>
  </div>
);

const ModalInput = ({ placeholder }) => (
  <input
    placeholder={placeholder}
    className="w-full px-4 py-3 rounded-xl border border-green-300 bg-green-50
               focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
  />
);

const ModalSelect = ({ label }) => (
  <select
    className="w-full px-4 py-3 rounded-xl border border-green-300 bg-green-50
               focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
  >
    <option>{label}</option>
  </select>
);

const ModalButtons = ({ close, action }) => (
  <div className="flex gap-3 mt-6">
    <button
      onClick={close}
      className="w-1/2 py-3 rounded-xl bg-gray-200 text-gray-800 font-medium"
    >
      Close
    </button>
    {action && (
      <button className="w-1/2 py-3 rounded-xl bg-green-600 text-white font-semibold">
        {action}
      </button>
    )}
  </div>
);

// ------------------
// Dashboard Component
// ------------------
const Dashboard = () => {
  const [activeModal, setActiveModal] = useState(null);
  const closeModal = () => setActiveModal(null);

  return (
    <div className="min-h-screen flex flex-col bg-green-50 text-green-900">
      <Header />

      <div className="p-4 text-xl font-bold text-green-700 text-center">
        Smart Farming
      </div>

      <Harvest percentage={55} />

      {/* Feature Icons */}
      <div className="p-4 flex flex-wrap justify-center gap-4">
        <FeatureContainer
          icon={<img src={grownew} className="w-10 h-10" />}
          title="Grow New"
          onClick={() => setActiveModal("grow")}
        />
        <FeatureContainer
          icon={<img src={predict} className="w-10 h-10" />}
          title="Predict New"
          onClick={() => setActiveModal("predict")}
        />
        <FeatureContainer
          icon={<img src={weather} className="w-10 h-10" />}
          title="Monitor Weather"
          onClick={() => setActiveModal("weather")}
        />
        <FeatureContainer
          icon={<img src={soil} className="w-10 h-10" />}
          title="Monitor Soil"
          onClick={() => setActiveModal("soil")}
        />
        <FeatureContainer
          icon={<img src={trending} className="w-10 h-10" />}
          title="Trending Crops"
          onClick={() => setActiveModal("trending")}
        />
        <FeatureContainer
          icon={<img src={github} className="w-10 h-10" />}
          title="GitHub"
          onClick={() =>
            window.open("https://github.com/codeX-systems24", "_blank")
          }
        />
      </div>

      <main className="flex-1 p-4" />

      <Footer />

      {/* ---------------- MODALS ---------------- */}

      {activeModal === "grow" && (
        <ModalWrapper close={closeModal}>
          <h2 className="text-xl font-bold text-green-700 mb-6 text-center">
            Grow New Crop
          </h2>
          <div className="space-y-4">
            <ModalInput placeholder="Crop Name" />
            <ModalSelect label="Soil Type" />
            <ModalSelect label="State" />
            <ModalSelect label="District" />
          </div>
          <ModalButtons close={closeModal} action="Check" />
        </ModalWrapper>
      )}

      {activeModal === "predict" && (
        <ModalWrapper close={closeModal}>
          <h2 className="text-xl font-bold text-green-700 mb-6 text-center">
            Predict Crop
          </h2>
          <div className="space-y-4">
            <ModalSelect label="Soil Type" />
            <ModalSelect label="Weather" />
            <ModalSelect label="Humidity" />
            <div className="grid grid-cols-2 gap-4">
              <ModalSelect label="Start Month" />
              <ModalSelect label="End Month" />
            </div>
            <ModalSelect label="District" />
            <ModalSelect label="State" />
          </div>
          <ModalButtons close={closeModal} action="Predict" />
        </ModalWrapper>
      )}

      {activeModal === "weather" && (
        <ModalWrapper close={closeModal}>
          <h2 className="text-xl font-bold text-green-700 mb-6 text-center">
            Current Weather
          </h2>
          <div className="bg-green-100 rounded-xl p-6 text-center">
            🌤 28°C • Humidity 65%
          </div>
          <ModalButtons close={closeModal} action="Change Location" />
        </ModalWrapper>
      )}

      {activeModal === "soil" && (
        <ModalWrapper close={closeModal}>
          <h2 className="text-xl font-bold text-green-700 mb-6 text-center">
            Soil Monitor
          </h2>
          <div className="space-y-4">
            <ModalSelect label="Soil Type" />
            <ModalInput placeholder="Nitrogen (N)" />
            <ModalInput placeholder="Phosphorus (P)" />
            <ModalInput placeholder="Potassium (K)" />
            <ModalInput placeholder="Moisture %" />
          </div>
          <ModalButtons close={closeModal} action="Add New" />
        </ModalWrapper>
      )}

      {activeModal === "trending" && (
        <ModalWrapper close={closeModal}>
          <h2 className="text-xl font-bold text-green-700 mb-6 text-center">
            Trending Crops
          </h2>
          <div className="h-48 bg-green-100 rounded-xl flex items-center justify-center text-green-700 font-medium">
            📊 Yield & Profit Charts
          </div>
          <ModalButtons close={closeModal} />
        </ModalWrapper>
      )}
    </div>
  );
};

export default Dashboard;
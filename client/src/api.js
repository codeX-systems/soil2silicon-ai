// src/api.js
const BASE_URL = "https://soil2silicon-ai.onrender.com"; // change if backend runs elsewhere

// Helper to get JWT token from localStorage
const getToken = () => localStorage.getItem("token");

// Generic fetch wrapper
const request = async (url, method = "GET", body = null) => {
  const headers = {
    "Content-Type": "application/json",
  };

  const token = getToken();
  if (token) headers["Authorization"] = `Bearer ${token}`;

  const options = { method, headers };
  if (body) options.body = JSON.stringify(body);

  const res = await fetch(BASE_URL + url, options);
  if (!res.ok) {
    const errData = await res.json();
    throw new Error(errData.detail || "API request failed");
  }
  return res.json();
};

// ------------------ TASKS ------------------
export const fetchTasks = () => request("/farm/tasks");
export const createTask = (data) => request("/farm/tasks", "POST", data);
export const updateTask = (task_id, data) => request(`/farm/tasks/${task_id}`, "PUT", data);
export const deleteTask = (task_id) => request(`/farm/tasks/${task_id}`, "DELETE");

// ------------------ CURRENT CROPS ------------------
export const fetchCurrentCrops = () => request("/farm/current_crops");
export const createCurrentCrop = (data) => request("/farm/current_crops", "POST", data);
export const updateCurrentCrop = (crop_id, data) => request(`/farm/current_crops/${crop_id}`, "PUT", data);
export const deleteCurrentCrop = (crop_id) => request(`/farm/current_crops/${crop_id}`, "DELETE");

// ------------------ PAST CROPS ------------------
export const fetchPastCrops = () => request("/farm/past_crops");
export const createPastCrop = (data) => request("/farm/past_crops", "POST", data);
export const updatePastCrop = (crop_id, data) => request(`/farm/past_crops/${crop_id}`, "PUT", data);
export const deletePastCrop = (crop_id) => request(`/farm/past_crops/${crop_id}`, "DELETE");

// ------------------ FIELD SOIL CONDITIONS ------------------
export const fetchFieldSoil = () => request("/farm/field_soil_conditions");
export const createFieldSoil = (data) => request("/farm/field_soil_conditions", "POST", data);
export const updateFieldSoil = (field_id, data) => request(`/farm/field_soil_conditions/${field_id}`, "PUT", data);
export const deleteFieldSoil = (field_id) => request(`/farm/field_soil_conditions/${field_id}`, "DELETE");

// ------------------ USER PROFILE (NEW) ------------------
// Fetches the full profile of the logged-in user from /auth/me
export const fetchUser = () => request("/auth/me");

// Updates user information (fullname, contact, state, district, profile_pic)
export const updateUser = (data) => request("/auth/update", "PUT", data);

// ------------------ ML PREDICTION (NEW) ------------------
/**
 * Sends environmental and soil data to the ML model for crop recommendation.
 * @param {Object} data - Contains state, districts, soil, start_month, etc.
 */
export const predictCrop = (data) => request("/predict/", "POST", data);

// -----------------------Crop Search-------------------------------------

export const searchCrops = async (query) => {
  const res = await fetch(`http://localhost:8000/farm/search-crops?q=${query}`, {
    credentials: "include"
  });

  if (!res.ok) {
    throw new Error("Failed to search crops");
  }

  return await res.json();
};

// ------------------------Crop Info---------------------------------------

export const fetchCropHealth = async (cropName) => {
  const res = await fetch(`http://localhost:8000/farm/crop-health/${cropName}`, {
    credentials: "include"
  });

  if (!res.ok) {
    throw new Error("Failed to fetch crop health");
  }

  return await res.json();
};

// ------------------------Soil Library----------------------------------------
export const fetchSoilLibrary = async () => {
  const res = await fetch("http://localhost:8000/farm/soil-library", {
    credentials: "include",
  });

  if (!res.ok) throw new Error("Failed to fetch soil library");

  return res.json();
};

// ------------------------Weather Integration----------------------------------
export const fetchWeather = async (lat, lon) => {
  try {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m`;

    const res = await fetch(url);
    const data = await res.json();

    return {
      temperature: data.current.temperature_2m,
      humidity: data.current.relative_humidity_2m,
      windSpeed: data.current.wind_speed_10m,
      weatherCode: data.current.weather_code
    };
  } catch (err) {
    throw new Error("Weather fetch failed");
  }
};

export const getLatLonFromDistrict = async (district, state = "West Bengal") => {
  try {
    const query = `${district}, ${state}, India`;

    const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query)}`;

    const res = await fetch(url);
    const data = await res.json();

    if (!data || data.length === 0) {
      throw new Error("Location not found");
    }

    return {
      lat: parseFloat(data[0].lat),
      lon: parseFloat(data[0].lon),
      displayName: data[0].display_name
    };
  } catch (err) {
    throw new Error("Geocoding failed");
  }
};

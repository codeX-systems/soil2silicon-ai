// src/api.js
const BASE_URL = "http://localhost:8000"; // change if backend runs elsewhere

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
// import React, { useState, useEffect } from "react";
// import Header from "./Header";
// import Harvest from "./Harvest";
// import FeatureContainer from "./Feature_container";
// import Footer from "./Footer";


// import grownew from "../assets/sapling.png";
// import predict from "../assets/predict.png";
// import weather from "../assets/weather.png";
// import soil from "../assets/soil.png";
// import trending from "../assets/trending.png";
// import github from "../assets/github.png";

// import {
//   fetchTasks,
//   createTask,
//   updateTask,
//   deleteTask,
//   fetchCurrentCrops,
//   createCurrentCrop,
//   fetchFieldSoil,
//   createFieldSoil,
//   fetchPastCrops,
//   fetchUser,
//   updateUser,
//   predictCrop // Added this
// } from "../api";

// // ------------------
// // Reusable Modal UI Components
// // ------------------
// const ModalWrapper = ({ children, close }) => (
//   <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
//     <div className="bg-white rounded-3xl w-full max-w-lg p-6 md:p-8 shadow-xl max-h-[90vh] overflow-y-auto relative text-green-900">
//       <button onClick={close} className="absolute top-4 right-4 text-gray-500 text-xl hover:text-red-500">✕</button>
//       {children}
//     </div>
//   </div>
// );

// const ModalInput = ({ label, ...props }) => (
//   <div className="w-full">
//     {label && <label className="text-[10px] font-bold text-green-700 ml-1 uppercase">{label}</label>}
//     <input
//       className="w-full px-4 py-3 rounded-xl border border-green-300 bg-green-50 focus:outline-none focus:ring-2 focus:ring-green-500 text-sm mt-1"
//       {...props}
//     />
//   </div>
// );

// const ModalSelect = ({ label, options = [], ...props }) => (
//   <div className="w-full">
//     {label && <label className="text-[10px] font-bold text-green-700 ml-1 uppercase">{label}</label>}
//     <select
//       className="w-full px-4 py-3 rounded-xl border border-green-300 bg-green-50 focus:outline-none focus:ring-2 focus:ring-green-500 text-sm mt-1"
//       {...props}
//     >
//       <option value="">Select {label}</option>
//       {options.map((opt, idx) => <option key={idx} value={opt}>{opt}</option>)}
//     </select>
//   </div>
// );

// const ModalButtons = ({ close, action, onAction }) => (
//   <div className="flex gap-3 mt-6">
//     <button onClick={close} className="w-1/2 py-3 rounded-xl bg-gray-200 text-gray-800 font-medium">Close</button>
//     {action && (
//       <button onClick={onAction} className="w-1/2 py-3 rounded-xl bg-green-600 text-white font-semibold shadow-md hover:bg-green-700 transition">
//         {action}
//       </button>
//     )}
//   </div>
// );

// // ------------------
// // Main Dashboard
// // ------------------
// const Dashboard = () => {
//   const [activeModal, setActiveModal] = useState(null);
//   const [expandedTaskIds, setExpandedTaskIds] = useState([]);

//   // User and Data States
//   const [user, setUser] = useState({ 
//     fullname: "Farmer", username: "", email: "", contact: "", state: "", district: "", profile_pic: "" 
//   });
  
//   const [tasks, setTasks] = useState([]);
//   const [currentCrops, setCurrentCrops] = useState([]);
//   const [pastCrops, setPastCrops] = useState([]);
//   const [soilData, setSoilData] = useState([]);

//   // Form States
//   const [newTask, setNewTask] = useState({
//     title: "", description: "", status: "active", priority: "medium", category: "", due: "", notes: ""
//   });

//   const [newCropData, setNewCropData] = useState({
//     crop_name: "", start_month: 1, end_month: 4, planted_date: "", expected_harvest_date: "", status: "growing", notes: ""
//   });

//   const [newSoilData, setNewSoilData] = useState({
//     soil_type: "", N: 0, P: 0, K: 0, moisture_percent: 0, field_id: ""
//   });

//   // ML Prediction States
//   const [predictionResult, setPredictionResult] = useState(null);
//   const [isPredicting, setIsPredicting] = useState(false);
//   const [predictionInput, setPredictionInput] = useState({
//     soil: "Loamy soil",
//     start_month: 1,
//     end_month: 4,
//     rainfall: "Moderate",
//     sunlight: "High",
//     temperature: "Moderate",
//     humidity: "Moderate"
//   });

//   const closeModal = () => {
//     setActiveModal(null);
//     setPredictionResult(null); // Reset ML result on close
//   };

//   const loadAllData = async () => {
//     try {
//       const userData = await fetchUser();
//       if(userData) setUser(userData);

//       const [t, cc, pc, s] = await Promise.all([
//         fetchTasks(),
//         fetchCurrentCrops(),
//         fetchPastCrops(),
//         fetchFieldSoil()
//       ]);
//       setTasks(t || []);
//       setCurrentCrops(cc || []);
//       setPastCrops(pc || []);
//       setSoilData(s || []);
//     } catch (err) {
//       console.error("Failed to load data:", err.message);
//     }
//   };

//   useEffect(() => {
//     loadAllData();
//   }, []);

//   // ---------- Handlers ----------
//   const handleUpdateProfile = async () => {
//     try {
//       await updateUser(user);
//       alert("Profile updated successfully!");
//       closeModal();
//     } catch (err) { alert("Update failed: " + err.message); }
//   };

//   const handleAddTask = async () => {
//     try {
//       await createTask({ ...newTask, due_date: newTask.due });
//       await loadAllData();
//       closeModal();
//     } catch (err) { alert(err.message); }
//   };

//   const handleCompleteTask = async (task) => {
//     try {
//       await updateTask(task.task_id, { ...task, status: "completed" });
//       await loadAllData();
//     } catch (err) { alert(err.message); }
//   };

//   const handleDeleteTask = async (id) => {
//     try {
//       await deleteTask(id);
//       await loadAllData();
//       setExpandedTaskIds(prev => prev.filter(taskId => taskId !== id));
//     } catch (err) { console.error(err.message); }
//   };

//   const handleAddCrop = async () => {
//     try {
//       const payload = { 
//         ...newCropData, 
//         crop_id: `crop_${Date.now()}`,
//         planted_date: new Date(newCropData.planted_date).toISOString(),
//         expected_harvest_date: new Date(newCropData.expected_harvest_date).toISOString()
//       };
//       await createCurrentCrop(payload);
//       await loadAllData();
//       closeModal();
//     } catch (err) { alert(err.message); }
//   };

//   const handleAddSoil = async () => {
//     try {
//       const payload = { ...newSoilData, field_id: `f_${Date.now()}` };
//       await createFieldSoil(payload);
//       await loadAllData();
//       closeModal();
//     } catch (err) { alert(err.message); }
//   };

//   const handleRunPrediction = async () => {
//     if (!user.district) {
//       alert("Please set your district in the Profile modal first!");
//       setActiveModal("profile");
//       return;
//     }

//     setIsPredicting(true);
//     try {
//       const payload = {
//         ...predictionInput,
//         state: user.state || "West Bengal",
//         districts: user.district
//       };
//       const data = await predictCrop(payload);
//       setPredictionResult(data.recommended_crop);
//     } catch (err) {
//       alert("Prediction Error: " + err.message);
//     } finally {
//       setIsPredicting(false);
//     }
//   };

//   const toggleExpandTask = (id) => {
//     setExpandedTaskIds(prev => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]);
//   };

//   const getHarvestStats = () => {
//     if (currentCrops.length === 0) return { percent: 0, topCrop: "Ready to Harvest", isMultiple: false };
//     const cropProgressMap = currentCrops.map(crop => {
//       const start = new Date(crop.planted_date).getTime();
//       const end = new Date(crop.expected_harvest_date).getTime();
//       const now = Date.now();
//       let progress = ((now - start) / (end - start)) * 100;
//       progress = Math.max(0, Math.min(100, Math.round(progress)));
//       return { name: crop.crop_name, progress };
//     });
//     const topCrop = [...cropProgressMap].sort((a, b) => b.progress - a.progress)[0];
//     return {
//       percent: topCrop.progress,
//       topCrop: topCrop.name,
//       isMultiple: currentCrops.length > 1
//     };
//   };

//   const stats = getHarvestStats();

//   return (
//     <div className="min-h-screen flex flex-col bg-green-50 text-green-900 font-sans">
//       <Header 
//         userImage={user.profile_pic} 
//         username={user.fullname} 
//         taskCount={tasks.filter(t => t.status !== 'completed').length} 
//         onProfileClick={() => setActiveModal("profile")} 
//       />

//       <div className="p-4 text-xl font-bold text-green-700 text-center uppercase tracking-widest">Farm Control Center</div>
      
//       <Harvest 
//         percentage={stats.percent} 
//         cropName={stats.topCrop} 
//         isMultiple={stats.isMultiple}
//       />

//       <div className="p-4 flex flex-wrap justify-center gap-4">
//         <FeatureContainer icon={<img src={grownew} className="w-10 h-10" alt="" />} title="Grow New" onClick={() => setActiveModal("grow")} />
//         <FeatureContainer icon={<img src={predict} className="w-10 h-10" alt="" />} title="Predict" onClick={() => setActiveModal("predict")} />
//         <FeatureContainer icon={<img src={weather} className="w-10 h-10" alt="" />} title="Weather" onClick={() => setActiveModal("weather")} />
//         <FeatureContainer icon={<img src={soil} className="w-10 h-10" alt="" />} title="Soil" onClick={() => setActiveModal("soil")} />
//         <FeatureContainer icon={<img src={trending} className="w-10 h-10" alt="" />} title="Trends" onClick={() => setActiveModal("trending")} />
//         <FeatureContainer icon={<img src={github} className="w-10 h-10" alt="" />} title="GitHub" onClick={() => window.open("https://github.com/codeX-systems24", "_blank")} />
//       </div>

//       <div className="p-6 bg-white/50 backdrop-blur-sm mx-4 rounded-3xl border border-green-100 shadow-inner flex flex-wrap justify-center gap-8 mb-8">
//         <div className="cursor-pointer text-center group" onClick={() => setActiveModal("tasks")}>
//             <div className="text-3xl transition group-hover:scale-110">📝</div>
//             <div className="text-[10px] font-black text-green-700 mt-1 uppercase">Tasks</div>
//         </div>
//         <div className="cursor-pointer text-center group" onClick={() => setActiveModal("currentCrops")}>
//             <div className="text-3xl transition group-hover:scale-110">🌾</div>
//             <div className="text-[10px] font-black text-green-700 mt-1 uppercase">Crops</div>
//         </div>
//         <div className="cursor-pointer text-center group" onClick={() => setActiveModal("soilDataView")}>
//             <div className="text-3xl transition group-hover:scale-110">🧪</div>
//             <div className="text-[10px] font-black text-green-700 mt-1 uppercase">Soil Logs</div>
//         </div>
//       </div>

//       <main className="flex-1" />
//       <Footer />

//       {/* --- MODALS --- */}

//       {/* Profile Modal */}
//       {activeModal === "profile" && (
//         <ModalWrapper close={closeModal}>
//           <div className="text-center mb-6">
//              <div className="w-20 h-20 mx-auto bg-green-100 rounded-full border-2 border-green-600 overflow-hidden mb-2">
//                 <img src={user.profile_pic || `https://ui-avatars.com/api/?name=${user.fullname}&background=15803d&color=fff`} className="w-full h-full object-cover" alt="Avatar" />
//              </div>
//              <h2 className="text-xl font-bold text-green-900">{user.fullname}</h2>
//              <p className="text-[10px] font-bold text-green-600 uppercase">@{user.username}</p>
//           </div>
//           <div className="space-y-3">
//              <ModalInput label="Full Name" value={user.fullname} onChange={(e) => setUser({...user, fullname: e.target.value})} />
//              <ModalInput label="Contact Number" value={user.contact} onChange={(e) => setUser({...user, contact: e.target.value})} />
//              <div className="grid grid-cols-2 gap-3">
//                 <ModalInput label="State" value={user.state} onChange={(e) => setUser({...user, state: e.target.value})} />
//                 <ModalInput label="District" value={user.district} onChange={(e) => setUser({...user, district: e.target.value})} />
//              </div>
//              <ModalInput label="Profile Pic URL" value={user.profile_pic || ""} onChange={(e) => setUser({...user, profile_pic: e.target.value})} />
//           </div>
//           <ModalButtons close={closeModal} action="Save Changes" onAction={handleUpdateProfile} />
//         </ModalWrapper>
//       )}

//       {/* Tasks List Modal */}
//       {activeModal === "tasks" && (
//         <ModalWrapper close={closeModal}>
//           <h2 className="text-xl font-bold text-green-700 mb-4 text-center">Your Tasks</h2>
//           <button onClick={() => setActiveModal("createTask")} className="w-full py-3 mb-6 rounded-xl bg-green-600 text-white font-semibold shadow hover:bg-green-700 transition">➕ Add New Task</button>
//           <div className="space-y-4">
//             {tasks.map(task => (
//               <div key={task.task_id} className={`p-4 rounded-2xl border transition-all ${task.status === 'completed' ? 'bg-gray-100 opacity-60' : 'bg-green-100 border-green-200'}`}>
//                 <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleExpandTask(task.task_id)}>
//                   <div>
//                     <div className={`font-bold ${task.status === 'completed' ? 'line-through text-gray-400' : 'text-green-900'}`}>{task.title}</div>
//                     <div className="text-[10px] font-bold text-green-600 uppercase">Due: {task.due_date?.slice(0, 10)}</div>
//                   </div>
//                   <div className={`px-3 py-1 rounded-full text-[10px] font-black uppercase ${task.status === 'completed' ? 'bg-gray-400' : 'bg-green-500'} text-white`}>{task.status}</div>
//                 </div>
//                 {expandedTaskIds.includes(task.task_id) && (
//                   <div className="mt-4 pt-4 border-t border-green-300 space-y-3 text-sm">
//                     <p><span className="font-bold">Info:</span> {task.description || "No description provided."}</p>
//                     <div className="flex gap-2">
//                       {task.status !== 'completed' && <button onClick={() => handleCompleteTask(task)} className="flex-1 py-2 bg-green-600 text-white rounded-lg font-bold text-xs">Mark Done</button>}
//                       <button onClick={() => handleDeleteTask(task.task_id)} className="flex-1 py-2 bg-red-500 text-white rounded-lg font-bold text-xs">Delete</button>
//                     </div>
//                   </div>
//                 )}
//               </div>
//             ))}
//           </div>
//           <ModalButtons close={closeModal} />
//         </ModalWrapper>
//       )}

//       {/* Predict Modal (UPDATED with AI Logic) */}
//       {activeModal === "predict" && (
//         <ModalWrapper close={closeModal}>
//           <h2 className="text-xl font-bold text-green-700 mb-6 text-center">AI Crop Predictor</h2>
          
//           {!predictionResult ? (
//             <div className="space-y-4">
//               <div className="p-3 bg-green-50 rounded-xl border border-green-200 text-center">
//                 <p className="text-[10px] font-black text-green-600 uppercase tracking-widest">
//                   Region: {user.district || "Not Set"}, {user.state || "West Bengal"}
//                 </p>
//               </div>

//               <ModalSelect 
//                 label="Soil Type" 
//                 options={["Loamy soil", "Clayey soil", "Sandy soil", "Alluvial soil"]} 
//                 value={predictionInput.soil}
//                 onChange={(e) => setPredictionInput({...predictionInput, soil: e.target.value})}
//               />
              
//               <div className="grid grid-cols-2 gap-3">
//                 <ModalSelect label="Rainfall" options={["Low", "Moderate", "High"]} 
//                   value={predictionInput.rainfall} onChange={(e) => setPredictionInput({...predictionInput, rainfall: e.target.value})} />
//                 <ModalSelect label="Sunlight" options={["Moderate", "High"]} 
//                   value={predictionInput.sunlight} onChange={(e) => setPredictionInput({...predictionInput, sunlight: e.target.value})} />
//               </div>

//               <div className="grid grid-cols-2 gap-3">
//                 <ModalSelect label="Temperature" options={["Cool", "Moderate", "Warm"]} 
//                   value={predictionInput.temperature} onChange={(e) => setPredictionInput({...predictionInput, temperature: e.target.value})} />
//                 <ModalSelect label="Humidity" options={["Low", "Moderate", "High"]} 
//                   value={predictionInput.humidity} onChange={(e) => setPredictionInput({...predictionInput, humidity: e.target.value})} />
//               </div>

//               <div className="grid grid-cols-2 gap-3">
//                 <ModalInput type="number" label="Start Month" value={predictionInput.start_month} 
//                   onChange={(e) => setPredictionInput({...predictionInput, start_month: parseInt(e.target.value)})} />
//                 <ModalInput type="number" label="End Month" value={predictionInput.end_month} 
//                   onChange={(e) => setPredictionInput({...predictionInput, end_month: parseInt(e.target.value)})} />
//               </div>

//               <ModalButtons 
//                 close={closeModal} 
//                 action={isPredicting ? "Analyzing..." : "Run AI Prediction"} 
//                 onAction={handleRunPrediction} 
//               />
//             </div>
//           ) : (
//             <div className="text-center py-8 bg-green-50 rounded-3xl border-2 border-green-200">
//               <div className="text-6xl mb-4 animate-bounce">🌱</div>
//               <h3 className="text-[10px] uppercase font-black text-green-600 tracking-widest">Recommendation</h3>
//               <div className="text-4xl font-black text-green-900 mt-2">{predictionResult}</div>
//               <p className="text-xs text-green-700 mt-4 px-6 italic">Based on regional trends in {user.district}.</p>
//               <button 
//                 onClick={() => setPredictionResult(null)} 
//                 className="mt-8 px-8 py-3 bg-green-600 text-white rounded-2xl font-bold text-sm shadow-md hover:bg-green-700 transition"
//               >
//                 Try Again
//               </button>
//             </div>
//           )}
//         </ModalWrapper>
//       )}

//       {/* Trending Modal */}
//       {activeModal === "trending" && (
//         <ModalWrapper close={closeModal}>
//           <h2 className="text-xl font-bold text-green-700 mb-6 text-center">Market Trends</h2>
//           <div className="space-y-3">
//              <div className="p-3 bg-green-100 rounded-xl flex justify-between items-center">
//                 <span className="font-bold">Organic Wheat</span>
//                 <span className="text-green-600 font-bold">↑ 12%</span>
//              </div>
//              <div className="p-3 bg-green-100 rounded-xl flex justify-between items-center">
//                 <span className="font-bold">Mustard Seeds</span>
//                 <span className="text-green-600 font-bold">↑ 8%</span>
//              </div>
//              <div className="p-3 bg-yellow-50 rounded-xl text-center text-[10px] italic">
//                 Trends updated from regional wholesale indices.
//              </div>
//           </div>
//           <ModalButtons close={closeModal} />
//         </ModalWrapper>
//       )}

//       {/* Soil Logs View */}
//       {activeModal === "soilDataView" && (
//         <ModalWrapper close={closeModal}>
//           <h2 className="text-xl font-bold text-green-700 mb-4 text-center">Soil Records</h2>
//           <div className="space-y-3">
//             {soilData.map((s, idx) => (
//               <div key={idx} className="p-4 bg-green-50 border border-green-200 rounded-2xl">
//                 <div className="flex justify-between font-bold text-green-900">
//                   <span>{s.soil_type}</span>
//                   <span className="text-xs text-green-600">{s.moisture_percent}% Moisture</span>
//                 </div>
//                 <div className="mt-2 flex gap-4 text-xs font-mono">
//                   <span>N: {s.N}</span> <span>P: {s.P}</span> <span>K: {s.K}</span>
//                 </div>
//               </div>
//             ))}
//             {soilData.length === 0 && <p className="text-center py-6 text-gray-400">No soil data logged yet.</p>}
//           </div>
//           <ModalButtons close={closeModal} />
//         </ModalWrapper>
//       )}

//       {/* Weather Modal */}
//       {activeModal === "weather" && (
//         <ModalWrapper close={closeModal}>
//           <h2 className="text-xl font-bold text-green-700 mb-6 text-center">Weather Insights</h2>
//           <div className="bg-gradient-to-br from-blue-400 to-blue-600 rounded-3xl p-8 text-center text-white shadow-lg">
//             <div className="text-6xl mb-4">☀️</div>
//             <div className="text-4xl font-black">31°C</div>
//             <p className="mt-2 font-medium opacity-90">Clear Skies • Humidity 42%</p>
//             <div className="mt-4 pt-4 border-t border-white/20 text-xs italic">Optimal for irrigation today.</div>
//           </div>
//           <ModalButtons close={closeModal} />
//         </ModalWrapper>
//       )}

//       {/* Create Task Modal */}
//       {activeModal === "createTask" && (
//         <ModalWrapper close={closeModal}>
//           <h2 className="text-xl font-bold text-green-700 mb-6 text-center">New Task</h2>
//           <div className="space-y-4">
//             <ModalInput label="Title" placeholder="Watering fields..." onChange={(e) => setNewTask({...newTask, title: e.target.value})} />
//             <ModalInput label="Description" placeholder="Details..." onChange={(e) => setNewTask({...newTask, description: e.target.value})} />
//             <ModalInput type="date" label="Due Date" onChange={(e) => setNewTask({...newTask, due: e.target.value})} />
//           </div>
//           <ModalButtons close={closeModal} action="Create Task" onAction={handleAddTask} />
//         </ModalWrapper>
//       )}

//       {/* Soil Entry Modal */}
//       {activeModal === "soil" && (
//         <ModalWrapper close={closeModal}>
//           <h2 className="text-xl font-bold text-green-700 mb-6 text-center">Soil Update</h2>
//           <div className="space-y-4">
//             <ModalSelect label="Soil Type" options={["Alluvial", "Black", "Red", "Loamy"]} onChange={(e) => setNewSoilData({...newSoilData, soil_type: e.target.value})} />
//             <div className="grid grid-cols-3 gap-2">
//                 <ModalInput type="number" label="N" placeholder="N" onChange={(e) => setNewSoilData({...newSoilData, N: parseInt(e.target.value)})} />
//                 <ModalInput type="number" label="P" placeholder="P" onChange={(e) => setNewSoilData({...newSoilData, P: parseInt(e.target.value)})} />
//                 <ModalInput type="number" label="K" placeholder="K" onChange={(e) => setNewSoilData({...newSoilData, K: parseInt(e.target.value)})} />
//             </div>
//             <ModalInput type="number" label="Moisture %" placeholder="0" onChange={(e) => setNewSoilData({...newSoilData, moisture_percent: parseFloat(e.target.value)})} />
//           </div>
//           <ModalButtons close={closeModal} action="Save Records" onAction={handleAddSoil} />
//         </ModalWrapper>
//       )}

//       {/* Grow New Modal */}
//       {activeModal === "grow" && (
//         <ModalWrapper close={closeModal}>
//           <h2 className="text-xl font-bold text-green-700 mb-6 text-center">Start New Growth</h2>
//           <div className="space-y-4">
//             <ModalInput label="Crop Name" placeholder="e.g. Wheat" onChange={(e) => setNewCropData({...newCropData, crop_name: e.target.value})} />
//             <div className="grid grid-cols-2 gap-4">
//                 <ModalInput type="number" label="Start Month (1-12)" onChange={(e) => setNewCropData({...newCropData, start_month: parseInt(e.target.value)})} />
//                 <ModalInput type="number" label="End Month" onChange={(e) => setNewCropData({...newCropData, end_month: parseInt(e.target.value)})} />
//             </div>
//             <ModalInput type="date" label="Planted Date" onChange={(e) => setNewCropData({...newCropData, planted_date: e.target.value})} />
//             <ModalInput type="date" label="Exp. Harvest" onChange={(e) => setNewCropData({...newCropData, expected_harvest_date: e.target.value})} />
//           </div>
//           <ModalButtons close={closeModal} action="Register Crop" onAction={handleAddCrop} />
//         </ModalWrapper>
//       )}

//       {/* Current Crops View */}
//       {activeModal === "currentCrops" && (
//         <ModalWrapper close={closeModal}>
//           <h2 className="text-xl font-bold text-green-700 mb-4 text-center">Active Crops</h2>
//           <div className="space-y-3">
//             {currentCrops.map(c => (
//               <div key={c.crop_id} className="p-4 bg-white border border-green-200 rounded-2xl flex justify-between items-center">
//                 <div>
//                   <div className="font-bold text-green-900">{c.crop_name}</div>
//                   <div className="text-[10px] bg-green-600 text-white px-2 py-0.5 rounded-full font-bold uppercase inline-block mt-1">{c.status}</div>
//                 </div>
//                 <div className="text-xs font-bold text-green-700">Month: {c.start_month}</div>
//               </div>
//             ))}
//             {currentCrops.length === 0 && <p className="text-center py-6 text-gray-400">No active crops.</p>}
//           </div>
//           <ModalButtons close={closeModal} />
//         </ModalWrapper>
//       )}

//     </div>
//   );
// };

// export default Dashboard;

// =======================================================================================

import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import Header from "./Header";
import Harvest from "./Harvest";
import FeatureContainer from "./Feature_container";
import Footer from "./Footer";


import grownew from "../assets/sapling.png";
import predict from "../assets/predict.png";
import weather from "../assets/weather.png";
import soil from "../assets/soil.png";
import trending from "../assets/trending.png";
import github from "../assets/github.png";

import {
  fetchTasks,
  createTask,
  updateTask,
  deleteTask,
  fetchCurrentCrops,
  createCurrentCrop,
  fetchFieldSoil,
  createFieldSoil,
  fetchPastCrops,
  fetchUser,
  updateUser,
  predictCrop // Added this
} from "../api";

/*
  TODO: Add the following keys to your i18n `en` translation (then translate to other languages).
  Format: "key": "English text"

  "auto_contact_number": "Contact Number"
  "auto_profile_pic_url": "Profile Pic URL"
  "auto_due": "Due"
  "auto_info": "Info:"
  "auto_no_description_provided": "No description provided."
  "auto_mark_done": "Mark Done"
  "auto_delete": "Delete"
  "auto_region_prefix": "Region:"
  "auto_based_on_regional_trends": "Based on regional trends in {{region}}."
  "auto_trends_updated": "Trends updated from regional wholesale indices."
  "auto_optimal_for_irrigation_today": "Optimal for irrigation today."
  "auto_new_task": "New Task"
  "auto_title_label": "Title"
  "auto_description_label": "Description"
  "auto_due_date_label": "Due Date"
  "auto_soil_update": "Soil Update"
  "auto_save_records": "Save Records"
  "auto_start_new_growth": "Start New Growth"
  "auto_start_month_label": "Start Month (1-12)"
  "auto_end_month_label": "End Month"
  "auto_register_crop": "Register Crop"
  "auto_active_crops": "Active Crops"
  "auto_no_active_crops": "No active crops."
  "auto_create_task": "Create Task"
*/

 // ------------------
 // Reusable Modal UI Components
 // ------------------
const ModalWrapper = ({ children, close }) => (
  <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
    <div className="bg-white rounded-3xl w-full max-w-lg p-6 md:p-8 shadow-xl max-h-[90vh] overflow-y-auto relative text-green-900">
      <button onClick={close} className="absolute top-4 right-4 text-gray-500 text-xl hover:text-red-500">✕</button>
      {children}
    </div>
  </div>
);

const ModalInput = ({ label, ...props }) => (
  <div className="w-full">
    {label && <label className="text-[10px] font-bold text-green-700 ml-1 uppercase">{label}</label>}
    <input
      className="w-full px-4 py-3 rounded-xl border border-green-300 bg-green-50 focus:outline-none focus:ring-2 focus:ring-green-500 text-sm mt-1"
      {...props}
    />
  </div>
);

const ModalSelect = ({ label, options = [], ...props }) => (
  <div className="w-full">
    {label && <label className="text-[10px] font-bold text-green-700 ml-1 uppercase">{label}</label>}
    <select
      className="w-full px-4 py-3 rounded-xl border border-green-300 bg-green-50 focus:outline-none focus:ring-2 focus:ring-green-500 text-sm mt-1"
      {...props}
    >
      <option value="">{label ? `-- ${label} --` : ""}</option>
      {options.map((opt, idx) => <option key={idx} value={opt}>{opt}</option>)}
    </select>
  </div>
);

const ModalButtons = ({ close, action, onAction }) => {
  const { t } = useTranslation();
  return (
    <div className="flex gap-3 mt-6">
      <button onClick={close} className="w-1/2 py-3 rounded-xl bg-gray-200 text-gray-800 font-medium">{t('close')}</button>
      {action && (
        <button onClick={onAction} className="w-1/2 py-3 rounded-xl bg-green-600 text-white font-semibold shadow-md hover:bg-green-700 transition">
          {action}
        </button>
      )}
    </div>
  );
};

// ------------------
// Main Dashboard
// ------------------
const Dashboard = () => {
  const { t, i18n } = useTranslation();

  const [activeModal, setActiveModal] = useState(null);
  const [expandedTaskIds, setExpandedTaskIds] = useState([]);

  // User and Data States
  const [user, setUser] = useState({ 
    fullname: "Farmer", username: "", email: "", contact: "", state: "", district: "", profile_pic: "" 
  });
  
  const [tasks, setTasks] = useState([]);
  const [currentCrops, setCurrentCrops] = useState([]);
  const [pastCrops, setPastCrops] = useState([]);
  const [soilData, setSoilData] = useState([]);

  // Form States
  const [newTask, setNewTask] = useState({
    title: "", description: "", status: "active", priority: "medium", category: "", due: "", notes: ""
  });

  const [newCropData, setNewCropData] = useState({
    crop_name: "", start_month: 1, end_month: 4, planted_date: "", expected_harvest_date: "", status: "growing", notes: ""
  });

  const [newSoilData, setNewSoilData] = useState({
    soil_type: "", N: 0, P: 0, K: 0, moisture_percent: 0, field_id: ""
  });

  // ML Prediction States
  const [predictionResult, setPredictionResult] = useState(null);
  const [isPredicting, setIsPredicting] = useState(false);
  const [predictionInput, setPredictionInput] = useState({
    soil: "Loamy soil",
    start_month: 1,
    end_month: 4,
    rainfall: "Moderate",
    sunlight: "High",
    temperature: "Moderate",
    humidity: "Moderate"
  });
// ======================================================
const speak = (text) => {
  if (!window.speechSynthesis || !text) return;

  const voices = window.speechSynthesis.getVoices();
  const voice = voices.find(v => v.name.includes("Ravi")) || voices[0]; // en-IN voice fallback

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.voice = voice;
  utterance.lang = "en-IN";
  utterance.rate = 1;
  utterance.pitch = 1;

  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(utterance);
};
// =======================================================
  const closeModal = () => {
    setActiveModal(null);
    setPredictionResult(null); // Reset ML result on close
  };

  const loadAllData = async () => {
    try {
      const userData = await fetchUser();
      if(userData) setUser(userData);

      const [tks, cc, pc, s] = await Promise.all([
        fetchTasks(),
        fetchCurrentCrops(),
        fetchPastCrops(),
        fetchFieldSoil()
      ]);
      setTasks(tks || []);
      setCurrentCrops(cc || []);
      setPastCrops(pc || []);
      setSoilData(s || []);
    } catch (err) {
      console.error("Failed to load data:", err.message);
    }
  };

  useEffect(() => {
    loadAllData();
  }, []);

  // ---------- Handlers ----------
  const handleUpdateProfile = async () => {
    try {
      await updateUser(user);
      alert(t('save_changes') ? t('save_changes') + " " + t('success') ?? "Profile updated successfully!" : "Profile updated successfully!");
      closeModal();
    } catch (err) { alert("Update failed: " + err.message); }
  };

  const handleAddTask = async () => {
    try {
      await createTask({ ...newTask, due_date: newTask.due });
      await loadAllData();
      closeModal();
    } catch (err) { alert(err.message); }
  };

  const handleCompleteTask = async (task) => {
    try {
      await updateTask(task.task_id, { ...task, status: "completed" });
      await loadAllData();
    } catch (err) { alert(err.message); }
  };

  const handleDeleteTask = async (id) => {
    try {
      await deleteTask(id);
      await loadAllData();
      setExpandedTaskIds(prev => prev.filter(taskId => taskId !== id));
    } catch (err) { console.error(err.message); }
  };

  const handleAddCrop = async () => {
    try {
      const payload = { 
        ...newCropData, 
        crop_id: `crop_${Date.now()}`,
        planted_date: new Date(newCropData.planted_date).toISOString(),
        expected_harvest_date: new Date(newCropData.expected_harvest_date).toISOString()
      };
      await createCurrentCrop(payload);
      await loadAllData();
      closeModal();
    } catch (err) { alert(err.message); }
  };

  const handleAddSoil = async () => {
    try {
      const payload = { ...newSoilData, field_id: `f_${Date.now()}` };
      await createFieldSoil(payload);
      await loadAllData();
      closeModal();
    } catch (err) { alert(err.message); }
  };

  const handleRunPrediction = async () => {
    if (!user.district) {
      alert(t('auto_contact_number') ? t('auto_contact_number') : "Please set your district in the Profile modal first!");
      setActiveModal("profile");
      return;
    }

    setIsPredicting(true);
    try {
      const payload = {
        ...predictionInput,
        state: user.state || "West Bengal",
        districts: user.district
      };
      const data = await predictCrop(payload);
      setPredictionResult(data.recommended_crop);
    } catch (err) {
      alert("Prediction Error: " + err.message);
    } finally {
      setIsPredicting(false);
    }
  };

  const toggleExpandTask = (id) => {
    setExpandedTaskIds(prev => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]);
  };

  const getHarvestStats = () => {
    if (currentCrops.length === 0) return { percent: 0, topCrop: t('exp_harvest') || "Ready to Harvest", isMultiple: false };
    const cropProgressMap = currentCrops.map(crop => {
      const start = new Date(crop.planted_date).getTime();
      const end = new Date(crop.expected_harvest_date).getTime();
      const now = Date.now();
      let progress = ((now - start) / (end - start)) * 100;
      progress = Math.max(0, Math.min(100, Math.round(progress)));
      return { name: crop.crop_name, progress };
    });
    const topCrop = [...cropProgressMap].sort((a, b) => b.progress - a.progress)[0];
    return {
      percent: topCrop.progress,
      topCrop: topCrop.name,
      isMultiple: currentCrops.length > 1
    };
  };

  const stats = getHarvestStats();

  return (
    <div className="min-h-screen flex flex-col bg-green-50 text-green-900 font-sans">
      <Header 
        userImage={user.profile_pic} 
        username={user.fullname} 
        taskCount={tasks.filter(t => t.status !== 'completed').length} 
        onProfileClick={() => setActiveModal("profile")} 
      />

      <div className="p-4 text-xl font-bold text-green-700 text-center uppercase tracking-widest">{t('dash_title')}</div>
      
      <Harvest 
        percentage={stats.percent} 
        cropName={stats.topCrop} 
        isMultiple={stats.isMultiple}
      />

      <div className="p-4 flex flex-wrap justify-center gap-4">
        <FeatureContainer icon={<img src={grownew} className="w-10 h-10" alt="" />} title={t('feature_grow')} onClick={() => setActiveModal("grow")} />
        <FeatureContainer icon={<img src={predict} className="w-10 h-10" alt="" />} title={t('feature_predict')} onClick={() => setActiveModal("predict")} />
        <FeatureContainer icon={<img src={weather} className="w-10 h-10" alt="" />} title={t('feature_weather')} onClick={() => setActiveModal("weather")} />
        <FeatureContainer icon={<img src={soil} className="w-10 h-10" alt="" />} title={t('feature_soil')} onClick={() => setActiveModal("soil")} />
        <FeatureContainer icon={<img src={trending} className="w-10 h-10" alt="" />} title={t('feature_trends')} onClick={() => setActiveModal("trending")} />
        <FeatureContainer icon={<img src={github} className="w-10 h-10" alt="" />} title={"GitHub"} onClick={() => window.open("https://github.com/codeX-systems24", "_blank")} />
      </div>

      <div className="p-6 bg-white/50 backdrop-blur-sm mx-4 rounded-3xl border border-green-100 shadow-inner flex flex-wrap justify-center gap-8 mb-8">
        <div className="cursor-pointer text-center group" onClick={() => setActiveModal("tasks")}>
            <div className="text-3xl transition group-hover:scale-110">📝</div>
            <div className="text-[10px] font-black text-green-700 mt-1 uppercase">{t('label_tasks')}</div>
        </div>
        <div className="cursor-pointer text-center group" onClick={() => setActiveModal("currentCrops")}>
            <div className="text-3xl transition group-hover:scale-110">🌾</div>
            <div className="text-[10px] font-black text-green-700 mt-1 uppercase">{t('label_crops')}</div>
        </div>
        <div className="cursor-pointer text-center group" onClick={() => setActiveModal("soilDataView")}>
            <div className="text-3xl transition group-hover:scale-110">🧪</div>
            <div className="text-[10px] font-black text-green-700 mt-1 uppercase">{t('label_soil_logs')}</div>
        </div>
      </div>

      <main className="flex-1" />
      <Footer />

      {/* --- MODALS --- */}

      {/* Profile Modal */}
      {activeModal === "profile" && (
        <ModalWrapper close={closeModal}>
          <div className="text-center mb-6">
             <div className="w-20 h-20 mx-auto bg-green-100 rounded-full border-2 border-green-600 overflow-hidden mb-2">
                <img src={user.profile_pic || `https://ui-avatars.com/api/?name=${user.fullname}&background=15803d&color=fff`} className="w-full h-full object-cover" alt="Avatar" />
             </div>
             <h2 className="text-xl font-bold text-green-900">{user.fullname}</h2>
             <p className="text-[10px] font-bold text-green-600 uppercase">@{user.username}</p>
          </div>
          <div className="space-y-3">
             <ModalInput label={t('full_name')} value={user.fullname} onChange={(e) => setUser({...user, fullname: e.target.value})} />
             <ModalInput label={t('auto_contact_number') || "Contact Number"} value={user.contact} onChange={(e) => setUser({...user, contact: e.target.value})} />
             <div className="grid grid-cols-2 gap-3">
                <ModalInput label={t('state')} value={user.state} onChange={(e) => setUser({...user, state: e.target.value})} />
                <ModalInput label={t('district')} value={user.district} onChange={(e) => setUser({...user, district: e.target.value})} />
             </div>
             <ModalInput label={t('auto_profile_pic_url') || "Profile Pic URL"} value={user.profile_pic || ""} onChange={(e) => setUser({...user, profile_pic: e.target.value})} />
          </div>
          <ModalButtons close={closeModal} action={t('save_changes')} onAction={handleUpdateProfile} />
        </ModalWrapper>
      )}

      {/* Tasks List Modal */}
      {activeModal === "tasks" && (
        <ModalWrapper close={closeModal}>
          <h2 className="text-xl font-bold text-green-700 mb-4 text-center">{t('label_tasks')}</h2>
          <button onClick={() => setActiveModal("createTask")} className="w-full py-3 mb-6 rounded-xl bg-green-600 text-white font-semibold shadow hover:bg-green-700 transition">➕ {t('btn_add_task')}</button>
          <div className="space-y-4">
            {tasks.map(task => (
              <div key={task.task_id} className={`p-4 rounded-2xl border transition-all ${task.status === 'completed' ? 'bg-gray-100 opacity-60' : 'bg-green-100 border-green-200'}`}>
                <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleExpandTask(task.task_id)}>
                  <div>
                    <div className={`font-bold ${task.status === 'completed' ? 'line-through text-gray-400' : 'text-green-900'}`}>{task.title}</div>
                    <div className="text-[10px] font-bold text-green-600 uppercase">{t('auto_due') || 'Due'}: {task.due_date?.slice(0, 10)}</div>
                  </div>
                  <div className={`px-3 py-1 rounded-full text-[10px] font-black uppercase ${task.status === 'completed' ? 'bg-gray-400' : 'bg-green-500'} text-white`}>{task.status}</div>
                </div>
                {expandedTaskIds.includes(task.task_id) && (
                  <div className="mt-4 pt-4 border-t border-green-300 space-y-3 text-sm">
                    <p><span className="font-bold">{t('auto_info') || 'Info:'}</span> {task.description || (t('auto_no_description_provided') || "No description provided.")}</p>
                    <div className="flex gap-2">
                      {task.status !== 'completed' && <button onClick={() => handleCompleteTask(task)} className="flex-1 py-2 bg-green-600 text-white rounded-lg font-bold text-xs">{t('auto_mark_done') || 'Mark Done'}</button>}
                      <button onClick={() => handleDeleteTask(task.task_id)} className="flex-1 py-2 bg-red-500 text-white rounded-lg font-bold text-xs">{t('auto_delete') || 'Delete'}</button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
          <ModalButtons close={closeModal} />
        </ModalWrapper>
      )}

      {/* Predict Modal (UPDATED with AI Logic) */}
      {activeModal === "predict" && (
        <ModalWrapper close={closeModal}>
          <h2 className="text-xl font-bold text-green-700 mb-6 text-center">{t('predict_title')}</h2>
          
          {!predictionResult ? (
            <div className="space-y-4">
              <div className="p-3 bg-green-50 rounded-xl border border-green-200 text-center">
                <p className="text-[10px] font-black text-green-600 uppercase tracking-widest">
                  {t('auto_region_prefix') || "Region:"} {user.district || (t('district') || "Not Set")}, {user.state || "West Bengal"}
                </p>
              </div>

              <ModalSelect 
                label={t('soil_type')} 
                options={["Loamy soil", "Clayey soil", "Sandy soil", "Alluvial soil"]} 
                value={predictionInput.soil}
                onChange={(e) => setPredictionInput({...predictionInput, soil: e.target.value})}
              />
              
              <div className="grid grid-cols-2 gap-3">
                <ModalSelect label={t('auto_rainfall') || "Rainfall"} options={["Low", "Moderate", "High"]} 
                  value={predictionInput.rainfall} onChange={(e) => setPredictionInput({...predictionInput, rainfall: e.target.value})} />
                <ModalSelect label={t('auto_sunlight') || "Sunlight"} options={["Moderate", "High"]} 
                  value={predictionInput.sunlight} onChange={(e) => setPredictionInput({...predictionInput, sunlight: e.target.value})} />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <ModalSelect label={t('auto_temperature') || "Temperature"} options={["Cool", "Moderate", "Warm"]} 
                  value={predictionInput.temperature} onChange={(e) => setPredictionInput({...predictionInput, temperature: e.target.value})} />
                <ModalSelect label={t('auto_humidity') || "Humidity"} options={["Low", "Moderate", "High"]} 
                  value={predictionInput.humidity} onChange={(e) => setPredictionInput({...predictionInput, humidity: e.target.value})} />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <ModalInput type="number" label={t('auto_start_month_label') || "Start Month"} value={predictionInput.start_month} 
                  onChange={(e) => setPredictionInput({...predictionInput, start_month: parseInt(e.target.value)})} />
                <ModalInput type="number" label={t('auto_end_month_label') || "End Month"} value={predictionInput.end_month} 
                  onChange={(e) => setPredictionInput({...predictionInput, end_month: parseInt(e.target.value)})} />
              </div>

              <ModalButtons 
                close={closeModal} 
                action={isPredicting ? t('analyzing') : t('run_prediction')} 
                onAction={handleRunPrediction} 
              />
            </div>
          ) : (
            <div className="text-center py-8 bg-green-50 rounded-3xl border-2 border-green-200">
              <div className="text-6xl mb-4 animate-bounce">🌱</div>
              <h3 className="text-[10px] uppercase font-black text-green-600 tracking-widest">{t('recommendation')}</h3>
 <div className="w-full flex justify-center mt-4">
  <div className="flex items-center gap-3">
    <p className="text-xl font-semibold text-center">
      {t(`crops.${predictionResult}`)}
    </p>

    <button
      onClick={() => speak(t(`crops.${predictionResult}`))}
      className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded-md"
    >
      🔊
    </button>
  </div>
</div>
              <p className="text-xs text-green-700 mt-4 px-6 italic">{t('auto_based_on_regional_trends', { region: user.district || "" }) || `Based on regional trends in ${user.district}.`}</p>
              <button 
                onClick={() => setPredictionResult(null)} 
                className="mt-8 px-8 py-3 bg-green-600 text-white rounded-2xl font-bold text-sm shadow-md hover:bg-green-700 transition"
              >
                {t('try_again')}
              </button>
            </div>
          )}
        </ModalWrapper>
      )}

      {/* Trending Modal */}
      {activeModal === "trending" && (
        <ModalWrapper close={closeModal}>
          <h2 className="text-xl font-bold text-green-700 mb-6 text-center">{t('market_trends')}</h2>
          <div className="space-y-3">
             <div className="p-3 bg-green-100 rounded-xl flex justify-between items-center">
                <span className="font-bold">Organic Wheat</span>
                <span className="text-green-600 font-bold">↑ 12%</span>
             </div>
             <div className="p-3 bg-green-100 rounded-xl flex justify-between items-center">
                <span className="font-bold">Mustard Seeds</span>
                <span className="text-green-600 font-bold">↑ 8%</span>
             </div>
             <div className="p-3 bg-yellow-50 rounded-xl text-center text-[10px] italic">
                {t('auto_trends_updated') || "Trends updated from regional wholesale indices."}
             </div>
          </div>
          <ModalButtons close={closeModal} />
        </ModalWrapper>
      )}

      {/* Soil Logs View */}
      {activeModal === "soilDataView" && (
        <ModalWrapper close={closeModal}>
          <h2 className="text-xl font-bold text-green-700 mb-4 text-center">{t('label_soil_logs')}</h2>
          <div className="space-y-3">
            {soilData.map((s, idx) => (
              <div key={idx} className="p-4 bg-green-50 border border-green-200 rounded-2xl">
                <div className="flex justify-between font-bold text-green-900">
                  <span>{s.soil_type}</span>
                  <span className="text-xs text-green-600">{s.moisture_percent}% {t('moisture') || 'Moisture'}</span>
                </div>
                <div className="mt-2 flex gap-4 text-xs font-mono">
                  <span>N: {s.N}</span> <span>P: {s.P}</span> <span>K: {s.K}</span>
                </div>
              </div>
            ))}
            {soilData.length === 0 && <p className="text-center py-6 text-gray-400">{t('no_data')}</p>}
          </div>
          <ModalButtons close={closeModal} />
        </ModalWrapper>
      )}

      {/* Weather Modal */}
      {activeModal === "weather" && (
        <ModalWrapper close={closeModal}>
          <h2 className="text-xl font-bold text-green-700 mb-6 text-center">{t('weather_insights')}</h2>
          <div className="bg-gradient-to-br from-blue-400 to-blue-600 rounded-3xl p-8 text-center text-white shadow-lg">
            <div className="text-6xl mb-4">☀️</div>
            <div className="text-4xl font-black">31°C</div>
            <p className="mt-2 font-medium opacity-90">Clear Skies • Humidity 42%</p>
            <div className="mt-4 pt-4 border-t border-white/20 text-xs italic">{t('auto_optimal_for_irrigation_today') || "Optimal for irrigation today."}</div>
          </div>
          <ModalButtons close={closeModal} />
        </ModalWrapper>
      )}

      {/* Create Task Modal */}
      {activeModal === "createTask" && (
        <ModalWrapper close={closeModal}>
          <h2 className="text-xl font-bold text-green-700 mb-6 text-center">{t('auto_new_task') || "New Task"}</h2>
          <div className="space-y-4">
            <ModalInput label={t('auto_title_label') || "Title"} placeholder={t('auto_placeholder_watering') || "Watering fields..."} onChange={(e) => setNewTask({...newTask, title: e.target.value})} />
            <ModalInput label={t('auto_description_label') || "Description"} placeholder={t('auto_placeholder_details') || "Details..."} onChange={(e) => setNewTask({...newTask, description: e.target.value})} />
            <ModalInput type="date" label={t('auto_due_date_label') || "Due Date"} onChange={(e) => setNewTask({...newTask, due: e.target.value})} />
          </div>
          <ModalButtons close={closeModal} action={t('auto_create_task') || "Create Task"} onAction={handleAddTask} />
        </ModalWrapper>
      )}

      {/* Soil Entry Modal */}
      {activeModal === "soil" && (
        <ModalWrapper close={closeModal}>
          <h2 className="text-xl font-bold text-green-700 mb-6 text-center">{t('auto_soil_update') || "Soil Update"}</h2>
          <div className="space-y-4">
            <ModalSelect label={t('soil_type')} options={["Alluvial", "Black", "Red", "Loamy"]} onChange={(e) => setNewSoilData({...newSoilData, soil_type: e.target.value})} />
            <div className="grid grid-cols-3 gap-2">
                <ModalInput type="number" label="N" placeholder="N" onChange={(e) => setNewSoilData({...newSoilData, N: parseInt(e.target.value)})} />
                <ModalInput type="number" label="P" placeholder="P" onChange={(e) => setNewSoilData({...newSoilData, P: parseInt(e.target.value)})} />
                <ModalInput type="number" label="K" placeholder="K" onChange={(e) => setNewSoilData({...newSoilData, K: parseInt(e.target.value)})} />
            </div>
            <ModalInput type="number" label={`${t('moisture') || 'Moisture'} %`} placeholder="0" onChange={(e) => setNewSoilData({...newSoilData, moisture_percent: parseFloat(e.target.value)})} />
          </div>
          <ModalButtons close={closeModal} action={t('auto_save_records') || "Save Records"} onAction={handleAddSoil} />
        </ModalWrapper>
      )}

      {/* Grow New Modal */}
      {activeModal === "grow" && (
        <ModalWrapper close={closeModal}>
          <h2 className="text-xl font-bold text-green-700 mb-6 text-center">{t('auto_start_new_growth') || "Start New Growth"}</h2>
          <div className="space-y-4">
            <ModalInput label={t('crop_name')} placeholder={t('auto_placeholder_crop_example') || "e.g. Wheat"} onChange={(e) => setNewCropData({...newCropData, crop_name: e.target.value})} />
            <div className="grid grid-cols-2 gap-4">
                <ModalInput type="number" label={t('auto_start_month_label') || "Start Month (1-12)"} onChange={(e) => setNewCropData({...newCropData, start_month: parseInt(e.target.value)})} />
                <ModalInput type="number" label={t('auto_end_month_label') || "End Month"} onChange={(e) => setNewCropData({...newCropData, end_month: parseInt(e.target.value)})} />
            </div>
            <ModalInput type="date" label={t('planted_date')} onChange={(e) => setNewCropData({...newCropData, planted_date: e.target.value})} />
            <ModalInput type="date" label={t('exp_harvest')} onChange={(e) => setNewCropData({...newCropData, expected_harvest_date: e.target.value})} />
          </div>
          <ModalButtons close={closeModal} action={t('auto_register_crop') || "Register Crop"} onAction={handleAddCrop} />
        </ModalWrapper>
      )}

      {/* Current Crops View */}
      {activeModal === "currentCrops" && (
        <ModalWrapper close={closeModal}>
          <h2 className="text-xl font-bold text-green-700 mb-4 text-center">{t('label_crops')}</h2>
          <div className="space-y-3">
            {currentCrops.map(c => (
              <div key={c.crop_id} className="p-4 bg-white border border-green-200 rounded-2xl flex justify-between items-center">
                <div>
                  <div className="font-bold text-green-900">{c.crop_name}</div>
                  <div className="text-[10px] bg-green-600 text-white px-2 py-0.5 rounded-full font-bold uppercase inline-block mt-1">{c.status}</div>
                </div>
                <div className="text-xs font-bold text-green-700">Month: {c.start_month}</div>
              </div>
            ))}
            {currentCrops.length === 0 && <p className="text-center py-6 text-gray-400">{t('no_data')}</p>}
          </div>
          <ModalButtons close={closeModal} />
        </ModalWrapper>
      )}

    </div>
  );
};

export default Dashboard;
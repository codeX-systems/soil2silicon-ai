// import React, { useState } from 'react';
// import { Eye, EyeOff } from 'lucide-react'; // Make sure to: npm install lucide-react

// const AuthForm = () => {
//   const [isLogin, setIsLogin] = useState(true);
//   const [showPassword, setShowPassword] = useState(false);
//   const [formData, setFormData] = useState({
//     username: '', fullname: '', contact: '', email: '', 
//     state: '', district: '', password: ''
//   });

//   const handleChange = (e) => setFormData({...formData, [e.target.name]: e.target.value});

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const baseUrl = "http://localhost:8000/auth";
//     const endpoint = isLogin ? `${baseUrl}/login` : `${baseUrl}/register`;
    
//     const payload = isLogin 
//       ? { contact: formData.contact, password: formData.password }
//       : formData;

//     try {
//       const res = await fetch(endpoint, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(payload),
//       });

//       const data = await res.json();

//       if (!res.ok) {
//         alert(data.detail || "Authentication failed");
//         return;
//       }

//       if (isLogin) {
//         localStorage.setItem("token", data.access_token);
//         window.dispatchEvent(new Event("storage")); 
//         window.location.href = "/app";
//       } else {
//         alert("Registration successful!");
//         setIsLogin(true);
//       }
//     } catch (err) {
//       alert("Server error. Try again.");
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-[#0f172a] px-4 py-12">
//       {/* Glow Effect Background */}
//       <div className="absolute w-64 h-64 bg-emerald-500/20 rounded-full blur-[120px] -z-10"></div>

//       <div className="w-full max-w-md bg-slate-900/80 border border-slate-800 backdrop-blur-xl p-6 md:p-10 rounded-2xl shadow-2xl">
//         <h2 className="text-center text-3xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent mb-8">
//           {isLogin ? 'Welcome Back' : 'Join Us'}
//         </h2>

//         <form className="space-y-5" onSubmit={handleSubmit}>
//           {!isLogin && (
//             <div className="space-y-4 animate-in fade-in duration-500">
//               <input name="username" placeholder="Username" onChange={handleChange} 
//                 className="w-full p-3 bg-slate-800 border border-slate-700 rounded-xl text-white focus:ring-2 focus:ring-emerald-500 outline-none transition-all placeholder:text-slate-500" required />
              
//               <input name="fullname" placeholder="Full Name" onChange={handleChange} 
//                 className="w-full p-3 bg-slate-800 border border-slate-700 rounded-xl text-white focus:ring-2 focus:ring-emerald-500 outline-none transition-all placeholder:text-slate-500" required />
              
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                 <input name="state" placeholder="State" onChange={handleChange} 
//                   className="w-full p-3 bg-slate-800 border border-slate-700 rounded-xl text-white focus:ring-2 focus:ring-emerald-500 outline-none transition-all placeholder:text-slate-500" required />
//                 <input name="district" placeholder="District" onChange={handleChange} 
//                   className="w-full p-3 bg-slate-800 border border-slate-700 rounded-xl text-white focus:ring-2 focus:ring-emerald-500 outline-none transition-all placeholder:text-slate-500" required />
//               </div>
//             </div>
//           )}

//           <input name="contact" placeholder="Contact Number" onChange={handleChange} 
//             className="w-full p-3 bg-slate-800 border border-slate-700 rounded-xl text-white focus:ring-2 focus:ring-emerald-500 outline-none transition-all placeholder:text-slate-500" required />

//           <div className="relative">
//             <input 
//               name="password" 
//               type={showPassword ? "text" : "password"} 
//               placeholder="Password" 
//               onChange={handleChange} 
//               className="w-full p-3 bg-slate-800 border border-slate-700 rounded-xl text-white focus:ring-2 focus:ring-emerald-500 outline-none transition-all placeholder:text-slate-500" 
//               required 
//             />
//             <button 
//               type="button"
//               onClick={() => setShowPassword(!showPassword)}
//               className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-emerald-400 transition-colors"
//             >
//               {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
//             </button>
//           </div>
          
//           <button type="submit" 
//             className="w-full py-3 px-4 bg-emerald-600 hover:bg-emerald-500 hover:shadow-[0_0_20px_rgba(16,185,129,0.4)] text-white font-bold rounded-xl transition-all duration-300 mt-2">
//             {isLogin ? 'Sign In' : 'Create Account'}
//           </button>
//         </form>

//         <p className="mt-8 text-center text-sm text-slate-400">
//           {isLogin ? "New here?" : "Already have an account?"}
//           <button onClick={() => setIsLogin(!isLogin)} className="ml-2 text-emerald-400 font-medium hover:text-emerald-300 underline underline-offset-4">
//             {isLogin ? 'Register Now' : 'Go to Login'}
//           </button>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default AuthForm;
// ======================================================================================================================




// import React, { useState } from 'react';
// import { Eye, EyeOff } from 'lucide-react';

// const AuthForm = () => {
//   const [isLogin, setIsLogin] = useState(true);
//   const [showPassword, setShowPassword] = useState(false);
//   const [formData, setFormData] = useState({
//     username: '', fullname: '', contact: '', email: '', 
//     state: '', district: '', password: ''
//   });

//   const handleChange = (e) => setFormData({...formData, [e.target.name]: e.target.value});

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const baseUrl = "http://localhost:8000/auth";
//     const endpoint = isLogin ? `${baseUrl}/login` : `${baseUrl}/register`;
//     const payload = isLogin ? { contact: formData.contact, password: formData.password } : formData;

//     try {
//       const res = await fetch(endpoint, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(payload),
//       });
//       const data = await res.json();
//       if (!res.ok) { alert(data.detail || "Authentication failed"); return; }

//       if (isLogin) {
//         localStorage.setItem("token", data.access_token);
//         window.dispatchEvent(new Event("storage")); 
//         window.location.href = "/app";
//       } else {
//         alert("Registration successful!");
//         setIsLogin(true);
//       }
//     } catch (err) { alert("Server error. Try again."); }
//   };

//   return (
//     /* 🔥 Added overflow-hidden and relative to contain the glow */
//     <div className="min-h-screen w-full flex items-center justify-center bg-[#0f172a] px-4 py-12 overflow-hidden relative">
      
//       {/* 🔥 Glow Effect: Centered with -translate to prevent bleeding off-edge */}
//       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-emerald-500/20 rounded-full blur-[120px] -z-10 pointer-events-none"></div>

//       <div className="w-full max-w-md bg-slate-900/80 border border-slate-800 backdrop-blur-xl p-6 md:p-10 rounded-2xl shadow-2xl relative z-10">
//         <h2 className="text-center text-3xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent mb-8">
//           {isLogin ? 'Welcome Back' : 'Join Us'}
//         </h2>

//         <form className="space-y-5" onSubmit={handleSubmit}>
//           {!isLogin && (
//             <div className="space-y-4 animate-in fade-in duration-500">
//               <input name="username" placeholder="Username" onChange={handleChange} 
//                 className="w-full p-3 bg-slate-800 border border-slate-700 rounded-xl text-white focus:ring-2 focus:ring-emerald-500 outline-none transition-all placeholder:text-slate-500" required />
              
//               <input name="fullname" placeholder="Full Name" onChange={handleChange} 
//                 className="w-full p-3 bg-slate-800 border border-slate-700 rounded-xl text-white focus:ring-2 focus:ring-emerald-500 outline-none transition-all placeholder:text-slate-500" required />
              
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                 <input name="state" placeholder="State" onChange={handleChange} 
//                   className="w-full p-3 bg-slate-800 border border-slate-700 rounded-xl text-white focus:ring-2 focus:ring-emerald-500 outline-none transition-all placeholder:text-slate-500" required />
//                 <input name="district" placeholder="District" onChange={handleChange} 
//                   className="w-full p-3 bg-slate-800 border border-slate-700 rounded-xl text-white focus:ring-2 focus:ring-emerald-500 outline-none transition-all placeholder:text-slate-500" required />
//               </div>
//             </div>
//           )}

//           <input name="contact" placeholder="Contact Number" onChange={handleChange} 
//             className="w-full p-3 bg-slate-800 border border-slate-700 rounded-xl text-white focus:ring-2 focus:ring-emerald-500 outline-none transition-all placeholder:text-slate-500" required />

//           <div className="relative">
//             <input 
//               name="password" 
//               type={showPassword ? "text" : "password"} 
//               placeholder="Password" 
//               onChange={handleChange} 
//               className="w-full p-3 bg-slate-800 border border-slate-700 rounded-xl text-white focus:ring-2 focus:ring-emerald-500 outline-none transition-all placeholder:text-slate-500" 
//               required 
//             />
//             <button 
//               type="button"
//               onClick={() => setShowPassword(!showPassword)}
//               className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-emerald-400 transition-colors"
//             >
//               {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
//             </button>
//           </div>
          
//           <button type="submit" 
//             className="w-full py-3 px-4 bg-emerald-600 hover:bg-emerald-500 hover:shadow-[0_0_20px_rgba(16,185,129,0.4)] text-white font-bold rounded-xl transition-all duration-300 mt-2">
//             {isLogin ? 'Sign In' : 'Create Account'}
//           </button>
//         </form>

//         <p className="mt-8 text-center text-sm text-slate-400">
//           {isLogin ? "New here?" : "Already have an account?"}
//           <button onClick={() => setIsLogin(!isLogin)} className="ml-2 text-emerald-400 font-medium hover:text-emerald-300 underline underline-offset-4">
//             {isLogin ? 'Register Now' : 'Go to Login'}
//           </button>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default AuthForm;
// ============================================================================================================


import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    username: '', fullname: '', contact: '', email: '', 
    state: '', district: '', password: ''
  });

  const handleChange = (e) => setFormData({...formData, [e.target.name]: e.target.value});

  const handleSubmit = async (e) => {
    e.preventDefault();
    const baseUrl = "http://localhost:8000/auth";
    const endpoint = isLogin ? `${baseUrl}/login` : `${baseUrl}/register`;
    const payload = isLogin ? { contact: formData.contact, password: formData.password } : formData;

    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (!res.ok) { alert(data.detail || "Authentication failed"); return; }

      if (isLogin) {
        // ✅ Updated redirect to /dashboard
        localStorage.setItem("token", data.access_token);
        window.dispatchEvent(new Event("storage")); 
        window.location.href = "/dashboard";
      } else {
        alert("Registration successful!");
        setIsLogin(true);
      }
    } catch (err) { alert("Server error. Try again."); }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#0f172a] px-4 py-12 overflow-hidden relative">
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-emerald-500/20 rounded-full blur-[120px] -z-10 pointer-events-none"></div>

      <div className="w-full max-w-md bg-slate-900/80 border border-slate-800 backdrop-blur-xl p-6 md:p-10 rounded-2xl shadow-2xl relative z-10">
        <h2 className="text-center text-3xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent mb-8">
          {isLogin ? 'Welcome Back' : 'Join Us'}
        </h2>

        <form className="space-y-5" onSubmit={handleSubmit}>
          {!isLogin && (
            <div className="space-y-4 animate-in fade-in duration-500">
              <input name="username" placeholder="Username" onChange={handleChange} 
                className="w-full p-3 bg-slate-800 border border-slate-700 rounded-xl text-white focus:ring-2 focus:ring-emerald-500 outline-none transition-all placeholder:text-slate-500" required />
              
              <input name="fullname" placeholder="Full Name" onChange={handleChange} 
                className="w-full p-3 bg-slate-800 border border-slate-700 rounded-xl text-white focus:ring-2 focus:ring-emerald-500 outline-none transition-all placeholder:text-slate-500" required />
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input name="state" placeholder="State" onChange={handleChange} 
                  className="w-full p-3 bg-slate-800 border border-slate-700 rounded-xl text-white focus:ring-2 focus:ring-emerald-500 outline-none transition-all placeholder:text-slate-500" required />
                <input name="district" placeholder="District" onChange={handleChange} 
                  className="w-full p-3 bg-slate-800 border border-slate-700 rounded-xl text-white focus:ring-2 focus:ring-emerald-500 outline-none transition-all placeholder:text-slate-500" required />
              </div>
            </div>
          )}

          <input name="contact" placeholder="Contact Number" onChange={handleChange} 
            className="w-full p-3 bg-slate-800 border border-slate-700 rounded-xl text-white focus:ring-2 focus:ring-emerald-500 outline-none transition-all placeholder:text-slate-500" required />

          <div className="relative">
            <input 
              name="password" 
              type={showPassword ? "text" : "password"} 
              placeholder="Password" 
              onChange={handleChange} 
              className="w-full p-3 bg-slate-800 border border-slate-700 rounded-xl text-white focus:ring-2 focus:ring-emerald-500 outline-none transition-all placeholder:text-slate-500" 
              required 
            />
            <button 
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-emerald-400 transition-colors"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
          
          <button type="submit" 
            className="w-full py-3 px-4 bg-emerald-600 hover:bg-emerald-500 hover:shadow-[0_0_20px_rgba(16,185,129,0.4)] text-white font-bold rounded-xl transition-all duration-300 mt-2">
            {isLogin ? 'Sign In' : 'Create Account'}
          </button>
        </form>

        <p className="mt-8 text-center text-sm text-slate-400">
          {isLogin ? "New here?" : "Already have an account?"}
          <button onClick={() => setIsLogin(!isLogin)} className="ml-2 text-emerald-400 font-medium hover:text-emerald-300 underline underline-offset-4">
            {isLogin ? 'Register Now' : 'Go to Login'}
          </button>
        </p>
      </div>
    </div>
  );
};

export default AuthForm;
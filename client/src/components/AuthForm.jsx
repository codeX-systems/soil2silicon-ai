import React, { useState } from 'react';

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    username: '', fullname: '', contact: '', email: '', 
    state: '', district: '', password: ''
  });

  const handleChange = (e) => setFormData({...formData, [e.target.name]: e.target.value});

  const handleSubmit = async (e) => {
    e.preventDefault();
    const baseUrl = "http://localhost:8000/auth"; // Update to your API URL
    
    try {
      if (isLogin) {
        // LOGIN: Must use form-data (application/x-www-form-urlencoded)
        const loginData = new URLSearchParams();
        loginData.append('username', formData.contact); // Mapping contact to 'username' for OAuth2
        loginData.append('password', formData.password);

        const res = await fetch(`${baseUrl}/jwt/login`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: loginData,
        });
        const data = await res.json();
        if (res.ok) localStorage.setItem('token', data.access_token);
      } else {
        // SIGNUP: Uses standard JSON
        const res = await fetch(`${baseUrl}/register`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            ...formData,
            email: formData.email || undefined, // Send as undefined if empty
          }),
        });
        if (res.ok) setIsLogin(true);
      }
    } catch (err) {
      console.error("Auth Error:", err);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-lg">
        <h2 className="text-center text-3xl font-extrabold text-gray-900">
          {isLogin ? 'Login to Account' : 'Create New Account'}
        </h2>
        <form className="mt-8 space-y-4" onSubmit={handleSubmit}>
          {!isLogin && (
            <>
              <input name="username" placeholder="Username" onChange={handleChange} className="w-full p-3 border rounded-lg" required />
              <input name="fullname" placeholder="Full Name" onChange={handleChange} className="w-full p-3 border rounded-lg" required />
              <input name="email" type="email" placeholder="Email (Optional)" onChange={handleChange} className="w-full p-3 border rounded-lg" />
              <div className="grid grid-cols-2 gap-4">
                <input name="state" placeholder="State" onChange={handleChange} className="w-full p-3 border rounded-lg" required />
                <input name="district" placeholder="District" onChange={handleChange} className="w-full p-3 border rounded-lg" required />
              </div>
            </>
          )}
          <input name="contact" placeholder="Contact Number" onChange={handleChange} className="w-full p-3 border rounded-lg" required />
          <input name="password" type="password" placeholder="Password" onChange={handleChange} className="w-full p-3 border rounded-lg" required />
          
          <button type="submit" className="w-full py-3 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-lg transition duration-200">
            {isLogin ? 'Sign In' : 'Register'}
          </button>
        </form>
        <p className="text-center text-sm text-gray-600">
          {isLogin ? "Don't have an account?" : "Already have an account?"}
          <button onClick={() => setIsLogin(!isLogin)} className="ml-1 text-indigo-600 font-medium hover:underline">
            {isLogin ? 'Sign Up' : 'Login'}
          </button>
        </p>
      </div>
    </div>
  );
};

export default AuthForm;
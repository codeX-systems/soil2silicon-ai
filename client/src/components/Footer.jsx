import React from "react";

// Import icons/logos
import github from "../assets/github.png";     
import youtube from "../assets/youtube.png";   
import codexLogo from "../assets/soil.png";   
import appLogo from "../assets/weather.png";  

export default function Footer() {
  return (
    <footer className="w-full bg-green-200 py-6 px-4 text-green-900 flex flex-col items-center space-y-5 shadow-inner">

      {/* --- SOCIAL LINKS --- */}
      <div className="flex justify-center space-x-6">
        <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
          <img src={github} alt="GitHub" className="w-8 h-8 hover:scale-110 transition" />
        </a>

        <a href="https://youtube.com/" target="_blank" rel="noopener noreferrer">
          <img src={youtube} alt="YouTube" className="w-8 h-8 hover:scale-110 transition" />
        </a>
        <img src={codexLogo} alt="CodeX Logo" className="w-10 h-10 rounded-full shadow" />
        <img src={appLogo} alt="App Logo" className="w-10 h-10 rounded-full shadow" />
      </div>

      {/* --- LOGOS --- */}
      {/* <div className="flex items-center space-x-6">
        <img src={github} alt="GitHub" className="w-8 h-8 hover:scale-110 transition" />
        <img src={youtube} alt="YouTube" className="w-8 h-8 hover:scale-110 transition" />
        <img src={codexLogo} alt="CodeX Logo" className="w-10 h-10 rounded-full shadow" />
        <img src={appLogo} alt="App Logo" className="w-10 h-10 rounded-full shadow" />
      </div> */}

      {/* --- FOOTER TEXT --- */}
      <div className="text-center text-sm leading-tight space-y-1">
        <div className="font-semibold">Developed by CodeX</div>
        <div>© 2025 Soil To Silicon — All rights reserved</div>
        <div>© Powered By CodeX</div>
        <div className="font-semibold text-green-800">Version 1.0.0</div>
      </div>

      {/* --- LINKS EXTRA (HELP / CONTACT) --- */}
      <div className="flex space-x-6 text-sm text-green-800 font-medium">
        <a href="/help" className="hover:underline">Help</a>
        <a href="/contact" className="hover:underline">Contact Us</a>
      </div>

    </footer>
  );
}

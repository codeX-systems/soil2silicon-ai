// import React from "react";

// // Import icons/logos
// import github from "../assets/github.png";     
// import youtube from "../assets/youtube.png";   
// import codexLogo from "../assets/soil.png";   
// import appLogo from "../assets/weather.png";  

// export default function Footer() {
//   return (
//     <footer className="w-full bg-green-200 py-6 px-4 text-green-900 flex flex-col items-center space-y-5 shadow-inner">

//       {/* --- SOCIAL LINKS --- */}
//       <div className="flex justify-center space-x-6">
//         <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
//           <img src={github} alt="GitHub" className="w-8 h-8 hover:scale-110 transition" />
//         </a>

//         <a href="https://youtube.com/" target="_blank" rel="noopener noreferrer">
//           <img src={youtube} alt="YouTube" className="w-8 h-8 hover:scale-110 transition" />
//         </a>
//         <img src={codexLogo} alt="CodeX Logo" className="w-10 h-10 rounded-full shadow" />
//         <img src={appLogo} alt="App Logo" className="w-10 h-10 rounded-full shadow" />
//       </div>

//       {/* --- LOGOS --- */}
//       {/* <div className="flex items-center space-x-6">
//         <img src={github} alt="GitHub" className="w-8 h-8 hover:scale-110 transition" />
//         <img src={youtube} alt="YouTube" className="w-8 h-8 hover:scale-110 transition" />
//         <img src={codexLogo} alt="CodeX Logo" className="w-10 h-10 rounded-full shadow" />
//         <img src={appLogo} alt="App Logo" className="w-10 h-10 rounded-full shadow" />
//       </div> */}

//       {/* --- FOOTER TEXT --- */}
//       <div className="text-center text-sm leading-tight space-y-1">
//         <div className="font-semibold">Developed by CodeX</div>
//         <div>© 2025 Soil To Silicon — All rights reserved</div>
//         <div>© Powered By CodeX</div>
//         <div className="font-semibold text-green-800">Version 1.0.0</div>
//       </div>

//       {/* --- LINKS EXTRA (HELP / CONTACT) --- */}
//       <div className="flex space-x-6 text-sm text-green-800 font-medium">
//         <a href="/help" className="hover:underline">Help</a>
//         <a href="/contact" className="hover:underline">Contact Us</a>
//       </div>

//     </footer>
//   );
// }
// ==============================================================================

// import React from "react";
// import { useTranslation } from "react-i18next";

// // Import icons/logos
// import github from "../assets/github.png";     
// import youtube from "../assets/youtube.png";   
// import codexLogo from "../assets/soil.png";   
// import appLogo from "../assets/weather.png";  

// export default function Footer() {
//   const { t } = useTranslation();

//   return (
//     <footer className="w-full bg-green-200 py-6 px-4 text-green-900 flex flex-col items-center space-y-5 shadow-inner">

//       {/* --- SOCIAL LINKS --- */}
//       {/* <div className="flex justify-center space-x-6">
//         <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
//           <img src={github} alt={t("footer_github")} className="w-8 h-8 hover:scale-110 transition" />
//         </a>

//         <a href="https://youtube.com/" target="_blank" rel="noopener noreferrer">
//           <img src={youtube} alt={t("footer_youtube")} className="w-8 h-8 hover:scale-110 transition" />
//         </a>

//         <img src={"/codex-icon.png"} alt={t("footer_codex_logo")} className="w-10 h-10 rounded-full" />
//         <img src={"/s2s-icon-default.png"} alt={t("footer_app_logo")} className="w-10 h-10 rounded-full" />
//       </div> */}
//       {/* --- SOCIAL LINKS --- */}
// <div className="flex flex-col items-center space-y-6 md:flex-row md:space-y-0 md:space-x-8 justify-center">
  
//   {/* --- TOP: CIRCULAR LOGOS --- */}
//   <div className="flex items-center space-x-4">
//     {/* Codex Logo */}
//     <div className="w-30 h-30 rounded-full flex items-center justify-center overflow-hidden border border-white/10">
//       <img 
//         src={"/codex-icon.png"} 
//         alt={t("footer_codex_logo")} 
//         className="w-25 h-25 object-contain" 
//       />
//     </div>

//     {/* App Logo (S2S) */}
//     <div className="w-30 h-30 rounded-full flex items-center justify-center overflow-hidden border border-white/10">
//       <img 
//         src={"/s2s-icon-default.png"} 
//         alt={t("footer_app_logo")} 
//         className="w-25 h-25 object-contain" 
//       />
//     </div>
//   </div>

//   {/* --- BOTTOM: TRANSFORMED PILLS --- */}
//   <div className="flex items-center gap-3">
//     {/* GitHub Pill */}
//     <a 
//       href="https://github.com/" 
//       target="_blank" 
//       rel="noopener noreferrer"
//       className="flex items-center space-x-2 px-4 py-2 bg-gray-800 border border-white/10 rounded-full hover:bg-gray-700 transition-all hover:scale-105 active:scale-95"
//     >
//       <img src={github} alt="" className="w-5 h-5 object-contain" />
//       <span className="text-sm font-medium text-white">{t("footer.github_button")}</span>
//     </a>

//     {/* YouTube Pill */}
//     <a 
//       href="https://youtube.com/" 
//       target="_blank" 
//       rel="noopener noreferrer"
//       className="flex items-center space-x-2 px-4 py-2 bg-gray-800 border border-white/10 rounded-full hover:bg-gray-700 transition-all hover:scale-105 active:scale-95"
//     >
//       <img src={youtube} alt="" className="w-5 h-5 object-contain" />
//       <span className="text-sm font-medium text-white">{t("footer.youtube_button")}</span>
//     </a>
//   </div>

// </div>

//       {/* --- FOOTER TEXT --- */}
//       <div className="text-center text-sm leading-tight space-y-1">
//         <div className="font-semibold">{t("footer_developed_by")}</div>
//         <div>{t("footer_rights")}</div>
//         <div>{t("footer_powered_by")}</div>
//         <div className="font-semibold text-green-800">{t("footer_version")}</div>
//       </div>

//       {/* --- LINKS EXTRA (HELP / CONTACT) --- */}
//       <div className="flex space-x-6 text-sm text-green-800 font-medium">
//         <a href="/help" className="hover:underline">{t("footer_help")}</a>
//         <a href="/contact" className="hover:underline">{t("footer_contact")}</a>
//       </div>

//     </footer>
//   );
// }

// ------------------------Brand New Update------------------------------------

import React from "react";
import { useTranslation } from "react-i18next";

// Import icons/logos
import github from "../assets/github.png";     
import youtube from "../assets/youtube.png";   
import codexLogo from "/codex-icon.png";   
import appLogo from "/s2s-icon-default.png";  

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="w-full bg-green-200 py-10 px-6 text-green-900 shadow-inner">
      <div className="max-w-6xl mx-auto flex flex-col gap-10">
        
        {/* === TOP SECTION: Logos & Social Pills === */}
        {/* On mobile: flex-col (stacked). On desktop: flex-row & justify-between (split) */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          
          {/* --- LEFT: CIRCULAR LOGOS --- */}
          <div className="flex items-center space-x-5">
            {/* Codex Logo */}
            <div className="w-20 h-20 rounded-full flex items-center justify-center overflow-hidden border-2 border-green-300 bg-white shadow-sm">
              <img 
                src={codexLogo} 
                alt={t("footer_codex_logo")} 
                className="w-15 h-15 object-contain" 
              />
            </div>

            {/* App Logo */}
            <div className="w-20 h-20 rounded-full flex items-center justify-center overflow-hidden border-2 border-green-300 bg-white shadow-sm">
              <img 
                src={appLogo} 
                alt={t("footer_app_logo")} 
                className="w-15 h-15 object-contain" 
              />
            </div>
          </div>

          {/* --- RIGHT: TRANSFORMED PILLS --- */}
          <div className="flex items-center gap-4 flex-wrap justify-center">
            {/* GitHub Pill */}
            <a 
              href="https://github.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-5 py-2.5 bg-green-900 border border-green-800 rounded-full hover:bg-green-800 transition-all hover:scale-105 active:scale-95 shadow-md"
            >
              <img src={github} alt="" className="w-5 h-5 object-contain" />
              <span className="text-sm font-semibold text-white tracking-wide">
                {t("footer.github_button", "GitHub")}
              </span>
            </a>

            {/* YouTube Pill */}
            <a 
              href="https://youtube.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-5 py-2.5 bg-green-900 border border-green-800 rounded-full hover:bg-green-800 transition-all hover:scale-105 active:scale-95 shadow-md"
            >
              <img src={youtube} alt="" className="w-5 h-5 object-contain" />
              <span className="text-sm font-semibold text-white tracking-wide">
                {t("footer.youtube_button", "YouTube")}
              </span>
            </a>
          </div>
        </div>

        {/* === DIVIDER === */}
        <hr className="border-green-300/60 w-full" />

        {/* === BOTTOM SECTION: Text & Extra Links === */}
        <div className="flex flex-col md:flex-row items-center md:items-end justify-between gap-6 text-center md:text-left">
          
          {/* Footer Text Group */}
          <div className="text-sm leading-relaxed space-y-1">
            <div className="font-bold text-green-950">{t("footer_developed_by")}</div>
            <div className="text-green-800">{t("footer_rights")}</div>
            <div className="text-green-800">{t("footer_powered_by")}</div>
            <div className="font-bold text-green-700 mt-2">{t("footer_version")}</div>
          </div>

          {/* Help & Contact Links */}
          <div className="flex space-x-6 text-sm font-bold text-green-800 bg-green-300/30 px-6 py-3 rounded-2xl">
            <a href="/help" className="hover:text-green-950 hover:underline transition-colors">
              {t("footer_help")}
            </a>
            <span className="text-green-400/50">|</span>
            <a href="/contact" className="hover:text-green-950 hover:underline transition-colors">
              {t("footer_contact")}
            </a>
          </div>

        </div>

      </div>
    </footer>
  );
}
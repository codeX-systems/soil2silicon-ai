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

// import React from "react";
// import { useTranslation } from "react-i18next";

// // Import icons/logos
// import github from "../assets/github.png";     
// import youtube from "../assets/youtube.png";   
// import codexLogo from "/codex-icon.png";   
// import appLogo from "/s2s-icon-default.png";  

// export default function Footer() {
//   const { t } = useTranslation();

//   return (
//     <footer className="w-full bg-green-200 py-10 px-6 text-green-900 shadow-inner">
//       <div className="max-w-6xl mx-auto flex flex-col gap-10">
        
//         {/* === TOP SECTION: Logos & Social Pills === */}
//         {/* On mobile: flex-col (stacked). On desktop: flex-row & justify-between (split) */}
//         <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          
//           {/* --- LEFT: CIRCULAR LOGOS --- */}
//           <div className="flex items-center space-x-5">
//             {/* Codex Logo */}
//             <div className="w-20 h-20 rounded-full flex items-center justify-center overflow-hidden border-2 border-green-300 bg-white shadow-sm">
//               <img 
//                 src={codexLogo} 
//                 alt={t("footer_codex_logo")} 
//                 className="w-15 h-15 object-contain" 
//               />
//             </div>

//             {/* App Logo */}
//             <div className="w-20 h-20 rounded-full flex items-center justify-center overflow-hidden border-2 border-green-300 bg-white shadow-sm">
//               <img 
//                 src={appLogo} 
//                 alt={t("footer_app_logo")} 
//                 className="w-15 h-15 object-contain" 
//               />
//             </div>
//           </div>

//           {/* --- RIGHT: TRANSFORMED PILLS --- */}
//           <div className="flex items-center gap-4 flex-wrap justify-center">
//             {/* GitHub Pill */}
//             <a 
//               href="https://github.com/" 
//               target="_blank" 
//               rel="noopener noreferrer"
//               className="flex items-center space-x-2 px-5 py-2.5 bg-green-900 border border-green-800 rounded-full hover:bg-green-800 transition-all hover:scale-105 active:scale-95 shadow-md"
//             >
//               <img src={github} alt="" className="w-5 h-5 object-contain" />
//               <span className="text-sm font-semibold text-white tracking-wide">
//                 {t("footer.github_button", "GitHub")}
//               </span>
//             </a>

//             {/* YouTube Pill */}
//             <a 
//               href="https://youtube.com/" 
//               target="_blank" 
//               rel="noopener noreferrer"
//               className="flex items-center space-x-2 px-5 py-2.5 bg-green-900 border border-green-800 rounded-full hover:bg-green-800 transition-all hover:scale-105 active:scale-95 shadow-md"
//             >
//               <img src={youtube} alt="" className="w-5 h-5 object-contain" />
//               <span className="text-sm font-semibold text-white tracking-wide">
//                 {t("footer.youtube_button", "YouTube")}
//               </span>
//             </a>
//           </div>
//         </div>

//         {/* === DIVIDER === */}
//         <hr className="border-green-300/60 w-full" />

//         {/* === BOTTOM SECTION: Text & Extra Links === */}
//         <div className="flex flex-col md:flex-row items-center md:items-end justify-between gap-6 text-center md:text-left">
          
//           {/* Footer Text Group */}
//           <div className="text-sm leading-relaxed space-y-1">
//             <div className="font-bold text-green-950">{t("footer_developed_by")}</div>
//             <div className="text-green-800">{t("footer_rights")}</div>
//             <div className="text-green-800">{t("footer_powered_by")}</div>
//             <div className="font-bold text-green-700 mt-2">{t("footer_version")}</div>
//           </div>

//           {/* Help & Contact Links */}
//           <div className="flex space-x-6 text-sm font-bold text-green-800 bg-green-300/30 px-6 py-3 rounded-2xl">
//             <a href="/help" className="hover:text-green-950 hover:underline transition-colors">
//               {t("footer_help")}
//             </a>
//             <span className="text-green-400/50">|</span>
//             <a href="/contact" className="hover:text-green-950 hover:underline transition-colors">
//               {t("footer_contact")}
//             </a>
//           </div>

//         </div>

//       </div>
//     </footer>
//   );
// }
























// import React from "react";
// import { useTranslation } from "react-i18next";

// // Import your existing assets
// import youtube from "../assets/youtube.png"; 
// import appLogo from "/s2s-icon-default.png";

// export default function Footer() {
//   const { t } = useTranslation();

//   return (
//     <footer className="w-full bg-emerald-950 py-4 px-6 text-green-500 shadow-inner">
//       <div className="max-w-7xl mx-auto">
        
//         {/* === MAIN CONTENT: 4 COLUMNS === */}
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">
          
//           {/* Column 1: Offerings */}
//           <div className="flex flex-col gap-3">
//             <h3 className="font-bold text-black text-lg mb-2">{t("footer_offerings", "Our Offerings")}</h3>
//             <a href="#" className="hover:text-green-700 transition-colors">AWS Solution</a>
//             <a href="#" className="hover:text-green-700 transition-colors">ET Solution</a>
//             <a href="#" className="hover:text-green-700 transition-colors">S2S Platform</a>
//           </div>

//           {/* Column 2: Support */}
//           <div className="flex flex-col gap-3">
//             <h3 className="font-bold text-black text-lg mb-2">{t("footer_support", "Support")}</h3>
//             <p className="text-sm">
//               {t("footer_call_us", "Call us on")} <br />
//               <span className="font-semibold text-gray-900">1800 000 0000</span>
//             </p>
//           </div>

//           {/* Column 3: Company */}
//           <div className="flex flex-col gap-3">
//             <h3 className="font-bold text-black text-lg mb-2">{t("footer_company", "Our Company")}</h3>
//             <a href="/help" className="hover:text-green-700 transition-colors">{t("footer_help")}</a>
//             <a href="/contact" className="hover:text-green-700 transition-colors">{t("footer_contact")}</a>
//             <p className="text-sm text-gray-500 italic">{t("footer_version")}</p>
//           </div>

//           {/* Column 4: Connect & App */}
//           <div className="flex flex-col gap-6">
//             <div>
//               <h3 className="font-bold text-black text-lg mb-4">{t("footer_connect", "Connect with us")}</h3>
//               <div className="flex gap-4">
//                 {/* Social Icons using your existing logic */}
//                 <a href="https://youtube.com" target="_blank" className="w-10 h-10 bg-[#00703c] rounded-full flex items-center justify-center hover:opacity-80 transition-opacity">
//                   <img src={youtube} alt="YouTube" className="w-5 h-5 invert" />
//                 </a>
//                 <a href="https://github.com" target="_blank" className="w-10 h-10 bg-[#00703c] rounded-full flex items-center justify-center hover:opacity-80 transition-opacity">
//                    <div className="text-white font-bold text-xs">GH</div>
//                 </a>
//               </div>
//             </div>

//             <div>
//               <h3 className="font-bold text-black text-sm mb-3">{t("footer_download", "Download App")}</h3>
//               <div className="bg-black text-white flex items-center gap-2 px-4 py-2 rounded-md w-max cursor-pointer hover:bg-gray-800 transition-colors">
//                 <img src={appLogo} alt="App Icon" className="w-6 h-6" />
//                 <div className="flex flex-col leading-none">
//                   <span className="text-[10px] uppercase">Get it on</span>
//                   <span className="text-sm font-semibold">Google Play</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* === BOTTOM BAR === */}
//         <div className="border-t border-gray-200 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
//           <div className="flex items-center gap-3">
//             <img src={appLogo} alt="Logo" className="w-10 h-10 object-contain" />
//             <p className="text-xs text-gray-1000">
//               {t("footer_rights")} {new Date().getFullYear()}
//             </p>
//           </div>

//           {/* <div className="flex gap-6 text-xs font-medium text-gray-600">
//             <a href="#" className="hover:text-black">EULA</a>
//             <a href="#" className="hover:text-black">Policies</a>
//             <a href="#" className="hover:text-black">Terms & Conditions</a>
//           </div> */}
//         </div>
//       </div>
//     </footer>
//   );
// }





















import React from "react";
import { useTranslation } from "react-i18next";
import youtube from "../assets/youtube1.png";
import github from "../assets/github.png";
// import codexLogo from "/codex-icon.png";
import appLogo from "/s2s-icon-default.png";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="w-full bg-emerald-950 py-4 px-6 text-emerald-50 shadow-inner border-t border-emerald-900">
      <div className="max-w-7xl mx-auto">

        {/* === TOP SECTION === */}
        {/* <div className="flex flex-col md:flex-row items-center justify-between gap-12 mb-4 text-center md:text-left"> */}
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8 mb-6 text-center">
          {/* === PART 1: LOGO & QUOTE === */}
           <div className="flex flex-col items-center min-w-[150px]">
            <span className="relative text-[12px] uppercase tracking-widest text-emerald-500 font-semibold mb-2 cursor-pointer
                    after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-0
                    after:bg-emerald-400 after:transition-all after:duration-300
                    hover:after:w-full transition-all duration-300 hover:text-emerald-300 hover:drop-shadow-[0_0_8px_rgba(16,185,129,0.8)]">
              Developed by
            </span>
            <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center p-1 shadow-sm mb-1">
              <img
                  src="/codex-icon.png"
                  alt="CodeX"
                  className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col items-center text-center leading-tight">
              <span className="text-[11px] font-semibold text-white tracking-wide">
                CodeX Systems
              </span>
              <span className="text-[11px] italic text-emerald-400">
                Innovating for a greener tomorrow
              </span>
            </div>
          </div>
  

          {/* === PART 2: VERSION === */}
          <div className="flex flex-col items-center gap-3">
            <span className="text-[12px] uppercase tracking-widest text-emerald-500 font-semibold mb-1 cursor-pointer
                              after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[0.5px] after:w-0
                              after:bg-emerald-400 after:transition-all after:duration-300
                              hover:after:w-full transition-all duration-300 hover:text-emerald-300 hover:drop-shadow-[0_0_8px_rgba(16,185,129,0.7)]">
              Version
            </span>
            <span className="text-xs font-mono text-white bg-emerald-900 px-2 py-0.5 rounded border border-emerald-500/50 mt-1 drop-shadow-[0_0_5px_rgba(16,185,129,0.6)]">
              Alpha v2.0.1
            </span>
          </div>

          {/* === PART 3: CONNECTIONS === */}
         <div className="flex flex-col items-center gap-3">
            <span className="text-[12px] uppercase tracking-widest text-emerald-500 font-semibold mb-1 cursor-pointer
                  after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[0.5px] after:w-0
                  after:bg-emerald-400 after:transition-all after:duration-300
                  hover:after:w-full transition-all duration-300 hover:text-emerald-300 hover:drop-shadow-[0_0_8px_rgba(16,185,129,0.7)]">
              Connect
            </span>

            <div className="flex items-center gap-3">
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 bg-emerald-800 rounded-full flex items-center justify-center hover:bg-green-700 transition-all duration-300"
              >
                <img src={youtube} alt="YouTube" className="w-5 h-5" />
              </a>

              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 bg-emerald-800 rounded-full flex items-center justify-center hover:bg-black transition-all duration-300"
              >
                <img src={github} alt="GitHub" className="w-4 h-4 invert" />
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 bg-emerald-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-all duration-300"
              >
                <span className="text-white font-bold text-[10px]">in</span>
              </a>
            </div>

          </div>
      </div>

        {/* === BOTTOM BAR === */}
        <div className="border-t border-emerald-800 pt-2 flex flex-col md:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-2">
            <img src={appLogo} alt="Logo" className="w-9 h-9 object-contain" />
            <p className="text-[11px] text-emerald-400/80">
              {t("footer_rights")} {new Date().getFullYear()} — Version Alpha 2.0.1
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
}

















// import React from "react";
// import { useTranslation } from "react-i18next";
// import youtube from "../assets/youtube.png"; 
// import github from "../assets/github.png"; // Assuming you have this
// import appLogo from "/s2s-icon-default.png";
// import codexLogo from "/codex-icon.png";

// export default function Footer() {
//   const { t } = useTranslation();

//   return (
//     <footer className="w-full bg-emerald-950 py-4 px-6 text-emerald-50 border-t border-emerald-900 shadow-inner">
//       <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
//         {/* === PART 1: LOGO & QUOTE === */}
//         <div className="flex items-center gap-4">
//           <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center p-1 shadow-sm">
//             <img src={codexLogo} alt="CodeX" className="w-full h-full object-contain" />
//           </div>
//           <div className="flex flex-col">
//             <span className="text-xs font-bold tracking-tight text-white uppercase">CodeX Systems</span>
//             <span className="text-[10px] italic text-emerald-400">"Innovating for a greener tomorrow"</span>
//           </div>
//         </div>

//         {/* === PART 2: VERSIONING === */}
//         <div className="flex flex-col items-center">
//           <span className="text-[10px] uppercase tracking-widest text-emerald-500 font-semibold">
//             Application Status
//           </span>
//           <span className="text-xs font-mono text-white bg-emerald-900 px-2 py-0.5 rounded border border-emerald-800 mt-1">
//             Alpha v2.0.1
//           </span>
//         </div>

//         {/* === PART 3: CONNECTIONS === */}
//         <div className="flex items-center gap-3">
//           <span className="text-[10px] font-bold text-emerald-500 hidden lg:block uppercase">Connect:</span>
          
//           {/* YouTube */}
//           <a href="https://youtube.com" target="_blank" rel="noreferrer" className="w-8 h-8 bg-emerald-800 rounded-full flex items-center justify-center hover:bg-red-600 transition-all duration-300">
//             <img src={youtube} alt="YouTube" className="w-4 h-4" />
//           </a>

//           {/* GitHub */}
//           <a href="https://github.com" target="_blank" rel="noreferrer" className="w-8 h-8 bg-emerald-800 rounded-full flex items-center justify-center hover:bg-black transition-all duration-300">
//             <img src={github} alt="GitHub" className="w-4 h-4 invert" />
//           </a>

//           {/* LinkedIn (Placeholder for your icon) */}
//           <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="w-8 h-8 bg-emerald-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-all duration-300">
//              <span className="text-white font-bold text-[10px]">in</span>
//           </a>
//         </div>

//       </div>

//       {/* THIN COPYRIGHT LINE */}
//       <div className="max-w-7xl mx-auto mt-4 pt-2 border-t border-emerald-900/50 flex justify-center text-[9px] text-emerald-600 uppercase tracking-tighter">
//         © {new Date().getFullYear()} Soil To Silicon (S2S) — All Rights Reserved
//       </div>
//     </footer>
//   );
// }


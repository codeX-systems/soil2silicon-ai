// // src/components/Footer.jsx
// import React from "react";
// import { useTranslation } from "react-i18next";

// const FooterMain = () => {
//   const { t } = useTranslation();
//   const currentYear = new Date().getFullYear();

//   return (
//     <footer className="w-full bg-black text-gray-400 py-12 px-6">
//       <div className="max-w-7xl mx-auto">
//         <div className="flex flex-col md:flex-row justify-between items-center gap-8 border-b border-white/10 pb-12">
//           {/* Logo/Brand */}
//           <div className="text-center md:text-left">
//             <h2 className="text-white text-2xl font-bold tracking-tighter">
//               {t("footer.brandNamePart1")}<span className="text-teal-400">{t("footer.brandNamePart2")}</span>{t("footer.brandNamePart3")}
//             </h2>
//             <p className="mt-2 text-sm max-w-xs">
//               {t("footer.description")}
//             </p>
//           </div>

//           {/* Quick Links */}
//           <div className="flex gap-8 text-sm font-medium">
//             <a href="#Home" className="hover:text-white transition">
//               {t("footer.links.home")}
//             </a>
//             <a href="#codex" className="hover:text-white transition">
//               {t("footer.links.about")}
//             </a>
//             <a href="#contact" className="hover:text-white transition">
//               {t("footer.links.contact")}
//             </a>
//           </div>
//         </div>

//         {/* Bottom Bar */}
//         <div className="mt-12 flex flex-col md:flex-row justify-between items-center gap-4 text-xs tracking-widest uppercase">
//           <p>
//             {t("footer.copyright", { year: currentYear })}
//           </p>
//           <div className="flex gap-6">
//             <a href="#" className="hover:text-white transition">
//               {t("footer.legal.privacy")}
//             </a>
//             <a href="#" className="hover:text-white transition">
//               {t("footer.legal.terms")}
//             </a>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default FooterMain;

























// src/components/Footer.jsx
import React from "react";
import { Link } from "react-router-dom"; // ✅ added
import { useTranslation } from "react-i18next";

const FooterMain = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-black text-gray-400 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 border-b border-white/10 pb-12">
          
          {/* Logo/Brand */}
          <div className="text-center md:text-left">
            <h2 className="text-white text-2xl font-bold tracking-tighter">
              {t("footer.brandNamePart1")}
              <span className="text-teal-400">
                {t("footer.brandNamePart2")}
              </span>
              {t("footer.brandNamePart3")}
            </h2>
            <p className="mt-2 text-sm max-w-xs">
              {t("footer.description")}
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex gap-8 text-sm font-medium">
            <a href="#Home" className="hover:text-white transition">
              {t("footer.links.home")}
            </a>
            <a href="#codex" className="hover:text-white transition">
              {t("footer.links.about")}
            </a>
            <a href="#contact" className="hover:text-white transition">
              {t("footer.links.contact")}
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col md:flex-row justify-between items-center gap-4 text-xs tracking-widest uppercase">
          
          {/* Copyright */}
          <p>
            {t("footer.copyright", { year: currentYear })}
          </p>

          {/* Legal Links */}
          <div className="flex gap-6">
            
            {/* ✅ Privacy Policy (React Router Link) */}
            <Link
              to="/privacy-policy"
              className="hover:text-white transition"
            >
              {t("footer.legal.privacy")}
            </Link>

            {/* Terms (you can convert later like privacy) */}
            {/* <a href="#" className="hover:text-white transition">
              {t("footer.legal.terms")}
            </a> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterMain;
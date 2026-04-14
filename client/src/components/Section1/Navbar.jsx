// import React, { useRef, useEffect, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { gsap } from "gsap";
// import { useNavigate } from "react-router-dom";

// const navVariants = {
//   hidden: { y: -50, opacity: 0 },
//   visible: {
//     y: 0,
//     opacity: 1,
//     transition: {
//       duration: 0.6,
//       ease: "easeOut",
//       when: "beforeChildren",
//       staggerChildren: 0.15,
//     },
//   },
// };

// const itemVariants = {
//   hidden: { opacity: 0, y: -20 },
//   visible: { opacity: 1, y: 0 },
// };

// const Navbar = () => {
//   const navigate = useNavigate();

//   const navRef = useRef(null);
//   const [activeSection, setActiveSection] = useState("");
//   const [hoveredItem, setHoveredItem] = useState(null);
//   const [menuOpen, setMenuOpen] = useState(false);

//   // 🔐 Auth state
//   const [isLoggedIn, setIsLoggedIn] = useState(
//     !!localStorage.getItem("token")
//   );

//   useEffect(() => {
//     const handleStorageChange = () => {
//       setIsLoggedIn(!!localStorage.getItem("token"));
//     };

//     window.addEventListener("storage", handleStorageChange);
//     return () => window.removeEventListener("storage", handleStorageChange);
//   }, []);

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     setIsLoggedIn(false);
//     navigate("/");
//   };

//   const navItems = [
//     { id: "solutions", label: "Our Solutions", color: "teal" },
//     { id: "codex", label: "codeX", color: "red" },
//     { id: "contact", label: "Contact", color: "teal" },
//   ];

//   /* ===== Scroll Blur Effect ===== */
//   useEffect(() => {
//     const el = navRef.current;
//     gsap.set(el, {
//       backgroundColor: "#0d0d0d",
//       backdropFilter: "blur(0px)",
//       borderColor: "transparent",
//     });

//     const handleScroll = () => {
//       if (window.scrollY > 20) {
//         gsap.to(el, {
//           backgroundColor: "rgba(255,255,255,0.08)",
//           backdropFilter: "blur(12px)",
//           borderColor: "rgba(255,255,255,0.2)",
//           duration: 0.4,
//         });
//       } else {
//         gsap.to(el, {
//           backgroundColor: "#0d0d0d",
//           backdropFilter: "blur(0px)",
//           borderColor: "transparent",
//           duration: 0.4,
//         });
//       }
//     };

//     handleScroll();
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   /* ===== Active Section Observer ===== */
//   useEffect(() => {
//     const sections = navItems
//       .map((item) => document.getElementById(item.id))
//       .filter(Boolean);

//     if (!sections.length) return;

//     const observer = new IntersectionObserver(
//       (entries) => {
//         const visible = entries.filter((e) => e.isIntersecting);
//         if (visible.length > 0) {
//           visible.sort((a, b) => b.intersectionRatio - a.intersectionRatio);
//           setActiveSection(visible[0].target.id);
//         } else {
//           setActiveSection("");
//         }
//       },
//       { threshold: [0, 0.25, 0.5, 0.75, 1] }
//     );

//     sections.forEach((s) => observer.observe(s));
//     return () => observer.disconnect();
//   }, []);

//   return (
//     <>
//       <motion.nav
//         ref={navRef}
//         variants={navVariants}
//         initial="hidden"
//         animate="visible"
//         className="fixed top-0 left-0 right-0 z-50 px-6 md:px-20 py-4 pt-7 flex items-center justify-between border-b-[0.5px] font-[Poppins]"
//       >
//         <div className="text-2xl font-bold text-teal-400">icon</div>

//         {/* Desktop */}
//         <div className="hidden md:flex items-center space-x-8 text-white">
//           {navItems.map((item) => (
//             <motion.a
//               key={item.id}
//               href={`#${item.id}`}
//               variants={itemVariants}
//               onMouseEnter={() => setHoveredItem(item.id)}
//               onMouseLeave={() => setHoveredItem(null)}
//               className={`relative pb-2 text-md ${
//                 item.color === "teal"
//                   ? "hover:text-teal-300"
//                   : "hover:text-red-300"
//               }`}
//             >
//               {item.label}
//               <motion.div
//                 className={`absolute bottom-0 left-0 w-full h-0.5 rounded-sm ${
//                   item.color === "teal" ? "bg-teal-400" : "bg-red-500"
//                 }`}
//                 initial={{ scaleX: 0 }}
//                 animate={{
//                   scaleX:
//                     activeSection === item.id ||
//                     hoveredItem === item.id
//                       ? 1
//                       : 0,
//                 }}
//                 transition={{ duration: 0.25 }}
//                 style={{ originX: "50%" }}
//               />
//             </motion.a>
//           ))}

//           {/* 🔐 Auth Buttons */}
//           {isLoggedIn ? (
//             <>
//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 onClick={() => navigate("/dashboard")} // ✅ new route
//                 className="ml-6 bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 px-5 rounded-3xl"
//                 >
//                 Dashboard
//               </motion.button>

//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 onClick={handleLogout}
//                 className="ml-4 bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-5 rounded-3xl"
//               >
//                 Logout
//               </motion.button>
//             </>
//           ) : (
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               onClick={() => navigate("/auth")}
//               className="ml-6 bg-teal-400 hover:bg-teal-500 text-slate-950 font-semibold py-2 px-5 rounded-3xl"
//             >
//               Launch App
//             </motion.button>
//           )}
//         </div>

//         {/* Mobile Toggle */}
//         <div className="md:hidden">
//           <button
//             onClick={() => setMenuOpen(!menuOpen)}
//             className="text-teal-400"
//           >
//             ☰
//           </button>
//         </div>
//       </motion.nav>

//       {/* Mobile Menu */}
//       <AnimatePresence>
//         {menuOpen && (
//           <motion.div
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -20 }}
//             className="md:hidden fixed top-[72px] left-0 right-0 z-40 bg-[#0d0d0d]/95 backdrop-blur-xl border-t border-white/10 flex flex-col items-center py-6 space-y-6 text-white"
//           >
//             {isLoggedIn ? (
//               <>
//                 <button
//                   onClick={() => {
//                     setMenuOpen(false);
//                     navigate("/dashboard"); // ✅ new route
//                   }}
//                   className="bg-indigo-500 text-white py-2 px-6 rounded-full"
//                   >
//                   Dashboard
//                 </button>

//                 <button
//                   onClick={() => {
//                     setMenuOpen(false);
//                     handleLogout();
//                   }}
//                   className="bg-red-500 text-white py-2 px-6 rounded-full"
//                 >
//                   Logout
//                 </button>
//               </>
//             ) : (
//               <button
//                 onClick={() => {
//                   setMenuOpen(false);
//                   navigate("/auth");
//                 }}
//                 className="bg-teal-400 text-slate-950 py-2 px-6 rounded-full"
//               >
//                 Launch App
//               </button>
//             )}
//           </motion.div>
//         )}
//       </AnimatePresence>

//       <div className="h-20" />
//     </>
//   );
// };

// export default Navbar;

// =================================================================

import React, { useRef, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { gsap } from "gsap";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const navVariants = {
  hidden: { y: -50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0 },
};

const Navbar = () => {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  const navRef = useRef(null);
  const [activeSection, setActiveSection] = useState("");
  const [hoveredItem, setHoveredItem] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const [isLoggedIn, setIsLoggedIn] = useState(
    !!localStorage.getItem("token")
  );

  useEffect(() => {
    const handleStorageChange = () => {
      setIsLoggedIn(!!localStorage.getItem("token"));
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate("/");
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const navItems = [
    { id: "solutions", label: t("nav_solutions"), color: "teal" },
    { id: "codex", label: t("nav_codex"), color: "red" },
    { id: "contact", label: t("nav_contact"), color: "teal" },
  ];

  /* Scroll Blur Effect */
  useEffect(() => {
    const el = navRef.current;
    gsap.set(el, {
      backgroundColor: "#0d0d0d",
      backdropFilter: "blur(0px)",
      borderColor: "transparent",
    });

    const handleScroll = () => {
      if (window.scrollY > 20) {
        gsap.to(el, {
          backgroundColor: "rgba(255,255,255,0.08)",
          backdropFilter: "blur(12px)",
          borderColor: "rgba(255,255,255,0.2)",
          duration: 0.4,
        });
      } else {
        gsap.to(el, {
          backgroundColor: "#0d0d0d",
          backdropFilter: "blur(0px)",
          borderColor: "transparent",
          duration: 0.4,
        });
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* Active Section Observer */
  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter(Boolean);

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          visible.sort((a, b) => b.intersectionRatio - a.intersectionRatio);
          setActiveSection(visible[0].target.id);
        } else {
          setActiveSection("");
        }
      },
      { threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <motion.nav
        ref={navRef}
        variants={navVariants}
        initial="hidden"
        animate="visible"
        className="fixed top-0 left-0 right-0 z-50 px-6 md:px-20 py-4 pt-7 flex items-center justify-between border-b-[0.5px] font-[Poppins]"
      >
        {/* <div className="text-2xl font-bold text-teal-400">icon</div> */}
        <img 
          src="/s2s-icon-default.png" 
          alt="Soil2Silicon Logo"
          className="h-10 w-auto md:h-14 lg:h-16 object-contain"
        />

        {/* Desktop */}
        <div className="hidden md:flex items-center space-x-8 text-white">
          {navItems.map((item) => (
            <motion.a
              key={item.id}
              href={`#${item.id}`}
              variants={itemVariants}
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
              className={`relative pb-2 text-md ${
                item.color === "teal"
                  ? "hover:text-teal-300"
                  : "hover:text-red-300"
              }`}
            >
              {item.label}
              <motion.div
                className={`absolute bottom-0 left-0 w-full h-0.5 rounded-sm ${
                  item.color === "teal" ? "bg-teal-400" : "bg-red-500"
                }`}
                initial={{ scaleX: 0 }}
                animate={{
                  scaleX:
                    activeSection === item.id ||
                    hoveredItem === item.id
                      ? 1
                      : 0,
                }}
                transition={{ duration: 0.25 }}
                style={{ originX: "50%" }}
              />
            </motion.a>
          ))}

          {/* 🌍 Language Selector */}
          <select
            onChange={(e) => changeLanguage(e.target.value)}
            value={i18n.language}
            className="ml-4 bg-transparent border border-teal-400/40 text-white text-sm px-3 py-1 rounded-full focus:outline-none"
          >
            <option value="en" className="text-black">EN</option>
            <option value="hi" className="text-black">हिं</option>
            <option value="bn" className="text-black">বাং</option>
          </select>

          {isLoggedIn ? (
            <>
              <motion.button
                whileHover={{ scale: 1.05 }}
                onClick={() => navigate("/dashboard")}
                className="ml-6 bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 px-5 rounded-3xl"
              >
                {t("nav_dashboard")}
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                onClick={handleLogout}
                className="ml-4 bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-5 rounded-3xl"
              >
                {t("logout")}
              </motion.button>
            </>
          ) : (
            <motion.button
              whileHover={{ scale: 1.05 }}
              onClick={() => navigate("/auth")}
              className="ml-6 bg-teal-400 hover:bg-teal-500 text-slate-950 font-semibold py-2 px-5 rounded-3xl"
            >
              {t("nav_launch_app")}
            </motion.button>
          )}
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <select
            onChange={(e) => changeLanguage(e.target.value)}
            value={i18n.language}
            className="bg-transparent border border-teal-400/40 text-white text-xs px-2 py-1 rounded-full"
          >
            <option value="en" className="text-black">EN</option>
            <option value="hi" className="text-black">हिं</option>
            <option value="bn" className="text-black">বাং</option>
          </select>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-teal-400 text-xl"
          >
            ☰
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden fixed top-[72px] left-0 right-0 z-40 bg-[#0d0d0d]/95 backdrop-blur-xl border-t border-white/10 flex flex-col items-center py-6 space-y-6 text-white"
          >
            {isLoggedIn ? (
              <>
                <button
                  onClick={() => {
                    setMenuOpen(false);
                    navigate("/dashboard");
                  }}
                  className="bg-indigo-500 text-white py-2 px-6 rounded-full"
                >
                  {t("nav_dashboard")}
                </button>

                <button
                  onClick={() => {
                    setMenuOpen(false);
                    handleLogout();
                  }}
                  className="bg-red-500 text-white py-2 px-6 rounded-full"
                >
                  {t("logout")}
                </button>
              </>
            ) : (
              <button
                onClick={() => {
                  setMenuOpen(false);
                  navigate("/auth");
                }}
                className="bg-teal-400 text-slate-950 py-2 px-6 rounded-full"
              >
                {t("nav_launch_app")}
              </button>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="h-20" />
    </>
  );
};

export default Navbar;
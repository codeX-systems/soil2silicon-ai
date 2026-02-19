import React, { useRef, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { gsap } from "gsap";

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
  const navRef = useRef(null);
  const [activeSection, setActiveSection] = useState("");
  const [hoveredItem, setHoveredItem] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);


  
  // ✅ Updated nav items: Contact instead of Talk To Us
  const navItems = [
      { id: "solutions", label: "Our Solutions", color: "teal" },
    { id: "codex", label: "codeX", color: "red" },
    { id: "contact", label: "Contact", color: "teal" },
  ];



  /* ===== Scroll Blur Effect ===== */
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




  /* ===== Active Section Observer ===== */
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





      {/* ===== Navbar ===== */}
      <motion.nav
        ref={navRef}
        variants={navVariants}
        initial="hidden"
        animate="visible"
        className="fixed top-0 left-0 right-0 z-50 px-6 md:px-20 py-4 pt-7 flex items-center justify-between border-b-[0.5px] font-[Poppins]"
      >
        {/* Logo */}
        <div className="text-2xl font-bold text-teal-400">icon</div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8 text-white">
          {navItems.map((item) => (
            <motion.a
              key={item.id}
              href={`#${item.id}`}
              variants={itemVariants}
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
              className={`relative pb-2 text-md ${
                item.color === "teal" ? "hover:text-teal-300" : "hover:text-red-300"
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
                    activeSection === item.id || hoveredItem === item.id ? 1 : 0,
                }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
                style={{ originX: "50%" }}
              />
            </motion.a>
          ))}

          <motion.button
            whileHover={{ scale: 1.05 }}
            className="ml-6 bg-teal-400 hover:bg-teal-500 text-slate-950 font-semibold py-2 px-5 rounded-3xl"
          >
            Launch App
          </motion.button>
        </div>





        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-teal-400"
          >
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </motion.nav>




      {/* ===== Mobile Menu ===== */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden fixed top-[72px] left-0 right-0 z-40 bg-[#0d0d0d]/95 backdrop-blur-xl border-t border-white/10 flex flex-col items-center py-6 space-y-6 text-white"
          >
{navItems.map((item) => (
  <motion.a
    key={item.id}
    href={`#${item.id}`}
    onClick={() => setMenuOpen(false)}
    whileHover={{ scale: 1.1 }}   // stronger bounce on hover
    whileTap={{ scale: 0.95 }}    // click feedback
    className={`text-lg font-semibold transition-colors ${
      activeSection === item.id
        ? item.color === "teal"
          ? "text-teal-400"
          : "text-red-500"
        : item.color === "teal"
        ? "hover:text-teal-300"
        : "hover:text-red-300"
    }`}
  >
    {item.label}
  </motion.a>
))}


            <button className="mt-2 bg-teal-400 text-slate-950 font-semibold py-2 px-6 rounded-full">
              Launch App
            </button>
          </motion.div>
        )}
      </AnimatePresence>



      {/* Spacer */}
      <div className="h-20" />
    </>
  );
};

export default Navbar;

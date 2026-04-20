
// -----------------------------------------------------------------------------

// import React from 'react'
// import { Routes, Route, Navigate } from "react-router-dom"
// import CustomCursor from './components/CustomCursor.jsx'

// import Section1 from "./components/Section1.jsx"
// import Section2 from './components/Section2.jsx'
// import OurSolutions from "./components/OurSolutions.jsx"
// import Section5 from './components/Section5.jsx'
// import Section6 from './components/Section6.jsx'

// import Navbar from "./components/Section1/Navbar.jsx"
// import AuthForm from "./components/AuthForm.jsx"

// // ✅ Import the merged dashboard component
// import Dashboard from "./components/Dashboard.jsx"

// // Home Component: Wrapper for all landing page sections
// const Home = () => (
//   <div id="main" className="w-full isolate">
//     <Section1/>
//     <Section2/>
//     <OurSolutions />
//     <Section5/>
//     <Section6/>
//   </div>
// )

// // Simple route protection logic
// const ProtectedRoute = ({ children }) => {
//   const token = localStorage.getItem("token")
//   return token ? children : <Navigate to="/auth" replace />
// }

// const App = () => {
//   return (
//     <div className="bg-[#0d0d0d] min-h-screen w-full max-w-full overflow-x-hidden selection:bg-emerald-500/30"> 
//       {/* CustomCursor handles its own mobile-hiding logic internally */}
//       <CustomCursor />
      
//       {/* Global Navbar */}
//       <Navbar />

//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/auth" element={<AuthForm />} />

//         {/* ✅ Protected Dashboard Route */}
//         <Route
//           path="/dashboard"
//           element={
//             <ProtectedRoute>
//               <Dashboard />
//             </ProtectedRoute>
//           }
//         />
        
//         {/* Catch-all redirect to Home */}
//         <Route path="*" element={<Navigate to="/" replace />} />
//       </Routes>
//     </div>
//   )
// }

// export default App

// --------------------------------------------------------------------

import React from 'react'
import { Routes, Route, Navigate, useLocation } from "react-router-dom"
import CustomCursor from './components/CustomCursor.jsx'

import Section1 from "./components/Section1.jsx"
import Section2 from './components/Section2.jsx'
import OurSolutions from "./components/OurSolutions.jsx"
import Section5 from './components/Section5.jsx'
import Section6 from './components/Section6.jsx'

import Navbar from "./components/Section1/Navbar.jsx"
import AuthForm from "./components/AuthForm.jsx"

import FooterMain from "./components/FooterMain.jsx"

// ✅ Dashboard import
import Dashboard from "./components/Dashboard.jsx"
import PrivacyPolicy from "./pages/PrivacyPolicy.jsx";

// Home Component
const Home = () => (
  <div id="main" className="w-full isolate">
    <Section1/>
    <Section2/>
    <OurSolutions />
    <Section5/>
    <Section6/>
    <FooterMain />
  </div>
)

// Simple route protection
const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token")
  return token ? children : <Navigate to="/auth" replace />
}

const App = () => {
  const location = useLocation()
  const hideNavbarOn = ["/dashboard"] // pages where original Navbar is hidden

  return (
    <div className="bg-[#0d0d0d] min-h-screen w-full max-w-full overflow-x-hidden selection:bg-emerald-500/30"> 
      <CustomCursor />

      {/* Show original Navbar only if not in hidden paths */}
      {!hideNavbarOn.includes(location.pathname) && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<AuthForm />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />

        {/* Protected Dashboard */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        {/* Catch-all redirect */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  )
}

export default App
import React from 'react'
import CustomCursor from './components/CustomCursor.jsx';
 
import Section1 from "./components/Section1.jsx";
import Section2 from './components/Section2.jsx';
import OurSolutions from "./components/OurSolutions.jsx";
import Section5 from './components/Section5.jsx';
import Section6 from './components/Section6.jsx';


const App = () => {
  return (
    <div>
      <div id="main" className='min-h-screen bg-[#0d0d0d] text-white overflow-x-hidden'>
        <CustomCursor/>
        
        <Section1/>
        <Section2/>
        <OurSolutions />
        <Section5/>
        <Section6/>
        

      </div>
    </div>
  )
}

export default App

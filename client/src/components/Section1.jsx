// Section1.jsx
import React from 'react'
import Navbar from "./Section1/Navbar.jsx";
import NextGenCard from './Section1/NextGenCard.jsx';
import HeroContainer from './Section1/HeroContainer.jsx';
import VideoScrollSection from './Section1/VideoScrollSection.jsx';
import ProgressBar from './ProgressBar.jsx';

const Section1 = () => {
    return (
        /* 🔥 THE FIX: 
           'relative' makes this div the anchor for the video.
           'overflow-hidden' clips any video that tries to go lower.
        */
        <div className="relative w-full z-4 overflow-hidden">
            <Navbar/>
            <ProgressBar/>
            <HeroContainer/>
            <VideoScrollSection/>
        </div>
    )
}

export default Section1;
import React from 'react'
import Navbar from "./Section1/Navbar.jsx";
import NextGenCard from './Section1/NextGenCard.jsx';
import HeroContainer from './Section1/HeroContainer.jsx';
import VideoScrollSection from './Section1/VideoScrollSection.jsx';
import ProgressBar from './ProgressBar.jsx';


const Section1 = () => {
    return (
        <div>
            <Navbar/>
            <ProgressBar/>
            <HeroContainer/>
            <VideoScrollSection/>
        </div>
    )
}

export default Section1;
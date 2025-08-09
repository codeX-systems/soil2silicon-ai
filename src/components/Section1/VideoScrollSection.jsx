// Section1/VideoScrollSection.jsx

import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const VideoScrollSection = () => {
  const videoSectionRef = useRef(null);
  const heading1Ref = useRef(null);
  const heading2Ref = useRef(null);

  useEffect(() => {
    const videoEl = videoSectionRef.current;

    // Fade in video section
    gsap.fromTo(videoEl, 
      { opacity: 0 }, 
      {
        opacity: 1,
        scrollTrigger: {
          trigger: videoEl,
          start: "top 80%",
          end: "top 30%",
          scrub: true,
        }
      }
    );

    // Pop in Heading 1
    gsap.fromTo(heading1Ref.current,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: videoEl,
          start: "top 60%",
          end: "top 50%",
          scrub: true,
        }
      }
    );

    // Pop in Heading 2
    gsap.fromTo(heading2Ref.current,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: videoEl,
          start: "top 40%",
          end: "top 30%",
          scrub: true,
        }
      }
    );
  }, []);

  return (
    <section
      ref={videoSectionRef}
      className="relative h-screen w-full bg-black overflow-hidden flex items-center justify-center"
    >
      {/* Video Background */}
      <video
        className="absolute inset-0 w-full h-full object-cover opacity-70"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/field_header.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Headings */}
      <div className="relative z-10 text-center text-white">
        <h2 ref={heading1Ref} className="text-4xl md:text-5xl font-bold mb-6 opacity-0">
          Next Gen Farming
        </h2>
        <h2 ref={heading2Ref} className="text-3xl md:text-4xl font-medium opacity-0">
          Powered by AI & Data
        </h2>
      </div>
    </section>
  );
};

export default VideoScrollSection;

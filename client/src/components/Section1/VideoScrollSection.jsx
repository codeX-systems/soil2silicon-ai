import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const VideoScrollSection = () => {
  const videoSectionRef = useRef(null);
  const heading1Ref = useRef(null);
  const heading2Ref = useRef(null);
  const heading3Ref = useRef(null);

 useEffect(() => {
  const videoEl = videoSectionRef.current;
  const h1 = heading1Ref.current;
  const h2 = heading2Ref.current;
  const h3 = heading3Ref.current;

  if (!videoEl) return;

  gsap.fromTo(videoEl, { opacity: 0 }, {
    opacity: 1,
    scrollTrigger: {
      trigger: videoEl,
      start: 'top 80%',
      end: 'top 30%',
      scrub: true,
    },
  });

  if (h1) {
    gsap.fromTo(h1, { y: 40, opacity: 0 }, {
      y: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: videoEl,
        start: 'top 70%',
        end: 'top 60%',
        scrub: true,
      },
    });
  }

  if (h2) {
    gsap.fromTo(h2, { y: 40, opacity: 0 }, {
      y: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: videoEl,
        start: 'top 60%',
        end: 'top 50%',
        scrub: true,
      },
    });
  }

  if (h1 && h2) {
    gsap.to([h1, h2], {
      y: -40,
      opacity: 0,
      scrollTrigger: {
        trigger: videoEl,
        start: 'top 35%',
        end: 'top 25%',
        scrub: true,
      },
    });
  }

  if (h3) {
    gsap.fromTo(h3, { y: 40, opacity: 0 }, {
      y: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: videoEl,
        start: 'top 35%',
        end: 'top 25%',
        scrub: true,
      },
    });
  }
}, []);


  return (
    <section
      ref={videoSectionRef}
      // className="relative h-auto w-full  overflow-hidden flex items-center justify-center"
    >
     

      {/* Headings */}
      {/* <div className="absolute z-10 text-left text-white top-1/2 left-8 transform -translate-y-1/2 space-y-4">
        <h2
          ref={heading1Ref}
          className="text-4xl md:text-5xl font-bold opacity-0"
        >
          Next Gen Farming
        </h2>
        <h2
          ref={heading2Ref}
          className="text-3xl md:text-4xl font-medium opacity-0"
        >
          Powered by AI & Data
        </h2>
       
      </div> */}
    </section>
  );
};

export default VideoScrollSection;




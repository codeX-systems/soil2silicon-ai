// // Section1/VideoScrollSection.jsx

// import React, { useRef, useEffect } from 'react';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

// gsap.registerPlugin(ScrollTrigger);

// const VideoScrollSection = () => {
//   const videoSectionRef = useRef(null);
//   const heading1Ref = useRef(null);
//   const heading2Ref = useRef(null);

//   useEffect(() => {
//     const videoEl = videoSectionRef.current;

//     // Fade in video section
//     gsap.fromTo(videoEl, 
//       { opacity: 0 }, 
//       {
//         opacity: 1,
//         scrollTrigger: {
//           trigger: videoEl,
//           start: "top 80%",
//           end: "top 30%",
//           scrub: true,
//         }
//       }
//     );

//     // Pop in Heading 1
//     gsap.fromTo(heading1Ref.current,
//       { y: 40, opacity: 0 },
//       {
//         y: 0,
//         opacity: 1,
//         delay: 0.5,
//         scrollTrigger: {
//           trigger: videoEl,
//           start: "top 60%",
//           end: "top 50%",
//           scrub: true,
//         }
//       }
//     );

//     // Pop in Heading 2
//     gsap.fromTo(heading2Ref.current,
//       { y: 40, opacity: 0 },
//       {
//         y: 0,
//         opacity: 1,
//         delay:1,
//         scrollTrigger: {
//           trigger: videoEl,
//           start: "top 40%",
//           end: "top 30%",
//           scrub: true,
//         }
//       }
//     );
    
//     gsap.fromTo(
//       heading3Ref.current,
//       { y: 40, opacity: 0 },
//       {
//         y: 0,
//         opacity: 1,
//         scrollTrigger: {
//           trigger: heading3TriggerEl, // an element further down
//           start: "top 60%",
//           end: "top 50%",
//           scrub: true,
//         },
//       }
//     );

//     // Make second heading scroll out as third comes in
//     gsap.to(heading2Ref.current, {
//       y: -40,
//       opacity: 0,
//       scrollTrigger: {
//         trigger: heading3TriggerEl,
//         start: "top 80%",
//         end: "top 60%",
//         scrub: true,
//       },
//     });
//   }, []);

//   return (
//     <section
//       ref={videoSectionRef}
//       className="relative h-screen w-full bg-black overflow-hidden flex items-center justify-center"
//     >
//       {/* Video Background */}
//       <video
//         className="absolute inset-0 w-full h-full object-cover opacity-70"
//         autoPlay
//         muted
//         loop
//         playsInline
//       >
//         <source src="/field_header.mp4" type="video/mp4" />
//         Your browser does not support the video tag.
//       </video>

//       {/* Headings */}
//       <div className="absolute z-10 text-left text-white top-1/2 left-8 transform -translate-y-1/2">
//         <h2
//           ref={heading1Ref}
//           className="text-4xl md:text-5xl font-bold mb-6 opacity-0"
//         >
//           Next Gen Farming
//         </h2>
//         <h2
//           ref={heading2Ref}
//           className="text-3xl md:text-4xl font-medium opacity-0"
//         >
//           Powered by AI & Data
//         </h2>
//       </div>

//     </section>
//   );
// };

// export default VideoScrollSection;









































// Section1/VideoScrollSection.jsx

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

    // Fade in video section
    gsap.fromTo(
      videoEl,
      { opacity: 0 },
      {
        opacity: 1,
        scrollTrigger: {
          trigger: videoEl,
          start: 'top 80%',
          end: 'top 30%',
          scrub: true,
        },
      }
    );

    // Heading 1 - appear slowly
    gsap.fromTo(
      heading1Ref.current,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: videoEl,
          start: 'top 70%',
          end: 'top 60%',
          scrub: true,
        },
      }
    );

    // Heading 2 - appear after heading 1
    gsap.fromTo(
      heading2Ref.current,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: videoEl,
          start: 'top 60%',
          end: 'top 50%',
          scrub: true,
        },
      }
    );

    // EXIT: Headings 1 & 2 fade/move out together when heading 3 appears
    gsap.to([heading1Ref.current, heading2Ref.current], {
      y: -40,
      opacity: 0,
      scrollTrigger: {
        trigger: videoEl,
        start: 'top 35%', // When exit starts
        end: 'top 25%',   // When exit ends
        scrub: true,
      },
    });

    // Heading 3 - appear after first two exit
    gsap.fromTo(
      heading3Ref.current,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: videoEl,
          start: 'top 35%',
          end: 'top 25%',
          scrub: true,
        },
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
      <div className="absolute z-10 text-left text-white top-1/2 left-8 transform -translate-y-1/2 space-y-4">
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
        <h2
          ref={heading3Ref}
          className="text-3xl md:text-4xl font-medium opacity-0"
        >
          Sustainable Agriculture for the Future
        </h2>
      </div>
    </section>
  );
};

export default VideoScrollSection;




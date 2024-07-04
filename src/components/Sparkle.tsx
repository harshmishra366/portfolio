import React from 'react';
import { StickyScroll } from './ui/sticky-scroll-reveal';
import Image from 'next/image';

const content = [
  {
    title: "Youtube/Twitter Backend",
    description:
      "I designed and developed the backends for YouTube and Twitter using the MERN stack. This project involved implementing user authentication, video uploading, and tracking subscriber and likes counts. Through this, I gained a deep understanding of backend development and RESTful APIs. It showcases my proficiency in full-stack development.",
    content: (
      <div className="h-full w-full bg-white flex items-center justify-center text-white">
       <Image
       src="/Ytandtwt.jpg"
       width={500}
       height={650}
       alt='Youtube and Twitter'
        />
      </div>
    ),
  },
  {
    title: "Blog and Basic React Project",
    description:
      "I designed and developed a blog website and a basic React project to demonstrate my frontend development skills. These projects involved creating responsive UI components. Through this, I improved my understanding of React and state management. The projects highlight my ability to create user-friendly web applications.",
    content: (
      <div className="h-full w-full bg-white flex items-center justify-center text-black">
        <Image
          src="/react.png"
          width={500}
          height={650}
          alt='Blog and Basic React Project'
          className="object-contain"
        />
      </div>
    ),
  },
  {
    title: "Weather App",
    description:
      "I designed and developed a weather dashboard website using JavaScript and API integration to showcase my frontend development expertise. These projects involved creating responsive UI components and integrating them with backend services. Through this, I improved my understanding of React and state management. The projects highlight my ability to create user-friendly web applications.",
    content: (
      <div className="h-full w-full bg-gradient-to-br from-orange-500 to-yellow-500 flex items-center justify-center text-white">
        {/* Content for Weather App */}
        <Image
       src="/weather.jpg"
       width={200}
       height={200}
       alt='Youtube and Twitter'
        />
      </div>
    ),
  },
  {
    title: "Basic Next Project",
    description:
      "I designed and developed a website using basic Next.js, focusing primarily on the user interface. The site utilizes the Acceternity UI library to deliver a clean and modern design. This project helped me gain experience in integrating UI libraries with Next.js. It showcases my ability to build aesthetically pleasing and functional web interfaces.",
    content: (
      <div className="h-full w-full bg-black flex items-center justify-center text-black">
        <Image
          src="/next.jpg"
          width={600}
          height={600}
          alt='Basic Next Project'
          className="object-contain"
        />
      </div>
    ),
  },
];

function Sparkle() {
  return (
    <div className="relative h-[35rem] overflow-hidden bg-slate-900">
    
     
      
        <StickyScroll content={content} />
     
    </div>
  );
}

export default Sparkle;



// "use client"
// import React from 'react'
// import { Vortex } from './ui/vortex'

// function Project() {
//   return (
//     <div className="w-full mx-auto rounded-md  overflow-hidden bg-gradient-to-b from-gray-800 to-black h-[40rem] min-h-screen">
//       {/* <Vortex
//         backgroundColor="black"
//         rangeY={800}
//         particleCount={500}
//         baseHue={120}
//         className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
//       >
//         <h2 className="text-white text-2xl md:text-6xl font-extrabold text-center font-mono tracking-widest drop-shadow-lg">
//           Some Projects
//         </h2>
//       </Vortex> */}
//     </div>
//   )
// }

// export default Project
"use client";
import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function Project() {
  const data = [
    {
      title: "2‑Sep 2024 – 28‑Feb 2025",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Completed an internship at Vighnotech. Learned scalable web‑app development and team collaboration.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg"
              alt="Modern office workspace"
              className="h-20 w-full rounded-lg object-cover shadow-lg md:h-44 lg:h-60"
            />
            <img
              src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg"
              alt="Team working together in meeting"
              className="h-20 w-full rounded-lg object-cover shadow-lg md:h-44 lg:h-60"
            />
            <img
              src="https://images.unsplash.com/photo-1573497491208-6b1acb260507?auto=format&fit=crop&w=800&q=80"
              alt="Software developer coding on laptop"
              className="h-20 w-full rounded-lg object-cover shadow-lg md:h-44 lg:h-60"
            />
            <img
              src="https://images.pexels.com/photos/245032/pexels-photo-245032.jpeg"
              alt="Modern professional workspace"
              className="h-20 w-full rounded-lg object-cover shadow-lg md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Early 2024",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Focused on enhancing my full‑stack development skills by diving into modern web technologies, coding best practices, and building responsive applications.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=500&q=60"
              alt="Full‑stack coding"
              className="h-20 w-full rounded-lg object-cover shadow-lg md:h-44 lg:h-60"
            />
           
            <img
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=500&q=60"
              alt="Responsive interface design"
              className="h-20 w-full rounded-lg object-cover shadow-lg md:h-44 lg:h-60"
            />
            <img
              src="https://images.pexels.com/photos/7989024/pexels-photo-7989024.jpeg"
              alt="Code review session"
              className="h-20 w-full rounded-lg object-cover shadow-lg md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
   {
  title: "Extracurricular – CSI Member",
  content: (
    <div>
      <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
        Actively participated in college events as a member of the CSI club, organizing tech workshops and contributing to community projects.
      </p>
      <div className="grid grid-cols-2 gap-4">
        <img
          src="https://images.pexels.com/photos/1181308/pexels-photo-1181308.jpeg"
          alt="Student tech workshop"
          className="h-20 w-full rounded-lg object-cover shadow-lg md:h-44 lg:h-60"
        />
        <img
          src="https://images.pexels.com/photos/256395/pexels-photo-256395.jpeg"
          alt="College group activity"
          className="h-20 w-full rounded-lg object-cover shadow-lg md:h-44 lg:h-60"
        />
        <img
          src="https://images.pexels.com/photos/3184436/pexels-photo-3184436.jpeg"
          alt="Volunteering for a community event"
          className="h-20 w-full rounded-lg object-cover shadow-lg md:h-44 lg:h-60"
        />
        <img
          src="https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg"
          alt="Student networking at tech event"
          className="h-20 w-full rounded-lg object-cover shadow-lg md:h-44 lg:h-60"
        />
      </div>
    </div>
  ),
}

  ];

  return (
    <div className="relative w-full overflow-hidden">
      <Timeline data={data} />
    </div>
  );
}
// https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=500&q=60
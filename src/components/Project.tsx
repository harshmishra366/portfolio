"use client"
import React from 'react'
import { Vortex } from './ui/vortex'

function Project() {
  return (
    <div className="w-full mx-auto rounded-md  overflow-hidden bg-gradient-to-b from-gray-800 to-black h-[40rem] min-h-screen">
      <Vortex
        backgroundColor="black"
        rangeY={800}
        particleCount={500}
        baseHue={120}
        className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
      >
        <h2 className="text-white text-2xl md:text-6xl font-extrabold text-center font-mono tracking-widest drop-shadow-lg">
          Some Projects
        </h2>
      </Vortex>
    </div>
  )
}

export default Project


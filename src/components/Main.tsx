import React from 'react';
import { BackgroundGradientAnimation } from './ui/background-gradient-animation';
import { Spotlight } from './ui/Spotlight';
import { Boxes } from './ui/background-boxes';
import { FlipWords } from './ui/flip-words';
import { Kanit } from "next/font/google";

function Main() {
  const words = ["FULL-STACK DEVELOPER", "STUDENT"];

  return (
    <BackgroundGradientAnimation>
      <div className="w-full h-[50rem] flex flex-col items-center justify-center">
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="white"
        />
        <div className="flex flex-col items-center">
          <div className="font-extrabold text-8xl text-center ${Kanit} font-sans">
            <p className="text-8xl">Harsh <br /> Mishra</p>
          </div>
          <div className="mt-7 font-light">
            <p>I &apos; M ASPIRING SOFTWARE ENGINEER</p>
            I &apos; M A
            <FlipWords words={words} duration={2000} />
          </div>
        </div>
      </div>
    </BackgroundGradientAnimation>
  );
}

export default Main;

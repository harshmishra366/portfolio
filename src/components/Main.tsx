import React from 'react';
import { BackgroundGradientAnimation } from './ui/background-gradient-animation';
import { Spotlight } from './ui/Spotlight';
import { Boxes } from './ui/background-boxes';

function Main() {
  return (
    <div className="w-full h-[50rem] flex flex-col items-center justify-center">
      <Spotlight />
      <div className="flex flex-col items-center">
        <div className="font-extrabold text-8xl text-center">
          <p className="text-9xl">Harsh Mishra</p>
          
        </div>
        <div className="flex flex-col items-center mt-4 font-semibold font-light">
          <p>I'M AN ASPIRING SOFTWARE ENGINEER & A STUDENT</p>
          <p>I'M ALSO A FULL-STACK DEVELOPER</p>
        </div>
      </div>
    </div>
  );
}

export default Main;



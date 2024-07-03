import React from 'react';
import { BackgroundGradientAnimation } from './ui/background-gradient-animation';
import { Spotlight } from './ui/Spotlight';
import { Boxes } from './ui/background-boxes';

function Main() {
  return (
    <BackgroundGradientAnimation>
     
    <div className="w-full h-[50rem] flex flex-col items-center justify-center">

    <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
    
      
      <div className="flex flex-col items-center">
        <div className="font-extrabold text-8xl text-center">
          <p className="text-8xl">Harsh <br></br>Mishra</p>
          
        </div>
        <div className="flex flex-col items-center mt-7  font-light">
          <p>I&apos;M AN ASPIRING SOFTWARE ENGINEER & A STUDENT</p>
          <p>I&apos;M ALSO A FULL-STACK DEVELOPER</p>
        </div>
      </div>
      
    </div>
    </BackgroundGradientAnimation>
  );
}

export default Main;



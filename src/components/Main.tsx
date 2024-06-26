import React from 'react';
import { BackgroundGradientAnimation } from './ui/background-gradient-animation';
import { SparklesCore } from './ui/sparkles';
import { Spotlight } from './ui/Spotlight';
function Main() {
  return (
   
    <BackgroundGradientAnimation>
        <Spotlight fill='blue'  className="-top-40 left-0 md:left-60 md:-top-20"/>
      
    
      <div className='min-h-screen flex items-center justify-center'>
        <div className='text-center text-white'>
          <h1 className='font-bold text-6xl'>Harsh Mishra</h1>
          <p className='my-4 font-semibold'>I am an aspiring Software Engineer & A Student</p>
          <p className='my-4 font-semibold'>I am also a Full-Stack Developer</p>
        </div>
      </div>
    </BackgroundGradientAnimation>
  );
}

export default Main;

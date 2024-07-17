import React from 'react';
import { WavyBackground } from './ui/wavy-background';
import { Button } from './ui/moving-border';
import Link from 'next/link';

function WavyBackgroundComponent() {
  return (
    <div className="relative h-[50rem] min-h-screen overflow-hidden flex items-center justify-center mt-20">
      <WavyBackground className="w-full flex flex-col items-center justify-center h-full">
        <h2 className="text-2xl md:text-4xl lg:text-7xl text-white font-bold text-center mb-8">Lets Work Together</h2>
        <p className="text-base md:text-lg text-white text-center mb-4"></p>
        <div className="flex flex-row items-center justify-center mb-10 w-full">
          {/* Additional content or elements */}
        </div>
        <div>
          <Button className=' bg-black font-semibold'>
            <Link href={"#"}>
            Contact Me
            </Link>
          </Button>
        </div>
      </WavyBackground>
    </div>
  );
}

export default WavyBackgroundComponent;


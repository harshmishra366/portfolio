"use client";
import React, { useMemo } from "react";
import { FlipWords } from "./ui/flip-words";
import { Kanit } from "next/font/google";

const kanit = Kanit({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

const Main = () => {
  const words = useMemo(() => ["FULL-STACK DEVELOPER", "STUDENT"], []);

  return (
    <div className="w-full h-screen flex items-center justify-center bg-black">
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center">
        {/* Left Section */}
        <div
          className={`flex flex-col items-start justify-center p-6 md:w-1/2 ${kanit.className}`}
        >
          <div className="font-extrabold text-6xl md:text-8xl text-white mb-4">
            <p className="leading-tight">
              Harsh <br /> Mishra
            </p>
          </div>
          <div className="font-light text-white text-xl">
            <p>I&apos;M ASPIRING SOFTWARE ENGINEER</p>
            <p>
              I&apos;M A <FlipWords words={words} duration={2000} />
            </p>
          </div>
          <div className="mt-7 font-light">
            <p>I &apos; M ASPIRING SOFTWARE ENGINEER</p>
            I &apos; M A
            <FlipWords words={words} duration={2000} />
          </div>
        </div>
      </div>

      {/* Styles */}
      <style jsx>{`
        .scene {
          width: min(60vw, 300px);
          height: min(60vw, 300px);
          perspective: 1000px;
          position: relative;
        }

        .cube {
          width: 100%;
          height: 100%;
          position: relative;
          transform-style: preserve-3d;
          animation: rotateCube 6s infinite linear;
          will-change: transform;
        }

        .face {
          position: absolute;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            135deg,
            rgba(0, 255, 255, 0.15),
            rgba(0, 128, 255, 0.3)
          );
          color: #0ff;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.4rem;
          font-weight: 700;
          border: 1.5px solid #0ff;
          box-shadow: 0 0 10px rgba(0, 255, 255, 0.6),
            inset 0 0 4px rgba(0, 255, 255, 0.3);
          text-shadow: 0 0 2px #0ff;
          backdrop-filter: blur(4px);
        }

        .front {
          transform: translateZ(150px);
        }
        .back {
          transform: rotateY(180deg) translateZ(150px);
        }
        .right {
          transform: rotateY(90deg) translateZ(150px);
        }
        .left {
          transform: rotateY(-90deg) translateZ(150px);
        }
        .top {
          transform: rotateX(90deg) translateZ(150px);
        }
        .bottom {
          transform: rotateX(-90deg) translateZ(150px);
        }

        @keyframes rotateCube {
          0% {
            transform: rotateX(0deg) rotateY(0deg);
          }
          100% {
            transform: rotateX(360deg) rotateY(360deg);
          }
        }

        .cube-label {
          position: absolute;
          top: -32px;
          left: 0;
          width: 100%;
          text-align: center;
          color: #0ff;
          font-size: 0.9rem;
          font-family: monospace;
          text-shadow: 0 0 5px #0ff;
          opacity: 0.8;
        }
      `}</style>
    </div>
  );
};

export default Main;


// .cube-label {
//           position: absolute;
//           top: -32px;
//           left: 0;
//           width: 100%;
//           text-align: center;
//           color: #0ff;
//           font-size: 0.9rem;
//           font-family: monospace;
//           text-shadow: 0 0 5px #0ff;
//           opacity: 0.8;
//         }

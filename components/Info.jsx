/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState } from "react";
import Globe from "react-globe.gl";

const Info = () => {

  const [hasCopied, setHasCopied] = useState(false);

  function handleCopy() {
    navigator.clipboard.writeText('satyamkalihari17@gmail.com')

    setHasCopied(true)

    setTimeout(() => {
      setHasCopied(false)
    }, 2000)
  }

  return (
    <div className="h-[90vh] text-white">
      <div className="h-full grid grid-cols-4 sm:grid-cols-3 grid-rows-7 gap-3 p-3 overflow-hidden">
        <div className=" row-span-3 col-span-2 sm:row-span-4 sm:col-span-1 border border-white-500 rounded-lg flex flex-col justify-end items-center relative">
          <img
            src="./assets/grid1.png"
            alt="grid-1"
            className=" absolute bottom-[10%] blur-sm sm:blur-0"
          />
          <div className="w-full absolute bottom-0 p-2 ">
            <h1 className=" font-semibold text-lg">
              Hi, I&apos;m Satyam Kalihari
            </h1>
            <p className=" font-light">
              With 2 years of experience, I have honed my skills in both
              frontend and backend dev, creating dynamic and responsive
              websites.
            </p>
          </div>
        </div>
        <div className=" row-span-3 col-span-2 sm:row-span-4 sm:col-span-1 border border-white-500 rounded-lg flex flex-col justify-center items-center relative">
          <img
            src="./assets/grid2.png"
            alt="grid-2"
            className="scale-75 blur-sm sm:blur-0 size-80"
          />
          <div className="w-full absolute bottom-0 p-2 ">
            <h1 className=" font-semibold  text-lg">Tech Stack</h1>
            <p className=" font-light">
              I specialize in a variety of languages, frameworks, and tools that
              allow me to build robust and scalable applications
            </p>
          </div>
        </div>
        <div className=" row-span-2 col-span-3 sm:row-span-5 sm:col-span-1 border border-white-500 rounded-lg relative flex sm:justify-center items-center">
          <div className="flex justify-center items-center scale-50 sm:scale-100">
            <Globe
              height={290}
              width={290}
              backgroundColor="rgba(0, 0, 0, 0)"
              backgroundImageOpacity={0.5}
              showAtmosphere
              showGraticules
              globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
              bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
              labelsData={[
                {
                  lat: 40,
                  lng: -100,
                  text: "Rjieka, Croatia",
                  color: "white",
                  size: 15,
                },
              ]}
            />
          </div>
          <div className="w-full bottom-0 p-2 absolute">
            <h1 className=" font-semibold  text-lg">
              I&apos;m very flexible with time zone communications & locations
            </h1>
          </div>
        </div>
        <div className="same sm:hidden row-span-2 bg-opacity-50 rounded-lg flex flex-col justify-center items-center">
          <div
            className="copy-container  rotate-90 flex flex-col justify-center items-center scale-75"
            onClick={handleCopy}
          >
            <img
              src={hasCopied ? "assets/tick.svg" : "assets/copy.svg"}
              alt="copy"
            />
            <p className=" font-medium text-gray_gradient text-white">
              satyamkalihari17@gmail.com
            </p>
          </div>
        </div>
        <div className=" row-span-2 col-span-4 sm:row-span-3 sm:col-span-2 border border-white-500 rounded-lg relative">
          <img
            src="assets/grid3.png"
            alt="grid-3"
            className="w-full sm:h-[266px] h-fit object-contain hidden sm:block"
          />
          <div className="w-full absolute bottom-0 p-2">
            <h1 className=" font-semibold text-lg">My Passion for Coding</h1>
            <p className=" font-light">
              I love solving problems and building things through code.
              Programming isn&apos;tjust my profession—it&apos;s my passion. I
              enjoy exploring new technologies, and enhancing my skills.
            </p>
          </div>
        </div>
        <div className="same hidden sm:block row-span-2 border border-white-500 rounded-lg relative">
          <img
            src="assets/grid4.png"
            alt="grid-3"
            className="w-full sm:h-[266px] h-fit object-contain blur-sm"
          />
          <div className="space-y-2 w-full absolute bottom-0 p-2 ">
            <p className="grid-subtext text-center">Contact me</p>
            <div className="copy-container" onClick={handleCopy}>
              <img
                src={hasCopied ? "assets/tick.svg" : "assets/copy.svg"}
                alt="copy"
              />
              <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">
                satyamkalihari17@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;

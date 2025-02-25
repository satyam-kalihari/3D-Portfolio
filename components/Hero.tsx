/* eslint-disable @typescript-eslint/no-unused-vars */
import { OrbitControls, PerspectiveCamera, SpotLight } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import Vrman from "./Vrman";
import CanvasLoader from "./CanvasLoader";
import Cursor from "./Arrow";
import ReactLogo from "./ReactLogo";
import Cube from "./Cube";
import SpikeBall from "./SpikeBall";
import HeroCamera from "./HeroCamera";
import { useMediaQuery } from "react-responsive";

const Hero = () => {
  const isSmall = useMediaQuery({ maxWidth: 426 });

  return (
    <section className="h-[150vh] w-full flex flex-col relative" id="home">
      <div className=" w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3 bg-transparent">
        <p className="sm:text-3xl text-xl font-medium text-white text-center font-generalsans">
          Hi, I am oBITO <span className="waving-hand">👋</span>
        </p>
        <p className="hero_tag text-gray_gradient">
          Building Products & Brands
        </p>
      </div>

      <div className="w-full h-[150vh] absolute">
        <Canvas className="w-full h-full">
          <Suspense fallback={<CanvasLoader />}>
            <PerspectiveCamera makeDefault position={[0, 40, 100]} />
            <ambientLight intensity={0.5} />
            <directionalLight position={[2, 2, 2]} intensity={1} />
            <OrbitControls
              enableRotate={false}
              enableZoom={false}
              enableDamping={false}
              enablePan={false}
            />

            {/* <SpotLight
              distance={20}//kitane duur tak
              scale={3}
              position={[0, 40, 10]}
              angle={3}//kitana spread hoga
              attenuation={40}//kitana blur hoga end mai
              anglePower={3}
            /> */}

            <HeroCamera isSmall={isSmall}>
              <Vrman
                position={[0, -45, 10]}
                scale={1.5}
                rotation={[-0.5, 0, 0]}
              />
            </HeroCamera>

            <group>
              <ReactLogo position={[40, 30, 10]} />
              <Cube scale={18} position={[-40, 30, -10]} rotation={[8, 5, 2]} />
              <Cursor
                scale={[1.5, 6, 3.2]}
                position={[-50, -5, 10]}
                rotation={[2.6, 0, 1]}
              />
              <SpikeBall
                scale={0.3}
                position={[46, -4, 10]}
                rotation={[1, 9, 0]}
              />
            </group>
          </Suspense>
        </Canvas>
        {/* <Arrow /> */}
      </div>
    </section>
  );
};

export default Hero;

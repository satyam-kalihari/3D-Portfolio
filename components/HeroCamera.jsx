"use client";

import { useFrame } from "@react-three/fiber";
import { easing } from "maath";
import React, { useRef } from "react";

const HeroCamera = ({ isSmall, children }) => {
  const groupref = useRef();

  useFrame((state, delta) => {
    easing.damp3(state.camera.position, [0, 60, 90], 0.25, delta);
  });

  return (
    <group ref={groupref} scale={isSmall ? 0.6 : 1}>
      {children}
    </group>
  );
};

export default HeroCamera;

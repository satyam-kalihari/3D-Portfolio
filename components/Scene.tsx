"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Vrman from "./Vrman";

export default function Scene() {
  return (
    <Canvas style={{ height: "100vh", background: "black" }}>
      <OrbitControls enableZoom={false} />

      <ambientLight intensity={0.5} />

      <directionalLight position={[2, 2, 2]} intensity={1} />

      <Vrman />

      {/* <Sphere args={[1, 64, 64]} position={[0, 0, 0]}>
        <MeshDistortMaterial color="hotpink" distort={0.3} speed={2} />
      </Sphere> */}
    </Canvas>
  );
}

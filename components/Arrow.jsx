/* eslint-disable @typescript-eslint/no-unused-vars */
import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, Bounds, Edges, Html } from "@react-three/drei";
// use ↓ "DebugLayerMaterial as LayerMaterial" ↓ here for integrated leva debug panels
import { LayerMaterial, Depth, Fresnel } from "lamina";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);
// import { useControls } from "leva";

const Arrow = () => (
  <Canvas
    orthographic
    dpr={[1, 2]}
    camera={{ position: [0, 0, 10], zoom: 200 }}
  >
    <group rotation={[Math.PI / 5, -Math.PI / 5, Math.PI / 2]}>
      <Bounds fit clip observe margin={1.25}>
        <Cursor scale={[0.1, 1, 0.4]} />
      </Bounds>
      {/* <gridHelper
        args={[10, 40, "#101010", "#050505"]}
        position={[-0.25, 0, 0]}
        rotation={[0, 0, Math.PI / 2]}
      /> */}
    </group>
  </Canvas>
);

const Cursor = (props) => {
  const ref = useRef();
  const divRef = useRef();

  const { nodes } = useGLTF("/models/cursor.glb");
  const gradient = { value: 0.7, min: 0, max: 1 };

  useGSAP(() => {

    gsap.to(ref.current.position, {
      x: ref.current.position.x - 40,
      z: ref.current.position.z - 40,
      scrollTrigger: {
        trigger: divRef.current,
        start: "35% 80%",
        end: "35% 60%",
        scrub: true,
        // markers: true,
      },
    });

    gsap.from(ref.current.position, {
      x: ref.current.position.x - 50,
      z: ref.current.position.z - 50,
      duration: 1.5,
    });
    gsap.to(ref.current.position, {
      y: ref.current.position.y + 2,
      duration: 3,
      repeat: -1,
      yoyo: true,
    });
  });

  // Animate gradient
  useFrame((state) => {
    // const sin = Math.sin(state.clock.elapsedTime / 2);
    // const cos = Math.cos(state.clock.elapsedTime / 2);
    // ref.current.layers[0].origin.set(cos / 2, 0, 0);
    // ref.current.layers[1].origin.set(cos, sin, cos);
    // ref.current.layers[2].origin.set(sin, cos, sin);
    // ref.current.layers[3].origin.set(cos, sin, cos);

    if (ref.current) {
      //   ref.current.rotation.x += 0.01;
      //   ref.current.rotation.y += 0.001;
    }
  });

  return (
    <>
      <Html>
        <div
          style={{ height: "10vh", position: "relative" }}
          ref={divRef}
        ></div>
      </Html>
      <mesh ref={ref} {...props} geometry={nodes.Cube.geometry}>
        <LayerMaterial toneMapped={false}>
          <Depth
            colorA="#ff0080"
            colorB="black"
            alpha={1}
            mode="normal"
            near={0.5 * gradient}
            far={0.5}
            origin={[0, 0, 0]}
          />
          <Depth
            colorA="blue"
            colorB="#f7b955"
            alpha={1}
            mode="add"
            near={2 * gradient}
            far={2}
            origin={[0, 1, 1]}
          />
          <Depth
            colorA="green"
            colorB="#f7b955"
            alpha={1}
            mode="add"
            near={3 * gradient}
            far={3}
            origin={[0, 1, -1]}
          />
          <Depth
            colorA="white"
            colorB="red"
            alpha={1}
            mode="overlay"
            near={1.5 * gradient}
            far={1.5}
            origin={[1, -1, -1]}
          />
          <Fresnel
            mode="add"
            color="white"
            intensity={0.5}
            power={1.5}
            bias={0.05}
          />
        </LayerMaterial>
        <Edges color="white" />
      </mesh>
    </>
  );
};

// export default Arrow;
export default Cursor;

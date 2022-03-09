import * as Typing from "./Typing";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Model from "./Model";

export const TopMain = () => {
  return (
    <div className="w-fit m-auto md:ml-72 mt-72 flex">
      <div>
        <h1 className="text-ti-align-left mt-40 text-offWhite text-base mb-0">
        My Name is
      </h1>
      <h1 className="text-ti-align-left text-lightTeal text-5xl mt-0 mb-0 pt-3 pb-3 font-bold">
        Michael Thomas
      </h1>
      <div className="font-semibold">
        <Typing.Typing />
      </div>
      </div>
      
      <Canvas className="float-right w-1/2 ml-52"
        camera={{ position: [2, 0, 12.25], fov: 15 }}
        style={{width: "50%", height: "100%" }}
      >
        <ambientLight intensity={1.25} />
        <ambientLight intensity={0.1} />
        <directionalLight intensity={0.4} />
        <Suspense fallback={null}>
          <Model position={[0.025, -0.9, 0]} />
        </Suspense>
        <OrbitControls />
      </Canvas>
    </div>
  );
};

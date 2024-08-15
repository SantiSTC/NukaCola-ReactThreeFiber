"use client";

import { Lobster } from "next/font/google";

import { Canvas } from "@react-three/fiber";
import React from "react";
import { Bottle } from "./Bottle";
import { Environment, OrbitControls, ScrollControls } from "@react-three/drei";

function Scene() {
  return (
    <div className="absolute top-0 left-0 w-full h-screen">
      <Canvas camera={{ fov: 35, position: [0, 2, 10] }} className="canvas">
        <ambientLight intensity={0.8} color={"#0xffffff"} />
        <ScrollControls pages={8} damping={0.5}>
          <Bottle />
        </ScrollControls>

        <OrbitControls
          target={[0, 2, 0]}
          enableZoom={false}
          enableRotate={false}
        />
        <Environment files={"./snowy_park_01_1k.hdr"} blur={0.5} />
      </Canvas>
    </div>
  );
}

export default Scene;

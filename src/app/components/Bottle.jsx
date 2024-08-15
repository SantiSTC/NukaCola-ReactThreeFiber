"use client";

import React, { useLayoutEffect, useRef } from "react";
import { useGLTF, useScroll } from "@react-three/drei";
import { GenerateInitMaterial, GenerateAnimations, LoadTextures } from "../utils/utils";
import { useFrame, useThree } from "@react-three/fiber";
import gsap, { Power4 } from "gsap";

export function Bottle(props) {
  const { cristalMaterial, sodaMaterial, brandMaterial } =
    GenerateInitMaterial();
  const scene = useThree((state) => state.scene);
  const timeline = gsap.timeline({
    defaults: { duration: 2, ease: Power4.easeInOut },
  });
  const scroll = useScroll();

  const colorsMaterial = {
    cristal: "#8c8c8c",
    soda: "#000",
  };

  const { nodes, materials } = useGLTF("/Bottle.glb");

  useLayoutEffect(() => {
    const textures = LoadTextures(["FalloutBoy", "Classic", "Quantum", "Sunset"]);
    const animations = GenerateAnimations(scene, colorsMaterial, cristalMaterial, sodaMaterial, brandMaterial, textures);
    animations.map((animation) => {
      timeline.to(
        animation.target,
        { ...animation.animationProperties },
        animation.pointTime
      );
    });
  }, []);

  useFrame(() => {
    timeline.seek(scroll.offset * timeline.duration());
  });

  return (
    <group name="BottleGroup" {...props} dispose={null}>
      <mesh
        name="Bottle"
        geometry={nodes.Bottle.geometry}
        material={cristalMaterial}
      />
      <mesh
        name="Soda"
        geometry={nodes.Soda.geometry}
        material={sodaMaterial}
      />
      <mesh
        name="Brand"
        geometry={nodes.Brand.geometry}
        material={brandMaterial}
      />
      <mesh name="Cap" geometry={nodes.Cap.geometry} material={brandMaterial} />
    </group>
  );
}

useGLTF.preload("/Bottle.glb");

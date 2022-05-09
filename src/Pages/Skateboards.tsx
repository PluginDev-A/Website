import {
  Environment,
  OrbitControls,
  PerspectiveCamera,
  Sky,
  useCamera,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { useState, useEffect } from "react";
import Skateboard from "../components/models/custom/Skateboard";
import Section from "../components/ux/section/Section";
import Socials from "../components/ux/socials/Socials";
import BoardContent from "./Skateboards/BoardContent";
import "./Skateboards/skateboards.scss";

function Skateboards() {
  return (
    <>
      <Canvas className="canvas" style={{ cursor: "move" }}>
        <PerspectiveCamera fov={30} name={"hello"} />
        <Skateboard />
        <Sky distance={450000} sunPosition={[0, 1, 0]} inclination={0} azimuth={0.25} />
        <Environment preset="forest" background near={1} far={100} resolution={1920} />
      </Canvas>
      <Section content={<BoardContent />} />
    </>
  );
}

export default Skateboards;

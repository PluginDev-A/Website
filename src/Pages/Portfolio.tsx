import { Canvas } from "@react-three/fiber";
import React from "react";
import Album from "../models/album/Album";

function Portfolio() {
  return (
    <Canvas>
      <Album />
    </Canvas>
  );
}

export default Portfolio;

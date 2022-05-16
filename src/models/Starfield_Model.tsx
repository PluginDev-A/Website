import { OrbitControls, TorusKnot } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { useContext, useRef } from "react";
import * as THREE from "three";
import { ThemeContext, themes } from "../theme/theme";

function Starfield_Model() {
  const theme = useContext(ThemeContext);
  const ref = useRef<any>();
  const camRef = useRef<any>();
  useFrame(() => {
    ref.current.rotation.y += 0.0001;
    camRef.current.setPolarAngle(window.scrollY / 10000);
  });
  const pMat = new THREE.PointsMaterial({
    color: theme.text,
    transparent: true,
    size: 0.06,
  });

  pMat.map = new THREE.TextureLoader().load("/crosshair.png");

  return (
    <>
      <OrbitControls ref={camRef} dampingFactor={0.02} />
      <points ref={ref} material={pMat}>
        <torusKnotBufferGeometry attach={"geometry"} args={[3, 5, 20, 20]} />
        <ambientLight intensity={10} color={"white"} />
      </points>
    </>
  );
}

export default Starfield_Model;

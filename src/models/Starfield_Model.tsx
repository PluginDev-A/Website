import { OrbitControls, PerspectiveCamera, TorusKnot } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { useContext, useRef } from "react";
import * as THREE from "three";
import { ThemeContext, themes } from "../theme/theme";

function Starfield_Model() {
  const theme = useContext(ThemeContext);
  const ref = useRef<any>();
  const camRef = useRef<any>();
  var mX: number = 0;	
  var mY: number = 0;
  window.addEventListener('mousemove', (e) => {
    mX = (e.clientX - window.innerWidth/2) / window.innerWidth;
    mY = (e.clientY - window.innerHeight/2) / window.innerHeight;
  })
  useFrame(() => {
    ref.current.rotation.y -= 0.001;
    camRef.current.setPolarAngle(90 + (window.scrollY / 10000) - mY);
    camRef.current.setAzimuthalAngle(-mX);
  });
  const pMat = new THREE.PointsMaterial({
    color: theme.text,
    transparent: true,
    size: 0.06,
  });

  pMat.map = new THREE.TextureLoader().load("/crosshair.png");

  return (
    <>
      <OrbitControls ref={camRef} dampingFactor={0.02} attach={'camera'} />
  
      <points ref={ref} material={pMat} >
        <torusKnotBufferGeometry attach={"geometry"} args={[3, 5, 20, 20]} />
        <ambientLight intensity={10} color={"white"} />
      </points>
    </>
  );
}

export default Starfield_Model;

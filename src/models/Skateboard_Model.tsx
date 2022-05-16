import React, { useContext, useRef } from "react";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { Color, MeshLambertMaterial, MeshStandardMaterial } from "three";
import { GLTF } from "three-stdlib";
import * as THREE from "three";
import { ThemeContext } from "../theme/theme";

type GLTFResult = GLTF & {
  nodes: {
    Circle002_1: THREE.Mesh;
    Circle002_2: THREE.Mesh;
    Cylinder_1: THREE.Mesh;
    Cylinder_2: THREE.Mesh;
    Cylinder001: THREE.Mesh;
    Cylinder002: THREE.Mesh;
    Cylinder013: THREE.Mesh;
    Cylinder013_1: THREE.Mesh;
    Cylinder004: THREE.Mesh;
    Cylinder005: THREE.Mesh;
  };
  materials: {
    grip_layer: THREE.MeshStandardMaterial;
    skateboard_wood: THREE.MeshStandardMaterial;
    wheel_connector: THREE.MeshStandardMaterial;
    screw: THREE.MeshStandardMaterial;
    wheels: THREE.MeshStandardMaterial;
  };
};

export default function Skateboard_Model({ ...props }: JSX.IntrinsicElements["group"]) {
  //* import theme colors
  const theme = useContext(ThemeContext);
 

  // *declare 3d object resources
  const { nodes, materials } = useGLTF("/skateboard.gltf") as GLTFResult;
  const wired = new MeshStandardMaterial();
  var themeColor = theme.cta;
  wired.wireframe = true;
  wired.color.set(themeColor);
  

  //* declare all 3d object refs
  const group = useRef<any>();
  const orbitRef = useRef<any>();
  const lwheel = useRef<any>();
  const rwheel = useRef<any>();
  const lbwheel = useRef<any>();
  const rbwheel = useRef<any>();
  const bgroup = useRef<any>();
  const fgroup = useRef<any>();
  const grip = useRef<any>();
  const btruck = useRef<any>();
  const ftruck = useRef<any>();
  var dY: number = 0;
  var mouseX: number = 0;
  var mouseY: number = 0;
  var sY: number = 0;
  var eF: number = 2.4;
  window.addEventListener("mousemove", (e) => {
    mouseX = (e.clientX - window.innerWidth / 2) / window.innerWidth;
    mouseY = (e.clientY - window.innerHeight / 2) / window.innerHeight;
  });

  window.addEventListener('wheel', (e) =>{
    dY = e.deltaY/1000;
    sY = (window.scrollY / window.innerHeight) * eF;
  })

  useFrame(() => {
    lwheel.current.position.y = -1 - sY;
    lwheel.current.rotation.y -= 0.01;
    rwheel.current.rotation.y += 0.01;
    lbwheel.current.rotation.y += 0.01;
    rbwheel.current.rotation.y -= 0.01;
    rwheel.current.position.y = 1 + sY;
    lbwheel.current.position.y = -1 - sY;
    rbwheel.current.position.y = 1 + sY;
    bgroup.current.position.y = -0.45 - sY;
    fgroup.current.position.y = -0.45 - sY;
    grip.current.position.y = sY;
    btruck.current.position.z = -(sY) * 3;
    ftruck.current.position.z = -(sY) * 3;

    group.current.rotation.y = mouseX / 2;
    group.current.rotation.x += dY;
    dY *= 0.9;
  });
  const pMat = new THREE.PointsMaterial({color: theme.cta, size: 0.001})
  const devScale = 1 / window.devicePixelRatio;

  return (
    <group
      scale={devScale}
      ref={group}
      {...props}
      dispose={null}
      rotation={[-0.4, 0, 0]}
    >
      <mesh
        castShadow
        receiveShadow
        ref={grip}
        geometry={nodes.Circle002_1.geometry}
        material={wired}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle002_2.geometry}
        material={materials.skateboard_wood}
      />
      <group
        ref={bgroup}
        position={[-2.11, -0.45, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.1, 0.76, 0.1]}
      >
        <mesh
          castShadow
          receiveShadow
          ref={btruck}
          geometry={nodes.Cylinder_1.geometry}
          material={nodes.Cylinder_1.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder_2.geometry}
          material={nodes.Cylinder_2.material}
        />
        <points
          castShadow
          receiveShadow
          geometry={nodes.Cylinder001.geometry}
          material={pMat}
          ref={lbwheel}
          position={[0, -1.12, 0]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={[10.47, 1.31, 10.47]}
        />
        <points
          castShadow
          receiveShadow
          geometry={nodes.Cylinder002.geometry}
          material={pMat}
          ref={rbwheel}
          position={[0, 1.12, 0]}
          rotation={[Math.PI, Math.PI / 2, 0]}
          scale={[10.47, 1.31, 10.47]}
        />
      </group>
      <group
        ref={fgroup}
        position={[2.11, -0.45, 0]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        scale={[0.1, 0.76, 0.1]}
      >
        <mesh
          castShadow
          receiveShadow
          ref={ftruck}
          geometry={nodes.Cylinder013.geometry}
          material={nodes.Cylinder013.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder013_1.geometry}
          material={nodes.Cylinder013_1.material}
        />
        <points
          castShadow
          receiveShadow
          geometry={nodes.Cylinder004.geometry}
          material={pMat}
          ref={lwheel}
          position={[0, -1.12, 0]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={[10.47, 1.31, 10.47]}
        />
        <points
          castShadow
          receiveShadow
          geometry={nodes.Cylinder005.geometry}
          material={pMat}
          ref={rwheel}
          position={[0, 1.12, 0]}
          rotation={[Math.PI, Math.PI / 2, 0]}
          scale={[10.47, 1.31, 10.47]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/skateboard.gltf");
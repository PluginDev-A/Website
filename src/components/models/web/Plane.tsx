import {
  MeshDistortMaterial,
  MeshWobbleMaterial,
  OrbitControls,
  OrbitControlsProps,
  PerspectiveCamera,
  PointMaterial,
  Text,
} from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { useContext, useRef } from "react";
import { ThemeContext } from "../../theme/theme";

export default function Box() {
  const cameraRef = useRef<any>();
  useFrame(() => {
    var angle = window.scrollY / window.innerHeight;
    cameraRef.current?.setPolarAngle(1.1 + angle / 10);
  });
  console.log(cameraRef);
  const theme = useContext(ThemeContext);
  return (
    <>
      <PerspectiveCamera
        makeDefault
        position={[0, 4, 0]}
        fov={100}
        key={undefined}
        attach={undefined}
        args={undefined}
        onUpdate={undefined}
        visible={undefined}
        type={undefined}
        id={undefined}
        uuid={undefined}
        name={undefined}
        parent={undefined}
        modelViewMatrix={undefined}
        normalMatrix={undefined}
        matrixWorld={undefined}
        matrixAutoUpdate={undefined}
        matrixWorldNeedsUpdate={undefined}
        castShadow={undefined}
        receiveShadow={undefined}
        frustumCulled={undefined}
        renderOrder={undefined}
        animations={undefined}
        userData={undefined}
        customDepthMaterial={undefined}
        customDistanceMaterial={undefined}
        isObject3D={undefined}
        onBeforeRender={undefined}
        onAfterRender={undefined}
        applyMatrix4={undefined}
        applyQuaternion={undefined}
        setRotationFromAxisAngle={undefined}
        setRotationFromEuler={undefined}
        setRotationFromMatrix={undefined}
        setRotationFromQuaternion={undefined}
        rotateOnAxis={undefined}
        rotateOnWorldAxis={undefined}
        rotateX={undefined}
        rotateY={undefined}
        rotateZ={undefined}
        translateOnAxis={undefined}
        translateX={undefined}
        translateY={undefined}
        translateZ={undefined}
        localToWorld={undefined}
        worldToLocal={undefined}
        lookAt={undefined}
        add={undefined}
        remove={undefined}
        removeFromParent={undefined}
        clear={undefined}
        getObjectById={undefined}
        getObjectByName={undefined}
        getObjectByProperty={undefined}
        getWorldPosition={undefined}
        getWorldQuaternion={undefined}
        getWorldScale={undefined}
        getWorldDirection={undefined}
        raycast={undefined}
        traverse={undefined}
        traverseVisible={undefined}
        traverseAncestors={undefined}
        updateMatrix={undefined}
        updateMatrixWorld={undefined}
        updateWorldMatrix={undefined}
        toJSON={undefined}
        clone={undefined}
        copy={undefined}
        addEventListener={undefined}
        hasEventListener={undefined}
        removeEventListener={undefined}
        dispatchEvent={undefined}
        zoom={undefined}
        view={undefined}
        focus={undefined}
        near={undefined}
        far={undefined}
        updateProjectionMatrix={undefined}
        setViewOffset={undefined}
        clearViewOffset={undefined}
        matrixWorldInverse={undefined}
        projectionMatrix={undefined}
        projectionMatrixInverse={undefined}
        isCamera={undefined}
        isPerspectiveCamera={undefined}
        aspect={undefined}
        filmGauge={undefined}
        filmOffset={undefined}
        setFocalLength={undefined}
        getFocalLength={undefined}
        getEffectiveFOV={undefined}
        getFilmWidth={undefined}
        getFilmHeight={undefined}
        setLens={undefined}
      />

      <OrbitControls ref={cameraRef} />
      <mesh position={[0, 0, 0]} rotation={[-1.5, 0, 0]}>
        <planeBufferGeometry args={[25, 10, 50, 50]} />
        <meshLambertMaterial
          attach="material"
          wireframe
          distort={0}
          color={theme.secondary}
        />
      </mesh>

      <fog
        attach="fog"
        color={theme.primary}
        near={1}
        far={3.5}
        position={[0, 0, 0]}
      />
      <mesh position={[0, 0, 0]}>
        <pointLight color={theme.cta} intensity={4} position={[0, 1, 0]} />
      </mesh>
    </>
  );
}

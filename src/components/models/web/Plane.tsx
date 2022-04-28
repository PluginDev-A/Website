import {
  MeshDistortMaterial,
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useContext, useRef } from "react";
import { ThemeContext } from "../../theme/theme";

export default function Box() {
  const cameraRef = useRef<any>();
  var mouseX = 1;
  var mouseY = 1;
  console.log(cameraRef);
  document.addEventListener("mousemove", (e) => {
    mouseX = 1 - e.clientX / 5000;
    mouseY = 1 - e.clientY / 5000;
  });
  useFrame(() => {
    var angle = (window.scrollY / window.innerHeight) / 10;
    cameraRef.current?.setPolarAngle(angle + mouseY);
    cameraRef.current?.setAzimuthalAngle(mouseX);

    // cameraRef.current?.setAzimuthalAngle(1.1 + angle);
  });
  const theme = useContext(ThemeContext);
  var rR =( Math.random() * 5);
  return (
    <>
      <PerspectiveCamera
        rotation={[0, 0, 0]}
        makeDefault
        position={[0, 0, 4]}
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

      <OrbitControls ref={cameraRef}/>

      <mesh position={[0, 0, 0]} rotation={[rR, rR, rR]}>
        {/* <planeBufferGeometry args={[25, 10, 100,70]} /> */}
        <torusKnotBufferGeometry args={[2, 5, 10,10]} />
        <MeshDistortMaterial
          distort={1}
          attach="material"
          speed={0.02}
          wireframe
          color={"#fff"}
        />
      </mesh>
      <fog
        attach="fog"
        color={theme.primary}
        near={2}
        far={3.5}
        position={[0, 0, 0]}
      />
      <mesh position={[0, 0, 0]}>
        {/* <pointLight color={theme.cta} intensity={4} position={[0, 1, 0]} />
        <ambientLight color={theme.cta} intensity={4} /> */}
        <hemisphereLight args={[theme.secondary, theme.primary]} />
      </mesh>
    </>
  );
}

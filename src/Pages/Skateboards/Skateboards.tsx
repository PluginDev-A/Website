import { Environment, Html, useProgress } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Bloom, DepthOfField, EffectComposer, Glitch } from "@react-three/postprocessing";
import { Suspense, useContext } from "react";
import { ThemeContext } from "../../theme/theme";
import Section from "../../components/ux/section/Section";
import BoardContent from "./BoardContent";
import "./skateboards.scss";
import {Resizer} from 'postprocessing';
import Skateboard_Model from "../../models/Skateboard_Model";

function Sandbox() {
  const theme = useContext(ThemeContext);
  function Loader() {
    const { active, progress, errors, item, loaded, total } = useProgress();
    return <Html center>{progress} % ...</Html>;
  }
  return (
    <>
      <Canvas className="canvas" style={{ cursor: "move" }}>
        <ThemeContext.Provider value={theme}>
        <Suspense fallback={<Loader />}>
          <EffectComposer multisampling={0} disableNormalPass>
            <Bloom
              intensity={0.4} // The bloom intensity.
              luminanceThreshold={0.15} // luminance threshold. Raise this value to mask out darker elements in the scene.
              luminanceSmoothing={0.85} // smoothness of the luminance threshold. Range is [0, 1]
              />
           
              <Skateboard_Model />
         
            <Environment preset="sunset" />
            <pointLight color={theme.cta} intensity={10} position={[0,-1,0]} />
          </EffectComposer>
          </Suspense>
        </ThemeContext.Provider>
      </Canvas>
      <Section content={<BoardContent />} fullHeight/>
    </>
  );
}

export default Sandbox;

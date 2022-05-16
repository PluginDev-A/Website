import { Environment } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { EffectComposer } from "@react-three/postprocessing";


export default function Rubiks() {
  return (
      <Canvas className="canvas" style={{cursor: 'move'}}>
                  <Environment preset="forest" background resolution={1080}/>
        <EffectComposer multisampling={0} disableNormalPass>


       
          </EffectComposer>

      </Canvas>
  );
}

import { Canvas } from "@react-three/fiber";
import { Bloom, EffectComposer, Grid, Scanline, SMAA, Vignette } from "@react-three/postprocessing";
import { Suspense, useContext } from "react";
import { ThemeContext } from "../theme/theme";
import Contact from "../components/ui/contact/Contact";
import Footer from "../components/ui/Footer/Footer";
import Prices from "../components/ui/prices/Prices";
import Process from "../components/ui/process/Process";
import Welcome from "../components/ui/welcome/Welcome";
import Section from "../components/ux/section/Section";
import Starfield_Model from "../models/Starfield_Model";

function Home() {
  const theme = useContext(ThemeContext);
  return (
    <>
      <Suspense fallback={"loading..."}>
        <Canvas className={"canvas"}>
          <EffectComposer multisampling={0} disableNormalPass>
            <Vignette darkness={1} />
            {/* <Bloom
            luminanceThreshold={0.2}
            luminanceSmoothing={0.5}
            /> */}
            <Grid />
          </EffectComposer>
          <Starfield_Model />
          {/* <fog attach="fog" color={theme.primary} near={0.5} far={2.5} /> */}
        </Canvas>
      </Suspense>
      <Section content={<Welcome />} fullHeight/>
      <Section content={<Process />} fullHeight/>
      <Section content={<Prices />} fullHeight/>
      <Section content={<Contact />} fullHeight/>
      <Footer />
    </>
  );
}

export default Home;

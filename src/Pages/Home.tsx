import { Canvas, ambientLight } from "@react-three/fiber";
import {
  Bloom,
  EffectComposer,
  Grid,
  Scanline,
  SMAA,
  Vignette,
} from "@react-three/postprocessing";
import { Suspense, useContext } from "react";
import { ThemeContext } from "../theme/theme";
import Contact from "../components/ui/contact/Contact";
import Footer from "../components/ui/Footer/Footer";
import Prices from "../components/ui/prices/Prices";
import Process from "../components/ui/process/Process";
import Welcome from "../components/ui/welcome/Welcome";
import Section from "../components/ux/section/Section";
import Starfield_Model from "../models/Starfield_Model";
import { Environment } from "@react-three/drei";

function Home() {
  const theme = useContext(ThemeContext);
  const sections = [
    { sName: "welcome", section: <Welcome /> },
    { sName: "process", section: <Process /> },
    { sName: "prices", section: <Prices /> },
    { sName: "contact", section: <Contact /> },
  ];
  return (
    <>
      <Suspense fallback={"loading..."}>
        <Canvas className={"canvas"}>
          <EffectComposer multisampling={0} disableNormalPass>
            <Vignette darkness={1} offset={-0.4} />
          </EffectComposer>
          <Starfield_Model />
        </Canvas>
      </Suspense>
{sections.map(({sName, section}) =>{
  return(<Section key={sName} content={section} fullHeight/>);
})}
      <Footer />
    </>
  );
}

export default Home;

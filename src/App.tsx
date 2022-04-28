import {
  useState,
  useEffect,
  Suspense,
} from "react";
import "./App.scss";
import Nav from "./components/ui/nav/Nav";
import Welcome from "./components/ui/welcome/Welcome";
import Section from "./components/ux/section/Section";
import Prices from "./components/ui/prices/Prices";
import { themes, ThemeContext } from "./components/theme/theme";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import Footer from "./components/ui/Footer/Footer";
import Process from "./components/ui/process/Process";
import { Canvas } from "@react-three/fiber";
import Web from "./components/models/web/Plane";
import {
  DepthOfField,
  EffectComposer, Grid, Noise, Scanline, SMAA, SSAO, Vignette
} from "@react-three/postprocessing";
function App() {
  var getTheme;
  localStorage.getItem("dark-mode") == "true"
    ? (getTheme = themes.dark)
    : (getTheme = themes.light);
  const [themeMode, setThemeMode] = useState(getTheme);
  document.body.style.background = themeMode.primary;
  document.body.style.color = themeMode.text;
  const paths = Array.from(
    document.getElementsByClassName("svg-path") as HTMLCollectionOf<HTMLElement>
  );
  useEffect(() => {
    for (let i = 0; i < paths.length; i++) {
      paths[i].style.fill = themeMode.cta;
    }
  }, [themeMode]);

  return (
    <ThemeContext.Provider value={themeMode}>
      <Nav>
        <button
          aria-label="light/dark mode"
          style={{ color: themeMode.secondary }}
          className={"mode-switch"}
          onClick={() => {
            themeMode == themes.light
              ? localStorage.setItem("dark-mode", "true")
              : localStorage.removeItem("dark-mode");
            setThemeMode(
              themeMode == themes.light ? themes.dark : themes.light
            );
          }}
        >
          {themeMode == themes.light ? <BsFillMoonFill /> : <BsFillSunFill />}
        </button>
      </Nav>
      <Suspense fallback={'loading...'}>
      <Canvas className={"canvas"} >
        <ThemeContext.Provider value={themeMode}>
          <EffectComposer multisampling={0} disableNormalPass>
          <Noise opacity={0.3} />
          <Vignette darkness={0.6} />
          </EffectComposer>
          <Web />
        </ThemeContext.Provider>
      </Canvas>
      </Suspense >
      <Section content={<Welcome />} />
      <Section content={<Process />} />
      <Section content={<Prices />} />
      <Footer />
    </ThemeContext.Provider>
  );
}

export default App;

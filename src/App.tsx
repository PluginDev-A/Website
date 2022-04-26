import {
  useContext,
  useState,
  Provider,
  createContext,
  useEffect,
} from "react";
import logo from "./logo.svg";
import "./App.scss";
import Nav from "./components/ui/nav/Nav";
import Welcome from "./components/ui/welcome/Welcome";
import Section from "./components/ux/section/Section";
import Prices from "./components/ui/prices/Prices";
import { themes, ThemeContext } from "./components/theme/theme";
import Background from "./components/ui/background/Background";
import Modeswitch from "./components/ux/modeswitch/Modeswitch";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import Socials from "./components/ux/socials/Socials";
import Footer from "./components/ui/Footer/Footer";
import Process from "./components/ui/process/Process";
import { Canvas } from "@react-three/fiber";
import Web from "./components/models/web/Plane";
import {
  Bloom,
  ChromaticAberration,
  EffectComposer,
  Glitch,
  Grid,
  Outline,
  Pixelation,
  Scanline,
  ShockWave,
  SMAA,
} from "@react-three/postprocessing";
import { OrbitControls, Text } from "@react-three/drei";
import { BlendFunction } from "postprocessing";
function App() {
  var getTheme;
  localStorage.getItem("dark-mode") == "true"
    ? (getTheme = themes.fire)
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
              themeMode == themes.light ? themes.fire : themes.light
            );
          }}
        >
          {themeMode == themes.light ? <BsFillMoonFill /> : <BsFillSunFill />}
        </button>
      </Nav>
      <Canvas className={"canvas"}>
        <ThemeContext.Provider value={themeMode}>
          <EffectComposer multisampling={0} disableNormalPass>
            
          </EffectComposer>
          <Web />
        </ThemeContext.Provider>
      </Canvas>

      <Section content={<Welcome />} />
      <Section content={<Process />} />
      <Section content={<Prices />} />
      <Footer />
    </ThemeContext.Provider>
  );
}

export default App;

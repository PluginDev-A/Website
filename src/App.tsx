import { useState } from "react";
import { BsMoonStars, BsSun } from "react-icons/bs";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.scss";
import { ThemeContext, themes } from "./theme/theme";
import Nav from "./components/ui/nav/Nav";
import Cases from "./Pages/Cases";
import Rubiks from "./Pages/cases/rubiks/Rubiks";
import E404 from "./Pages/E404";
import Home from "./Pages/Home";
import Skateboards from "./Pages/Skateboards/Skateboards";

function App() {
  var getTheme;
  //* check storage for dark mode boolean value
  localStorage.getItem("light-mode") == "true"
    ? (getTheme = themes.light)
    : (getTheme = themes.sea);

  //?initialize theme state
  const [themeMode, setThemeMode] = useState(getTheme);

  //* set main body elements to theme colors
  themePainter(themeMode);

  return (
    <ThemeContext.Provider value={themeMode}>
      <Router>
        <Nav linkDivider={"/"}>
          <button
            aria-label="light/dark mode"
            style={{ color: themeMode.text, opacity: 0.8 }}
            className={"mode-switch"}
            onClick={() => {
              themeMode == themes.sea
                ? localStorage.setItem("light-mode", "true")
                : localStorage.removeItem("light-mode");
              setThemeMode(
                themeMode == themes.light ? themes.sea : themes.light
              );
            }}
          >
            {themeMode == themes.light ? <BsMoonStars /> : <BsSun />}
          </button>
        </Nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cases/skateboards" element={<Skateboards />} />
          <Route path="/cases/rubiks" element={<Rubiks />} />
          <Route path="/cases" element={<Cases />} />
          <Route path="*" element={<E404 />} />
        </Routes>
      </Router>
    </ThemeContext.Provider>
  );
}

export default App;
function themePainter(themeMode: {
  primary: string;
  cta: string;
  hvr: string;
  secondary: string;
  text: string;
}) {
  document.body.style.background = themeMode.primary;
  document.body.style.color = themeMode.text;
  const anchorTag = document.getElementsByTagName("a");
  for (let index = 0; index < anchorTag.length; index++) {
    anchorTag[index].style.color = themeMode.text;
  }
}

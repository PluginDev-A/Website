import { createContext, useContext } from "react";

export const themes = {
  dark: {
    primary: "#080818",
    cta: "#5479ff",
    hvr: "#ff818b",
    secondary: "#5479ff",
    text: "#e9f0fa",
  },
  light: {
    primary: "#FFFBFF",
    cta: "#002BFF",
    hvr: "#ff818b",
    secondary: "#272932",
    text: "#1C0221",
  },
  fire: {
    primary: "#131327",
    cta: "#F7E733",
    hvr: "#ff818b",
    secondary: "#C9B408",
    text: "#D6EEFF",
    progressbar: "#83838346",
  }
};

export const ThemeContext = createContext(themes.dark);

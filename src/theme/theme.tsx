import { createContext } from "react";

export const themes = {
  dark: {
    primary: "#141414",
    cta: "#7499ff",
    hvr: "#ff818b",
    secondary: "#5479ff",
    text: "#e9f0fa",
  },
  light: {
    primary: "#FFFFFF",
    cta: "#602cff",
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
  },
  sea: {
    primary: "#131319",
    cta: "#949dff",
    hvr: "#ff818b",
    secondary: "#56a2e9",
    text: "#e9f0fa",
  },
  modp: {
    primary: "#E4E9EC",
    cta: "#F80D3F",
    hvr: "#ff818b",
    secondary: "#6833FD",
    text: "#3d3d3d",
  },
};

export const ThemeContext = createContext(themes.dark);

import styles from "../styles/ThemeSwitch.module.css"
import { useEffect, useState } from "react";

function getPrefersLightTheme() {
  if (global.matchMedia) return global.matchMedia("prefers-color-scheme: light")

  return ({} as MediaQueryList);
}

function getCSS(key: string) {
  return getComputedStyle(document.documentElement).getPropertyValue(key);
}
function setCSS(key: string, value: string | null) {
  document.documentElement.style.setProperty(key, value);
}

export default function ThemeSwitch() {
  const [prefersLightTheme, setPrefersLightTheme] = useState<boolean>(
    () => getPrefersLightTheme().matches
  );

  useEffect(() => {
    const media = getPrefersLightTheme();

    function change(newMedia: any) {
      setPrefersLightTheme(newMedia.matches);
      return true;
    }

    media.addEventListener("change", change);

    return () => {
      media.removeEventListener("change", change);
    };
  }, []);

  useEffect(() => {
    setCSS("--bg", getCSS(prefersLightTheme ? "--light" : "--dark"));
    setCSS("--text", getCSS(prefersLightTheme ? "--lightText" : "--darkText"));
    setCSS("--textHeading", getCSS(prefersLightTheme ? "--lightTextHeading" : "--darkTextHeading"));
    setCSS("--textEmphasis", getCSS(prefersLightTheme ? "--lightTextEmphasis" : "--darkTextEmphasis"));
  }, [prefersLightTheme]);

  return (
    <button
      className={styles.theme_switch}
      onClick={() => setPrefersLightTheme((prev) => !prev)}
      title={`Enable ${prefersLightTheme ? 'dark' : 'light'} theme`}>
      {prefersLightTheme ? "🌜" : "🌞"}
    </button>
  );
}

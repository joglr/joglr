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
  }, [prefersLightTheme]);

  return (
    <button
      style={{
        transition: 'var(--transition)',
        fontSize: 'calc(4 * var(--u))',
        position: 'fixed',
        top: 'calc(2 * var(--u))',
        right: 'calc(2 * var(--u))',
        width: 'calc(8 * var(--u))',
        height: 'calc(8 * var(--u))',
        borderRadius: '50%',
        cursor: 'pointer',
        border: 'none',
        backgroundColor: 'var(--bg)',
        // boxShadow: '0 0 var(--u) 0 var(--text)',
        display: 'grid',
        placeItems: 'center'
      }}
      onClick={() => setPrefersLightTheme((prev) => !prev)}
      title={`Enable ${prefersLightTheme ? 'dark' : 'light'} theme`}>
      {prefersLightTheme ? "🌜" : "🌞"}
    </button>
  );
}

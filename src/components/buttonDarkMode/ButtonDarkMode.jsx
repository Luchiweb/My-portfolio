import React from "react";
import sun from "../../img/icons/sun.svg";
import moon from "../../img/icons/moon.svg";
import "./ButtonDarkMode.css";
import { useEffect } from "react";
import { useLocalStorage } from "../../utils/useLocalStorage";
import { detectDarkMode } from "../../utils/detectDarkMode";

export function ButtonDarkMode() {
  const [darkMode, setDarkMode] = useLocalStorage("darkMode", detectDarkMode());

  const BTN_NORMAL = "dark-mode-btn";
  const BTN_ACTIVE = "dark-mode-btn dark-mode-btn--active";

  useEffect(() => {
    darkMode === "dark"
      ? document.body.classList.add("dark")
      : document.body.classList.remove("dark");
  });

  useEffect(() => {
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", (event) => {
        const newColorScheme = event.matches ? "dark" : "light";
        setDarkMode(newColorScheme);
      });

    return window
      .matchMedia("(prefers-color-scheme: dark)")
      .removeEventListener("change", (event) => {
        const newColorScheme = event.matches ? "dark" : "light";
        setDarkMode(newColorScheme);
      });
  }, [setDarkMode]);

  const toggleDarkMode = () => {
    setDarkMode((currentValue) => {
      return currentValue === "light" ? "dark" : "light";
    });
  };

  return (
    <button
      className={darkMode === "dark" ? BTN_ACTIVE : BTN_NORMAL}
      onClick={toggleDarkMode}
    >
      <img src={sun} alt="Light mode" className="dark-mode-btn__icon" />
      <img src={moon} alt="Dark mode" className="dark-mode-btn__icon" />
    </button>
  );
}

import * as React from "react";
import useDarkMode from "@fisch0920/use-dark-mode";

import { BsSun, BsMoon } from "react-icons/bs";

const storageProvider = {
  getItem: (key) => {
    if (typeof window === "undefined") return null;
    return window.localStorage.getItem(key);
  },
  setItem: (key, value) => {
    if (typeof window === "undefined") return;
    window.localStorage.setItem(key, value);
  },
  removeItem: (key) => {
    if (typeof window === "undefined") return;
    window.localStorage.removeItem(key);
  },
};

const ThemeSwitch = () => {
  const { value: hasActiveDarkMode, toggle: activateDarkMode } = useDarkMode(false, {
    storageProvider,
    onChange: (value) => {
      if (typeof document === "undefined") return;
      document.documentElement.classList.toggle("dark", value);
      document.documentElement.classList.toggle("light", !value);
    },
  });

  return (
    <div className="text-black cursor-pointer dark:text-white" onClick={activateDarkMode}>
      {hasActiveDarkMode ? <BsSun /> : <BsMoon />}
    </div>
  );
};

export default ThemeSwitch;

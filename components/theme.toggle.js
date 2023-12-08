import * as React from "react";
import useDarkMode from "@fisch0920/use-dark-mode";

import { BsSun, BsMoon } from "react-icons/bs";

const ThemeSwitch = () => {
  const { value: hasActiveDarkMode, toggle: activateDarkMode } = useDarkMode(false, { classNameDark: "dark", classNameLight: "light" });

  return (
    <div className="text-black cursor-pointer dark:text-white" onClick={activateDarkMode}>
      {hasActiveDarkMode ? <BsSun /> : <BsMoon />}
    </div>
  );
};

export default ThemeSwitch;

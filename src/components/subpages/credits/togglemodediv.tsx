import React, { useState } from "react";

const ToggleModeDiv = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
    updateCSSVariables(!isDarkMode);
    const bodyElement = document.body;
    bodyElement.classList.toggle("dark_mode");
  };

  const updateCSSVariables = (isDarkMode: boolean) => {
    const root = document.documentElement;
    if (isDarkMode) {
      // Update CSS variables for dark mode
      root.style.setProperty("--background-color", "rgb(21, 21, 25)");
      root.style.setProperty("--darker-dark", "rgb(31, 31, 35)");
      root.style.setProperty("--dark", "rgb(51, 51, 55)");
      root.style.setProperty("--neutral", "rgb(71, 71, 75)");
      root.style.setProperty("--light", "rgb(91, 91, 95)");
      root.style.setProperty("--lighter-light", "rgb(111, 111, 115)");
      root.style.setProperty("--selected-darker", "rgb(190, 190, 212)");
      root.style.setProperty("--selected", "rgb(210, 210, 232)");
      root.style.setProperty("--selected-lighter", "rgb(230, 230, 252)");
    } else {
      // Update CSS variables for light mode
      root.style.setProperty("--background-color", "rgb(245, 245, 245)");
      root.style.setProperty("--darker-dark", "rgb(220, 220, 220)");
      root.style.setProperty("--dark", "rgb(200, 200, 200)");
      root.style.setProperty("--neutral", "rgb(180, 180, 180)");
      root.style.setProperty("--light", "rgb(160, 160, 160)");
      root.style.setProperty("--lighter-light", "rgb(140, 140, 140)");
      root.style.setProperty("--selected-darker", "rgb(0, 190, 170)");
      root.style.setProperty("--selected", "rgb(0, 220, 200)");
      root.style.setProperty("--selected-lighter", "rgb(0, 250, 230)");
    }
  };

  return (
    <div className="ToggleModeDiv" onClick={toggleMode}>
      Toggle Light or Dark Mode
    </div>
  );
};

export default ToggleModeDiv;

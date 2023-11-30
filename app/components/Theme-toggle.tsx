"use client";
import React from "react";
import { useState } from "react";

const themes = {
  light: "light",
  halloween: "halloween",
};
const ThemeToggle = () => {
  const [theme, setTheme] = useState(themes.halloween);
  const toggleTheme = () => {
    setTheme(theme === "light" ? themes.halloween : themes.light);
    document.documentElement.setAttribute("data-theme", theme);
  };
  return (
    <button
      onClick={() => {
        toggleTheme();
      }}
      className="btn btn-secondary">
      Change Theme
    </button>
  );
};
export default ThemeToggle;

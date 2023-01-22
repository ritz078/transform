import { useEffect, useState } from "react";

const STORAGE_KEY = "__transform_tools_isDarkMode";

export function useDarkMode() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  const toggleDarkMode = () => {
    setIsDarkMode(prev => !prev);
    /** Persist in local storage */
    localStorage.setItem(STORAGE_KEY, JSON.stringify(!isDarkMode));
  };

  useEffect(() => {
    /** Use persisted local storage value if present */
    setIsDarkMode(JSON.parse(localStorage.getItem(STORAGE_KEY) || "false"));
  }, []);

  return { isDarkMode, toggleDarkMode };
}

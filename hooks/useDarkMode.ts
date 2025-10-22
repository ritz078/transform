import { useEffect, useState } from "react";

const STORAGE_KEY = "__transform_tools_isDarkMode";

export function useDarkMode() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  const toggleDarkMode = () => {
    const next = !isDarkMode;
    setIsDarkMode(next);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  };

  useEffect(() => {
    /** Retrieve saved preference or use system setting */
    const saved = localStorage.getItem(STORAGE_KEY);
    const dark =
      saved !== null
        ? JSON.parse(saved)
        : (window.matchMedia &&
          window.matchMedia('(prefers-color-scheme: dark)').matches) ||
        false;

    setIsDarkMode(dark);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(dark));
  }, []);


  return { isDarkMode, toggleDarkMode };
}

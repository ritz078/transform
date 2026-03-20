import { useEffect, useState } from "react";

const STORAGE_KEY = "__transform_tools_isDarkMode";

export function useDarkMode() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  const toggleDarkMode = () => {
    setIsDarkMode(prev => {
      const next = !prev;
      /** Persist in local storage */
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      return next;
    });
  };

  useEffect(() => {
    /** Use persisted local storage value if present */
    const persisted = localStorage.getItem(STORAGE_KEY);
    if (persisted !== null) {
      setIsDarkMode(JSON.parse(persisted));
      return;
    }

    /** Fall back to system preference */
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    setIsDarkMode(media.matches);

    const onChange = (event: MediaQueryListEvent) => {
      // Keep auto mode only while no explicit user preference was saved.
      if (localStorage.getItem(STORAGE_KEY) === null) {
        setIsDarkMode(event.matches);
      }
    };

    if (media.addEventListener) {
      media.addEventListener("change", onChange);
      return () => media.removeEventListener("change", onChange);
    }

    // Backwards compatibility for older browsers.
    media.addListener(onChange);
    return () => media.removeListener(onChange);
  }, []);

  return { isDarkMode, toggleDarkMode };
}

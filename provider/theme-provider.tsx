"use client";

import { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark" | "system";

interface ThemeContextProps {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextProps>({
  theme: "system",
  setTheme: () => {},
});

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<Theme>("system");
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as Theme;
    setTheme(savedTheme || "system");
    setIsInitialized(true);
  }, []);

  useEffect(() => {
    const root = document.documentElement;

    const applyTheme = (theme: Theme) => {
      if (theme === "system") {
        const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        root.classList.toggle("dark", systemDark);
        root.classList.toggle("light", !systemDark);
      } else {
        root.classList.toggle("dark", theme === "dark");
        root.classList.toggle("light", theme === "light");
      }
    };

    applyTheme(theme);

    if (isInitialized) {
      localStorage.setItem("theme", theme);
    }
  }, [theme, isInitialized]);

  if (!isInitialized) {
    return null; // Avoid rendering until initialization is complete
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
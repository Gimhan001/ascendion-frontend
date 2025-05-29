"use client";

import React from "react";
import { MonitorCog, MoonStar, Sun } from "lucide-react";
import { useTheme } from "@/provider/theme-provider";

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  if (!theme) return null;

  const options = [
    { value: "system", icon: <MonitorCog size={15} />, label: "System" },
    { value: "light", icon: <Sun size={15} />, label: "Light" },
    { value: "dark", icon: <MoonStar size={15} />, label: "Dark" },
  ];

  return (
    <div className="fixed right-4 bottom-4 lg:bottom-8 lg:right-8 flex space-x-2 border rounded-full p-1">
      {options.map(({ value, icon, label }) => (
        <button
          key={value}
          onClick={() => setTheme(value as "light" | "dark" | "system")}
          aria-label={label}
          className={`p-1 rounded-full focus:outline-none focus:ring-2 focus:ring-amber-500 ${
            theme === value
              ? "bg-amber-500 text-white"
              : "text-gray-600 hover:bg-gray-100"
          }`}
        >
          {icon}
        </button>
      ))}
    </div>
  );
};

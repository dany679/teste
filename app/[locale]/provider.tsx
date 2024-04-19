"use client";
import { ThemeProvider, useTheme } from "next-themes";
import { ReactNode } from "react";

const ThemesProviderSet = ({ children }: { children: ReactNode }) => {
  const { systemTheme, theme } = useTheme();
  const currentTheme = theme && theme === "system" ? systemTheme : theme;
  return (
    <ThemeProvider
      enableSystem={true}
      attribute="class"
      defaultTheme={currentTheme || "light"}
      themes={["light", "dark"]}
    >
      {children}
    </ThemeProvider>
  );
};

export default ThemesProviderSet;

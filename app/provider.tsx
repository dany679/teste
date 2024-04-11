"use client";
import { ThemeProvider } from "next-themes";
import React from "react";

const ThemesProviderSet = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider
      enableSystem={true}
      attribute="class"
      defaultTheme="light"
      themes={["light", "dark"]}
    >
      {children}
    </ThemeProvider>
  );
};

export default ThemesProviderSet;

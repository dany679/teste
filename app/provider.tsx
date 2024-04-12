"use client";
import { ThemeProvider } from "next-themes";
import { ReactNode } from "react";

const ThemesProviderSet = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeProvider
      enableSystem={true}
      attribute="class"
      // defaultTheme="light"
      themes={["light", "dark"]}
    >
      {children}
    </ThemeProvider>
  );
};

export default ThemesProviderSet;

// themeDecorator.js
import { ThemeProvider } from "next-themes";
import React from "react";

const ThemeDecorator = (storyFn) => (
  <ThemeProvider enableSystem defaultTheme="light" attribute="class">
    {storyFn()}
  </ThemeProvider>
);

export default ThemeDecorator;

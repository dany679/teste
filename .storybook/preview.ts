import type { Preview } from "@storybook/react";
import { themes } from "@storybook/theming";
import "../app/globals.css";
import ThemeDecorator from "./themeDecorator";

export const globalTypes = {
  theme: {
    name: "Theme",
    defaultValue: "light",
    toolbar: {
      icon: "circlehollow",
      items: ["light", "dark"],
      showName: true,
    },
  },
};
const preview: Preview = {
  decorators: [ThemeDecorator],
  parameters: {
    docs: {
      theme: themes.dark,
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;

import type { Preview } from "@storybook/react";
import { themes } from "@storybook/theming";
import "../app/[locale]/globals.css";
import { reactIntl } from "./reactIntl";
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
  globals: {
    locale: reactIntl.defaultLocale,
    locales: {
      en: "English",
      pt: "Portugues",
    },
  },
  decorators: [ThemeDecorator],
  parameters: {
    reactIntl,
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

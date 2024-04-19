// themeDecorator.js
import { IntlProvider, NextIntlClientProvider } from "next-intl";
import React from "react";
import ThemesProvider from "../app/[locale]/provider";
import messages from "../messages/pt-br.json";
const ThemeDecorator = (storyFn, argTypes) => {
  const { globals, parameters } = argTypes;
  const intl = parameters.reactIntl;
  const nextIntl = {
    locale: globals.locale || intl.defaultLocale || "pt-br",
    messages: intl.messages[globals.locale] || messages,
  };
  return (
    <IntlProvider locale={nextIntl.locale} messages={nextIntl.messages}>
      <NextIntlClientProvider
        locale={nextIntl.locale}
        messages={nextIntl.messages}
        // messages={{ Web: messages["Web"] }}
      >
        <ThemesProvider>{storyFn()}</ThemesProvider>
      </NextIntlClientProvider>
    </IntlProvider>
  );
};

export default ThemeDecorator;

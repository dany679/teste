"use server";
import { getLocale } from "next-intl/server";

const myLanguage = async () => {
  // const t = useTranslations("Home.heroSection");
  // const places = useTranslations("components.navbar.places");
  const locale = getLocale();
  // const locale2 = useLocale()

  console.log(await locale, "Aaaa");
  return await locale;
};
export { myLanguage };

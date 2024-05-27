import { getPostBlogs } from "@/lib/_services/notion";

const HeroSection = async () => {
  // const t = useTranslations("Home.heroSection");
  // const places = useTranslations("components.navbar.places");
  // const locale = await getLocale();

  const allFatch = await getPostBlogs();
  console.log(allFatch); // console.log(await myLanguage());

  // console.log(router?.locale || "Aaaa");

  return (
    <code>
      alog aqui <p>Post: </p>
    </code>
  );
};

export default HeroSection;

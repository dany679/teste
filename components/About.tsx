import { useTranslations } from "next-intl";
import Image from "next/image";

const skillsList = [
  { skill: "Next.js" },
  { skill: "React.js" },
  { skill: "React-native" },
  { skill: "TypeScript" },
  { skill: "JavaScript" },
  { skill: "Tailwind" },
  { skill: "Styled-Components" },
  { skill: "Mui" },
  { skill: "Cypress" },
  { skill: "Node.js" },
  { skill: "Nest.js" },
  { skill: "Prisma" },
  { skill: "MongoDb" },
  { skill: "Postgresql" },
  { skill: "MySql" },
  { skill: "Git" },
  { skill: "Github" },
  { skill: "Kabam" },
  { skill: "Jira" },
  { skill: "..." },
];
const webList = [
  { skill: "TypeScript" },
  { skill: "JavaScript" },
  { skill: "Next.js" },
  { skill: "Tailwind" },
  { skill: "Vercel" },
  { skill: "Git" },
  { skill: "Github" },
];
const About = () => {
  const places = useTranslations("components.navbar.places");
  const t = useTranslations("Home.about");

  return (
    <article id="about">
      <h2 className="title_article">{t("name")}</h2>
      <hr className="w-6 h-1 mx-auto my-4 bg-primary-500 border-0 rounded"></hr>
      <div className="grid-row-to-cols2 ">
        <div className="text-center md:text-start  md:max-w-2xl   h-full ">
          <h3 className="subtitle_article py-2 ">{t("subtitle")}!</h3>
          <p>
            {t("paragraph-1")}{" "}
            <span className="font-bold">{t("paragraph-1-span")}</span>,{" "}
            {t("paragraph-1-2")}
          </p>
          <br />
          <p>{t("paragraph-2")}</p>
          <br />
          <p>{t("paragraph-3")}</p>
          <br />
          <p>
            {t("paragraph-4-my-things-1")}{" "}
            <span className="font-bold text-primary-500">
              {t("paragraph-4-my-things-2-span")}
            </span>{" "}
            {t("paragraph-4-my-things-3")}
          </p>
          <br />
          <p>{t("web-site-technologies")}</p>
          <br />

          <div className="flex flex-wrap flex-row justify-center md:justify-start">
            {webList.map((item, idx) => {
              return (
                <p key={idx} className="pill">
                  {item.skill}
                </p>
              );
            })}
          </div>
        </div>
        <div className="text-center md:text-start  md:max-w-2xl h-full">
          <h3 className="subtitle_article py-2 ">My skills</h3>
          <div className="flex flex-wrap flex-row justify-center md:justify-start">
            {skillsList.map((item, idx) => {
              return (
                <p key={idx} className="pill">
                  {item.skill}
                </p>
              );
            })}
          </div>
          <div className="flex min-w-[250px] pt-6 display:block justify-center z-10 md:justify-start">
            <Image
              // src="/skills1.png"
              src="/skills5.png"
              alt="developer"
              className=" shadow-3xl "
              width={325}
              height={325}
            />
          </div>
        </div>
      </div>
    </article>
  );
};

export default About;

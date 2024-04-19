import { experienceList } from "@/utils/const";
import { useTranslations } from "next-intl";
import Accordion from "./accordion";

const Experiences = () => {
  const places = useTranslations("components.navbar.places");
  const experiences = useTranslations("Home.experiences");
  const shared = useTranslations("shared");

  return (
    <article id="experiences" className="pt-10 max-w-8xl mx-auto">
      <h2 className="title_article capitalize">{places("experiences")}</h2>
      <hr className="w-6 h-1 mx-auto my-4 bg-primary-500 border-0 rounded"></hr>
      <div className="">
        {experienceList.map((experience, index) => (
          <Accordion
            {...experience}
            id={experience.title}
            key={index}
            location={experiences(`${experience.name}.location`)}
            endDate={experience.endDate || shared("current")}
          >
            <p>{experiences(`${experience.name}.what-i-did`)}</p>
            {experience.tools.map((tool, index) => (
              <span
                key={index}
                className="inline-block bg-primary-600 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 my-2 capitalize"
              >
                {tool.name}
              </span>
            ))}
          </Accordion>
        ))}
      </div>
    </article>
  );
};

export default Experiences;

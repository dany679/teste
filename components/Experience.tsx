import { experienceList } from "@/utils/const";
import Accordion from "./accordion";

const Experiences = () => {
  return (
    <article id="experiences" className="pt-10 max-w-8xl mx-auto">
      <h2 className="title_article">Experiences</h2>
      <hr className="w-6 h-1 mx-auto my-4 bg-primary-500 border-0 rounded"></hr>
      <div className="">
        {experienceList.map((experience, index) => (
          <Accordion id={experience.title} key={index} {...experience}>
            <p>{experience.description}</p>
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

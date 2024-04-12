import SlideUp from "@/components/slideUp";
import { projectsList } from "@/utils/const";
import Image from "next/image";
import Link from "next/link";
import { BsArrowUpRightSquare, BsGithub } from "react-icons/bs";

const Projects = () => {
  return (
    <article id="projects" className="pt-10">
      <h2 className="title_article">Projects </h2>
      <hr className="w-6 h-1 mx-auto my-4 bg-primary-500 border-0 rounded"></hr>
      <div className="">
        {projectsList.map((project, index) => (
          <SlideUp key={index} offset="-100px 0px -100px 0px">
            <div className="grid-row-to-cols2 animate-slideUpCubiBezier animation-delay-1 ">
              <div className="text-center md:text-start md:max-w-2xl pt-10 ">
                <div
                  className={`flex ${project.color} px-10 pt-10 rounded-t-xl  `}
                >
                  <Link
                    href={project.link}
                    target="_blank"
                    className="hover:opacity-80"
                  >
                    <Image
                      src={project.image}
                      alt={project.name}
                      className=" shadow-3xl rounded-t-lg  min-w-[150px]  hover-scale-110"
                      width={1000}
                      height={300}
                    />
                  </Link>
                </div>
              </div>
              <div className="text-center md:text-start md:place-self-start md:max-w-2xl pt-10 ">
                <h4 className="project_subtitle">{project.name}</h4>
                <p className="py-2">{project.description}</p>
                <div className="flex flex-wrap flex-row justify-center md:justify-start">
                  {project.tools.map((tool) => (
                    <div className="badge" key={tool.name}>
                      <h4 className="text-transform: uppercase text-base">
                        {tool.name}
                      </h4>
                    </div>
                  ))}
                </div>
                <div className="flex flex-row gap-2">
                  <Link href={project.github} target="_blank">
                    <BsGithub size={30} className="button_icons" />
                  </Link>
                  <Link href={project.link} target="_blank">
                    <BsArrowUpRightSquare size={30} className="button_icons" />
                  </Link>
                </div>
              </div>
            </div>
          </SlideUp>
        ))}
      </div>
    </article>
  );
};

export default Projects;

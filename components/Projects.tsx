import Image from "next/image";
import Link from "next/link";
import { BsArrowUpRightSquare, BsGithub } from "react-icons/bs";
import SlideUp from "./SlideUp";
const projectsList = [
  {
    color: "bg-project-0",
    name: "Fix Machines",
    date: "april 2024",
    image: "/projects/project-3-next-14-Fix-Machines.png",
    description:
      "this web site base on the idea of someone how work fix machines can be used to track the repairing process",
    github: "https://github.com/dany679/Fix-Machines-Next-14",
    link: "https://fix-machines-next-14.vercel.app/",
    // link: "https://fix-machines-next-14.vercel.app/",
    tools: [
      { name: "next-14" },
      { name: "tailwind" },
      { name: "Mui" },
      { name: "React-query-string" },
      { name: "TansStack(react-query)" },
      { name: "react-form-hook" },
      { name: "zod" },
      { name: "Nestjs" },
      { name: "prisma" },
      { name: "Postgresql" },
      { name: "cypress" },
      { name: "react testing library" },
    ],
  },
  {
    name: "Promtopia",
    description:
      "Promtopia is a web app to save and find prompt or tag prompts.",
    image: "/projects/project-1-next-full.png",
    github: "https://github.com/dany679/Next-13-Full-Stack",
    link: "https://next-13-full-stack-seven.vercel.app/",
    date: "ago 2023",
    color: "bg-project-2",
    tools: [
      { name: "next-13" },
      { name: "tailwind" },
      { name: "mongodb" },
      { name: "clerk/jwt" },
    ],
  },

  {
    color: "bg-project-0",
    name: "Genius",
    date: "may 2020",
    description:
      "The project is a website to generate data like 'images, conversation , code 'through the prompt developed using openAi and stripe",
    image: "/projects/project2-ai-saas-genius.png",
    github: "https://github.com/dany679/next13-ai-clerk-prisma-saas-stripe",
    link: "https://next13-ai-clerk-prisma-saas-stripe.vercel.app/",
    tools: [
      { name: "next-13" },
      { name: "tailwind" },
      { name: "prisma" },
      { name: "Mysql" },
      { name: "stripe" },
      { name: "clerk/jwt" },
    ],
  },
];
const Projects = () => {
  return (
    <article id="projects" className="pt-10">
      <h2 className="title_article">Projects </h2>
      <hr className="w-6 h-1 mx-auto my-4 bg-primary-500 border-0 rounded"></hr>
      <div
        // className="grid md:grid-rows-1 md:grid-flow-col place-content-center  md:gap-24"
        className=""
        //  className="grid grid-rows-1  md:grid-cols-2  lg:gap-20 gap-6  md:place-items-start place-content-start pt-6 text-center md:text-start  ">
      >
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

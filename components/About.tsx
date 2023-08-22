import Image from "next/image";

const skillsList = [
  { skill: "React.js" },
  { skill: "TypeScript" },
  { skill: "JavaScript" },
  { skill: "Next.js" },
  { skill: "Tailwind" },
  { skill: "StyledComponents" },
  { skill: "MongoDb" },
  { skill: "MySql" },
  { skill: "Node.js" },
  { skill: "Git" },
  { skill: "Github" },
  { skill: "Kabam" },
  { skill: "Jira" },
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
  return (
    <article id="about">
      <h2 className="title_article">About Me</h2>
      <hr className="w-6 h-1 mx-auto my-4 bg-primary-500 border-0 rounded"></hr>
      <div className="grid-row-to-cols2 ">
        <div className="text-center md:text-start  md:max-w-2xl   h-full ">
          <h3 className="subtitle_article py-2 ">Get to Know me!</h3>
          <p>
            Hi, my name is Danie and I am a{" "}
            <span className="font-bold">{" highly ambitious"}</span>,
            <span className="font-bold">{" self-motivated"}</span>, and
            <span className="font-bold">{" driven"}</span> software engineer
            based in Pirapora, MG.
          </p>
          <br />
          <p>
            I start working from the company inside the box in Florianópolis -
            SC in 2021 with a BS in Computer Engineering and have been working
            in the field ever since.
          </p>
          <br />
          <p>
            I have a wide range of hobbies and passions that keep me busy. From
            reading, playing sports, traveling and love to keep myself engaged
            and learning new things.
          </p>
          <br />
          <p>
            I believe that you should{" "}
            <span className="font-bold text-primary-500">
              never stop growing
            </span>{" "}
            and that&#39;s what I strive to do, I have a passion for technology
            and a desire to always push the limits of what is possible. I am
            excited to see where my career takes me and am always open to new
            opportunities. 🙂
          </p>
          <br />
          <p>This web-site is using</p>
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

        <div className="text-center md:text-start  md:max-w-2xl   h-full">
          <h3 className="subtitle_article py-2 ">My skills</h3>
          <div className="flex flex-wrap flex-row justify-center  md:justify-start">
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

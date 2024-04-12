"use client";

import Image from "next/image";
import { HiArrowDown } from "react-icons/hi";
import { Link } from "react-scroll";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="grid md:grid-rows-1 md:grid-flow-col lg:gap-20 gap-6  py-16 sm:py-32 md:py-40  place-items-center place-content-center "
    >
      <div className="flex min-w-[325px]">
        <Image
          src="/me-portfolio.jpg"
          alt="danie picture"
          className=" shadow-3xl rounded-full"
          width={325}
          height={325}
        />
      </div>
      <div className=" text-center md:text-start  md:max-w-2xl">
        <h1 className="text-4xl font-bold mt-6 md:mt-0 md:text-7xl  ">
          Hi, I&#39;m Danie!
          {/* Ola eu sou Danie! */}
        </h1>
        <p className="sub_tittle mt-4 mb-6">
          I&#39;have been for more than two years
          <span className="font-semibold text-primary-600 sub_tittle">
            {"  "} Software Engineer {"  "}{" "}
          </span>
          living on Pirapora, MG. Working towards creating software that makes
          life easier and more meaningful.
        </p>
        <Link
          to="projects"
          className="btn_primary"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          Projects
        </Link>
        <div className="flex flex-row items-center md:justify-start justify-center mt-10 pt-2  md:pt-4  lg:pt-6">
          <Link
            to="about"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            <HiArrowDown size={35} className="animate-bounce" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

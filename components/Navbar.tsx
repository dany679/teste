"use client";

import { useTheme } from "next-themes";
import { useState } from "react";
import { IoMdClose, IoMdMenu } from "react-icons/io";
import { RiMoonFill, RiSunLine } from "react-icons/ri";
import { Link } from "react-scroll/modules";

interface NavItem {
  label: string;
  page: string;
}

const NAV_ITENS: Array<NavItem> = [
  { label: "Home", page: "home" },
  { label: "About", page: "about" },
  { label: "Projects", page: "projects" },
];

const Navbar = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme && theme === "system" ? systemTheme : theme;
  const [navbar, setNavbar] = useState(false);
  // const [mounted, setMounted] = useState(false);
  const ToggleTheme = () => (
    <button
      aria-label="Toggle Dark Mode"
      className="btn_toggle_theme"
      data-testid="button-theme-toggle"
      onClick={() =>
        setTheme(!currentTheme || currentTheme === "light" ? "dark" : "light")
      }
    >
      {!currentTheme || currentTheme === "light" ? (
        <RiMoonFill size={30} color="black" />
      ) : (
        <RiSunLine size={30} color="white" />
      )}
    </button>
  );
  // fix theme error
  // useEffect(() => {
  //   setMounted(true);
  // }, []);

  // if (!mounted) {
  //   return null;
  // }

  const PhoneMenu = () => (
    <div className="md:hidden">
      <button
        className="p-2 btn_toggle"
        aria-label={navbar ? "close navbar" : "open navbar"}
        onClick={() => setNavbar((prev) => !prev)}
      >
        {navbar ? <IoMdClose size={30} /> : <IoMdMenu size={30} />}
      </button>
    </div>
  );
  const LogoMenu = () => (
    <div className="container flex items-center space-x-2  cursor-pointer">
      <h2 className="text-2xl font-bold">Danie Rosa</h2>
    </div>
  );

  return (
    <header className="w-full justify-between fixed  z-50 top-0 mx-auto sm:px-20 px-4  shadow bg-white dark:bg-stone-900  dark:border-b">
      <nav className=" md:flex justify-between md:items-center ">
        <div className="flex items-center justify-between py-3 md:py-5 md:block">
          <Link
            to={"home"}
            className={
              "block lg:inline-block text-neutral-900  hover:text-primary-700 dark:text-neutral-100  hover:dark:text-primary-300  cursor-pointer"
            }
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            onClick={() => setNavbar(!navbar)}
          >
            <LogoMenu />
          </Link>
          <PhoneMenu />
        </div>
        <div
          className={`flex-1 md:flex-initial justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
            navbar ? "block" : "hidden"
          }`}
        >
          <div className="items-center justify-center  md:flex md:space-x-6  md:space-y-0 space-y-8">
            {NAV_ITENS.map((item, index) => (
              <Link
                key={index}
                to={item.page}
                className={
                  "block lg:inline-block text-neutral-900  hover:text-primary-700 dark:text-neutral-100  hover:dark:text-primary-300  cursor-pointer"

                  // "block lg:inline-block text-neutral-900  hover:text-neutral-700 dark:text-neutral-100  hover:dark:text-neutral-300  cursor-pointer"
                }
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                onClick={() => setNavbar(!navbar)}
              >
                {item.label}
              </Link>
            ))}
            <ToggleTheme />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

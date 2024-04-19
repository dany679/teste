import { Link } from "@/navigation";
import { AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="w-full mx-auto sm:px-20 px-4 shadow border-t py-3 bg-white dark:bg-stone-900 ">
      <div className="flex  flex-col md:flex-row md:justify-between text-center ">
        <div className="flex flex-row items-center justify-center space-x-1 ">
          © 2023 Danie Rosa<a href="/" className="hover:underline"></a>
        </div>

        <div className="flex flex-row items-center justify-center space-x-1 text-neutral-800 dark:text-neutral-100">
          <Link
            href="https://github.com/dany679"
            rel="noreferrer"
            target="_blank"
          >
            <AiOutlineGithub className="button_icons mx-2" size={30} />
          </Link>
          {/* <a href="https://github.com/danie_rose" rel="noreferrer" target="_blank"> i don`t have twitter account
            <AiOutlineTwitter className="button_icons" size={30} />
          </a> */}
          <Link
            href="https://www.linkedin.com/in/danie-dev/"
            rel="noreferrer"
            target="_blank"
          >
            <AiOutlineLinkedin className="button_icons mx-2 " size={30} />
          </Link>
          {/* <a
            href="https://www.instagram.com/_danie.rosa/" instagram it's only work on the app. in the future if is ok i can add again 
            rel="noreferrer"
            target="_blank"
          >
            <AiOutlineInstagram className="button_icons" size={30} />
          </a> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

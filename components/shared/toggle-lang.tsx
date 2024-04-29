"use client";
import { Link } from "@/navigation";
import { cn } from "@/utils/lib";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import { useState } from "react";

const ToggleLang = ({ className }: { className?: string }) => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const handleMouseEnter = () => {
    setDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    setDropdownVisible(false);
  };
  const t = useTranslations("components.navbar");
  const findLang = usePathname();
  const lang = findLang ? findLang.split("/")[1].substring(0, 5) : "pt-br";

  return (
    <div
      className={cn("relative inline-block text-left ", className)}
      // onMouseEnter={handleMouseEnter}
    >
      <button
        type="button"
        className=" inline-flex w-30 justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 "
        id="menu-button"
        aria-expanded="true"
        aria-haspopup="true"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {lang}
        <svg
          className="-mr-1 h-5 w-5 text-gray-400"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      {isDropdownVisible && (
        <>
          <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="absolute right-0 z-10 mt-0 w-full origin-top-right rounded-md bg-red-5 py-1"
          />
          <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="mt-2 absolute rounded-md min-w-40  bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none "
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="menu-button"
            tabIndex={-1}
          >
            <Link
              href="pt-br"
              className="text-gray-700 block px-4 py-2 text-sm"
              role="menuitem"
              tabIndex={0}
              id="menu-item-0"
            >
              Português
            </Link>
            <Link
              href="en"
              className="text-gray-700 block px-4 py-2 text-sm"
              role="menuitem"
              tabIndex={-1}
              id="menu-item-1"
            >
              English
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default ToggleLang;

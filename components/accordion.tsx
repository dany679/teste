"use client";

import { useState } from "react";

type AccordionpProps = {
  children: React.ReactNode;
  title: string;
  id: string;
  active?: boolean;
  startDate: string;
  endDate?: string | null;
  location?: string;
};

export default function Accordion({
  children,
  title,
  id,
  startDate,
  location,
  active = false,
  endDate = null,
}: AccordionpProps) {
  const [accordionOpen, setAccordionOpen] = useState<boolean>(() => active);

  return (
    <>
      <div className="py-2  border-2 dark:border-primary-300 border-primary-600   rounded-md">
        <h2>
          <button
            className="flex items-center justify-between w-full text-left font-semibold py-2 px-2"
            onClick={(e) => {
              e.preventDefault();
              setAccordionOpen(!accordionOpen);
            }}
            aria-expanded={accordionOpen}
            aria-controls={`accordion-text-${id}`}
          >
            <div className="flex flex-row w-full justify-between text-primary-950 dark:text-primary-50 px-1 whitespace-nowrap items-center">
              <div className="flex flex-wrap gap-x-1 md:gap-x-4 ">
                <span className="">{title}</span>
                <span className="no-wrap">{location}</span>
              </div>
              <span className="text-nowrap ">
                {startDate} - {endDate || "current"}
              </span>
            </div>
            <svg
              className="dark:fill-primary-300  fill-primary-950 shrink-0 ml-4 mr-2"
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                y="7"
                width="16"
                height="2"
                rx="1"
                className={`ttransform origin-center transition duration-200 ease-out ${accordionOpen && "!rotate-180"}`}
              />
              <rect
                y="7"
                width="16"
                height="2"
                rx="1"
                className={`transform origin-center rotate-90 transition duration-200 ease-out ${accordionOpen && "!rotate-180"}`}
              />
            </svg>
          </button>
        </h2>
      </div>
      <div
        id={`accordion-text-${id}`}
        role="region"
        aria-labelledby={`accordion-title-${id}`}
        className={` dark:bg-primary-700  bg-primary-200  rounded-md my-2 py-2 grid text-sm overflow-hidden transition-all duration-300 ease-in-out ${accordionOpen ? "grid-rows-[1fr] opacity-100 " : "grid-rows-[0fr] opacity-0 "}`}
      >
        <div className="overflow-hidden">
          <div className="p-3">{children}</div>
        </div>
      </div>
    </>
  );
}

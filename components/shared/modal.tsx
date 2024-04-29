"use client";
import { langs, useRouter } from "@/navigation";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";
function Modal() {
  const t = useTranslations();
  const router = useRouter();
  const searchParams = useSearchParams();
  const modal = searchParams.get("cv") && searchParams.get("cv") === "true";
  const findLang = usePathname();
  const langChoice = findLang
    ? findLang.split("/")[1].substring(0, 5)
    : "pt-br";
  useEffect(() => {
    modal && document.body.classList.add("stop-scrolling");
    return function cleanup() {
      document.body.classList.remove("stop-scrolling");
    };
  }, [modal]);

  return (
    <>
      {modal && (
        <dialog
          className="fixed left-0 top-0 w-full h-full bg-gray-500 bg-opacity-50 z-50 
          backdrop-blur flex justify-center items-center  overscroll-none"
          aria-label="close modal"
          onClick={(e) => {
            e.preventDefault();
            router.replace("/");
          }}
        >
          <div
            className="p-6 py-2 border w-96 shadow-lg rounded-md bg-white z-60 pointer-events-auto"
            onClick={(e) => {
              // do not close modal if anything inside modal content is clicked
              e.stopPropagation();
            }}
          >
            <button
              className="btn-primary flex flex-row justify-end w-full"
              aria-label="close modal"
              onClick={(e) => {
                e.preventDefault();
                router.push("/");
              }}
            >
              <h3 className="text-2xl font-bold text-gray-900">x</h3>
            </button>
            <div className="text-center ">
              <h3 className="text-2xl font-bold text-gray-900">Download CV</h3>
              <div className="mt-2 px-7 py-3">
                <p className="text-lg text-gray-500">{t("modal-cv")}</p>
                <div className="py-4">
                  {langs
                    .sort((a) => {
                      return a === langChoice ? -1 : 1;
                    })
                    .map((lang) => (
                      <Link
                        href={`/files/developer frontend full stack 2024 ${lang}.pdf`}
                        key={lang}
                        target="_blank"
                        rel="noopener noreferrer"
                        download={`Developer frontend full stack 2024 ${lang}.pdf`}
                        className="px-4 py-2 text-sm text-primary-700 hover:bg-primary-200 bg-primary-300 mx-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-300"
                      >
                        {lang}
                      </Link>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </dialog>
      )}
    </>
  );
}

export default Modal;

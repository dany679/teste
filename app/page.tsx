import About from "@/components/About";
import HeroSection from "@/components/HeroSection";
import Projects from "@/components/Projects";
export const metadata = {
  title: "Danie Rose",
  icons: {
    icon: "data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>👋</text></svg>",
  },
  // openGraph: {
  //   title: "Danie",
  //   description: "Danie Rose portfolio",
  // },
};
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col pt-20 md:px-20 px-4 dark:bg-stone-900">
      <HeroSection />
      <About />
      <Projects />
    </main>
  );
}

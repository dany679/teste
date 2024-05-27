import About from "@/components/About";
import Experiences from "@/components/Experience";
import HeroSection from "@/components/HeroSection";
import Projects from "@/components/Projects";
import { useRouter } from "@/navigation";
export const metadata = {
  title: "Danie Rose",
  icons: {
    icon: "data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>👋</text></svg>",
  },
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <About />
      <Experiences />
      <Projects />
    </>
  );
}

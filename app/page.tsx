import HeroSection from "@/app/components/index/heroSection";
import AboutMeSection from "@/app/components/index/aboutMe";
import DomainsSection from "@/app/components/index/domainsSection";
import ProjectsSlider from "@/app/components/index/projectsSlider";
import FrequentlyAsked from "@/app/components/index/faqsSection";
import DailyDev from "@/app/components/index/dailyDevSection";
import Certs from "@/app/components/index/myCertsSection";
import GetInTouch from "@/app/components/index/getInTouch";

export default function Home() {
  return (
    <>
    <HeroSection />
    <AboutMeSection />
    <DomainsSection />
    <ProjectsSlider />
    <FrequentlyAsked />
    <DailyDev />
    <Certs />
    <GetInTouch />
    </>
  );
}

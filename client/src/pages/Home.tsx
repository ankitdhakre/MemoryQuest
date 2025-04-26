import HeroSection from "@/components/home/HeroSection";
import IntroSection from "@/components/home/IntroSection";
import KnowledgeAreasSection from "@/components/home/KnowledgeAreasSection";
import AuthorSection from "@/components/home/AuthorSection";
import CtaSection from "@/components/home/CtaSection";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>ProjectWise - Project Management Guide for SMEs and Charities</title>
        <meta name="description" content="A comprehensive project management resource designed specifically for small to medium enterprises and charitable organizations." />
      </Helmet>

      <HeroSection />
      <IntroSection />
      <KnowledgeAreasSection />
      <AuthorSection />
      <CtaSection />
    </>
  );
};

export default Home;
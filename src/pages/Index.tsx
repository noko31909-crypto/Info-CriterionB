import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProjectDescription from "@/components/ProjectDescription";
import HowItWorks from "@/components/HowItWorks";
import FeaturesSection from "@/components/FeaturesSection";
import PrototypeSection from "@/components/PrototypeSection";
import DemoSection from "@/components/DemoSection";
import TechnicalSection from "@/components/TechnicalSection";
import SponsorSection from "@/components/SponsorSection";
import TeamSection from "@/components/TeamSection";
import FutureSection from "@/components/FutureSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ProjectDescription />
      <HowItWorks />
      <FeaturesSection />
      <PrototypeSection />
      <DemoSection />
      <TechnicalSection />
      <SponsorSection />
      <TeamSection />
      <FutureSection />
      <Footer />
    </div>
  );
};

export default Index;

import HeroSection from "./components/Hero";
import OurStory from "./components/OurStory";
import MissionVisionValues from "./components/MissionVisionValues";
import TeamSection from "./components/Team";
import CTASection from "./components/CTA";

export default function AboutPage() {
  return (
    <main>
      <HeroSection />
      <OurStory />
      <MissionVisionValues />
      <TeamSection />
      <CTASection />
    </main>
  );
}

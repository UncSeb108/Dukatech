import HeroSection from "./components/Hero";
import OurStory from "./components/OurStory";
import MissionVisionValues from "./components/MissionVisionValues";
import CTASection from "./components/CTA";

export default function AboutPage() {
  return (
    <main>
      <HeroSection />
      <OurStory />
      <MissionVisionValues />
      <CTASection />
    </main>
  );
}

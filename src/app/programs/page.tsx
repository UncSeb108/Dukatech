import ProgramsHero from "./components/ProgramsHero";
import ProgramBlock from "./components/ProgramBlock";

export default function ProgramsPage() {
  return (
    <main>
      <ProgramsHero />

      <ProgramBlock
        title="Revolutionize Engineering"
        description="Our flagship program aimed at reshaping the future of engineering in Kenya. Our platform empowers Africa's future engineers by connecting students, industry, and academia through 4IR tech, live projects, and innovation challenges."
        image="/images/logo.png"
      />
    </main>
  );
}

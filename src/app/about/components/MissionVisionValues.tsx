import { Lightbulb, ShieldCheck, Users, Leaf } from "lucide-react";

const missionVision = {
  mission: {
    title: "Mission",
    text: "To empower communities through accessible and innovative technology solutions.",
  },
  vision: {
    title: "Vision",
    text: "A digitally inclusive Kenya where technology drives opportunity and growth.",
  },
};

const coreValues = [
  {
    label: "Innovation",
    icon: <Lightbulb className="w-8 h-8 text-[#b8873d]" />,
  },
  {
    label: "Integrity",
    icon: <ShieldCheck className="w-8 h-8 text-[#b8873d]" />,
  },
  { label: "Community", icon: <Users className="w-8 h-8 text-[#b8873d]" /> },
  {
    label: "Sustainability",
    icon: <Leaf className="w-8 h-8 text-[#b8873d]" />,
  },
];

export default function MissionVisionValues() {
  return (
    <>
      <section className="py-12 text-white font-poppins">
        {/* Mission */}
        <div
          className="w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center min-h-[20rem]"
          style={{
            backgroundImage: `
              linear-gradient(to right, #2e318e 30%, rgba(46, 49, 142, 0.5) 70%),
              url('/images/mission.jpg')
            `,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="space-y-6 text-left p-6 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-montserrat">
              Our{" "}
              <span className="text-[#b8873d]">
                {missionVision.mission.title}
              </span>
            </h2>
            <p className="text-base md:text-lg leading-relaxed">
              {missionVision.mission.text}
            </p>
          </div>
        </div>

        {/* Vision */}
        <div
          className="w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center min-h-[20rem]"
          style={{
            backgroundImage: `
              linear-gradient(to left, #b8873d 30%, rgba(184, 135, 61, 0.5) 70%),
              url('/images/vision.jpg')
            `,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          {/* Empty on large, hidden on mobile */}
          <div className="hidden md:block" />
          <div className="space-y-6 text-right p-6 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-montserrat">
              Our{" "}
              <span className="text-[#2e318e]">
                {missionVision.vision.title}
              </span>
            </h2>
            <p className="text-base md:text-lg leading-relaxed">
              {missionVision.vision.text}
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-6 text-white font-poppins">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-[#b8873d] font-montserrat">
            Our <span className="text-[#2e318e]">Core Values</span>
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4 text-center">
            {coreValues.map((value, idx) => (
              <div
                key={idx}
                className="bg-white border border-[#b8873d] rounded-xl p-6 shadow hover:shadow-2xl hover:scale-105 transition ease-in-out duration-300 text-center"
              >
                {value.icon}
                <h3 className="text-base md:text-lg font-semibold text-[#2e318e] mt-4 font-montserrat">
                  {value.label}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

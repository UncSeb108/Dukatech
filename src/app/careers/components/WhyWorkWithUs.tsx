"use client";

import { motion } from "framer-motion";
import { TrendingUp, Globe, Users, Laptop } from "lucide-react";

const perks = [
  { 
    title: "Growth", 
    text: "Continuous learning and development opportunities.", 
    icon: <TrendingUp className="w-10 h-10 text-[#b8873d]" /> 
  },
  { 
    title: "Impact", 
    text: "Work on projects that empower Kenyan communities.", 
    icon: <Globe className="w-10 h-10 text-[#b8873d]" /> 
  },
  { 
    title: "Collaboration", 
    text: "A supportive team that values innovation and creativity.", 
    icon: <Users className="w-10 h-10 text-[#b8873d]" /> 
  },
  { 
    title: "Flexibility", 
    text: "Hybrid working options to balance life and work.", 
    icon: <Laptop className="w-10 h-10 text-[#b8873d]" /> 
  },
];

export default function WhyWorkWithUs() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-100 font-poppins">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-[#b8873d] mb-6 font-michroma">
          Why <span className="text-[#2e318e]">Work</span> With Us?
        </h2>
        <p className="text-black max-w-2xl mx-auto mb-12">
          Join a team that blends innovation, purpose, and flexibility — shaping a future where technology drives impact.
        </p>

        {/* Perks Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {perks.map((perk, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="p-8 bg-white rounded-lg shadow-md hover:shadow-2xl hover:-translate-y-2 border border-gray-100 hover:border-[#b8873d] transition-all duration-300 flex flex-col items-center text-center"
            >
              <div className="mb-4">{perk.icon}</div>
              <h3 className="text-xl font-semibold text-[#2e318e] mb-3 font-michroma">
                {perk.title}
              </h3>
              <p className="text-black leading-relaxed">{perk.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

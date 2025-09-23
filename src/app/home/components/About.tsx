"use client";

import { Lightbulb, Users, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

export default function AboutSection() {
  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (idx: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: idx * 0.2 },
    }),
  };

  return (
    <section className="py-16 px-6 md:px-12 bg-white text-center">
      {/* Title & Intro */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold mb-6 tracking-wide font-michroma text-[#b8873d]"
      >
        Who We <span className="text-[#2e318e]">Are</span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="max-w-4xl mx-auto text-lg text-black mb-12 font-poppins"
      >
        Dukatech Solutions is dedicated to empowering Kenyan communities by
        bridging technology with everyday life. We focus on innovation,
        collaboration, and sustainable growth to create real impact.
      </motion.p>

      {/* Icons & Values */}
      <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto font-poppins">
        {[
          {
            title: "Innovation",
            description:
              "We bring forward-thinking solutions to challenges facing Kenyan communities and businesses.",
            Icon: Lightbulb,
          },
          {
            title: "Community",
            description:
              "We believe in people-powered progress, working hand in hand with communities to drive meaningful change.",
            Icon: Users,
          },
          {
            title: "Growth",
            description:
              "Our solutions foster sustainable development and long-term opportunities for individuals and organizations.",
            Icon: TrendingUp,
          },
        ].map(({ title, description, Icon }, idx) => (
          <motion.div
            key={idx}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            custom={idx}
            whileHover={{ scale: 1.05 }}
            className="group p-8 bg-white rounded-lg border border-[#b8873d] shadow hover:shadow-2xl transition duration-300 flex flex-col items-center text-center"
          >
            <div className="w-16 h-16 flex items-center justify-center mb-4">
              <Icon className="w-16 h-16 text-[#b8873d] font-bold" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-[#2e318e] font-michroma">
              {title}
            </h3>
            <p className="text-black">{description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

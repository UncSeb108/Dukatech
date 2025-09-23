"use client";

import { motion, easeOut } from "framer-motion";
import { MonitorSmartphone, Leaf, GraduationCap, Code, Radio } from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      title: "Digital Transformation",
      desc: "Helping SMEs adopt modern tools and streamline operations.",
      icon: <MonitorSmartphone className="w-12 h-12 text-[#b8873d]" />,
    },
    {
      title: "Smart Agriculture",
      desc: "Tech-driven farming solutions that increase productivity.",
      icon: <Leaf className="w-12 h-12 text-[#b8873d]" />,
    },
    {
      title: "E-Learning & Training",
      desc: "Upskilling youth and professionals through ICT education.",
      icon: <GraduationCap className="w-12 h-12 text-[#b8873d]" />,
    },
    {
      title: "Software & Web Solutions",
      desc: "Custom platforms designed to fit unique business needs.",
      icon: <Code className="w-12 h-12 text-[#b8873d]" />,
    },
    {
      title: "IoT & Connectivity",
      desc: "Smart devices and connectivity solutions for everyday use.",
      icon: <Radio className="w-12 h-12 text-[#b8873d]" />,
    },
  ];

  // Variants for stagger animations
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.25 },
    },
  };

  const card = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: easeOut },
    },
  };

  return (
    <section className="py-12 px-6 md:px-12 bg-[#f1f1f1] text-center">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-3xl font-bold text-center mb-6 font-michroma text-[#b8873d] tracking-wide"
      >
        Our <span className="text-[#2e318e]">Services</span>
      </motion.h2>

      {/* Services Grid */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto font-poppins"
      >
        {services.map((service, idx) => (
          <motion.div
            key={idx}
            variants={card}
            whileHover={{ scale: 1.05 }}
            className="group p-8 bg-white rounded-lg border border-[#b8873d] shadow hover:shadow-2xl transition duration-300 hover:-translate-y-1 flex flex-col items-center text-center"
          >
            <div className="w-16 h-16 flex items-center justify-center mb-4">
              {service.icon}
            </div>
            <h3 className="text-lg font-semibold mb-2 text-[#2e318e] font-michroma">
              {service.title}
            </h3>
            <p className="text-black">{service.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

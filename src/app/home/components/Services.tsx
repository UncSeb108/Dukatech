"use client";

import { motion, easeOut } from "framer-motion";
import { MonitorSmartphone, Leaf, GraduationCap, Code, Radio } from "lucide-react";
import Image from "next/image";

export default function ServicesSection() {
  const services = [
    {
      title: "Digital Transformation",
      desc: "Helping SMEs adopt modern tools and streamline operations through data and automation.",
      icon: <MonitorSmartphone className="w-8 h-8 text-[#918947]" />,
      image: "/images/digital-transformation.jpg",
    },
    {
      title: "Smart Agriculture",
      desc: "Tech-driven farming solutions that increase productivity and promote sustainability.",
      icon: <Leaf className="w-8 h-8 text-[#918947]" />,
      image: "/images/smart-agriculture.jpg",
    },
    {
      title: "E-Learning & Training",
      desc: "Upskilling youth and professionals through ICT education and e-learning platforms.",
      icon: <GraduationCap className="w-8 h-8 text-[#918947]" />,
      image: "/images/elearning.jpeg",
    },
    {
      title: "Software & Web Solutions",
      desc: "Custom software, apps, and web platforms designed for scalability and impact.",
      icon: <Code className="w-8 h-8 text-[#918947]" />,
      image: "/images/software.jpg",
    },
    {
      title: "IoT & Connectivity",
      desc: "Smart devices and connected solutions for everyday convenience and efficiency.",
      icon: <Radio className="w-8 h-8 text-[#918947]" />,
      image: "/images/iot.jpg",
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const item = {
    hidden: { opacity: 0, y: 25 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: easeOut } },
  };

  return (
    <section className="bg-white">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-center py-14"
      >
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#0f172a] font-montserrat mb-3">
          <span className="text-[#918947]">Our</span> Core Services
        </h2>
        <div className="w-32 h-[3px] bg-[#918947] mx-auto mb-6 rounded-full mb-6"></div>
        <p className="text-gray-600 mt-3 max-w-2xl mx-auto font-poppins text-base md:text-lg">
          We blend innovation, creativity, and technology to empower businesses and individuals in the digital age.
        </p>
      </motion.div>

      {/* Services */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="flex flex-col"
      >
        {services.map((service, idx) => (
          <motion.div
            key={idx}
            variants={item}
            className={`flex flex-col md:flex-row ${
              idx % 2 === 1 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Image */}
            <div className="relative w-full md:w-1/2 h-[320px] md:h-[450px]">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

              <div className="absolute bottom-4 left-5 flex items-center gap-2 text-white">
                {service.icon}
                <h3 className="text-lg md:text-xl font-semibold font-montserrat">
                  {service.title}
                </h3>
              </div>
            </div>

            {/* Text */}
            <div className="w-full md:w-1/2 flex flex-col justify-center px-6 md:px-14 py-8 bg-white">
              <h3 className="text-xl font-semibold text-[#918947] mb-3 font-montserrat">
                {service.title}
              </h3>
              <p className="text-gray-700 text-base leading-relaxed font-poppins">
                {service.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

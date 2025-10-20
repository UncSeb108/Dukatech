"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutSection() {
  const values = [
    {
      title: "Innovation",
      description:
        "We bring forward-thinking solutions to challenges facing Kenyan communities and businesses.",
      image: "/images/innovation.jpg",
    },
    {
      title: "Community",
      description:
        "We believe in people-powered progress, working hand in hand with communities to drive meaningful change.",
      image: "/images/community.jpg",
    },
    {
      title: "Growth",
      description:
        "Our solutions foster sustainable development and long-term opportunities for individuals and organizations.",
      image: "/images/growth.jpg",
    },
  ];

  return (
    <section className="w-full bg-[#0f172a] text-white">
      {/* Title Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center py-16 px-6 md:px-12"
      >
        <h2 className="text-2xl md:text-4xl font-bold font-montserrat mb-3">
          Who We <span className="text-[#918947]">Are</span>
        </h2>

        <div className="w-32 h-[3px] bg-[#918947] mx-auto mb-6 rounded-full"></div>

        <p className="max-w-3xl mx-auto text-gray-300 font-poppins text-base md:text-lg leading-relaxed">
          Dukatech Solutions empowers Kenyan communities by merging technology
          with innovation, collaboration, and sustainable growth to create
          lasting impact.
        </p>
      </motion.div>

      {/* Image Overlay Sections */}
      <div className="flex flex-col">
        {values.map(({ title, description, image }, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: idx * 0.2 }}
            className="relative w-full h-[55vh] md:h-[40vh] overflow-hidden group"
          >
            {/* Background Image */}
            <Image
              src={image}
              alt={title}
              fill
              priority
              className="object-cover brightness-[0.4] group-hover:scale-105 transition-transform duration-700"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent"></div>

            {/* Text Content */}
            <div
              className={`absolute inset-0 flex flex-col justify-center px-6 md:px-20 ${
                idx % 2 === 0 ? "items-start text-left" : "items-end text-right"
              }`}
            >
              <motion.div
                initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="max-w-md"
              >
                <h3 className="text-2xl md:text-3xl font-semibold mb-3 font-montserrat text-[#918947]">
                  {title}
                </h3>
                <p className="text-gray-200 text-base md:text-lg leading-relaxed font-poppins">
                  {description}
                </p>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import { motion, easeOut } from "framer-motion";

export default function ProjectsSection() {
  const projects = [
    {
      title: "Shop Okoa",
      desc: "Fintech infrastructure operating at the intersection of AI and blockchain technologies.",
      image: "/images/shopokoa.jpg",
    },
    {
      title: "Mama Pesa",
      desc: "AI powered chatbot for financial literacy in local languages, and business support training for women-owned businesses.",
      image: "/images/mamapesa.jpg",
    },
    {
      title: "Soko Beauty",
      desc: "A Pioneering database used to train Africa's first intelligent robot that can braid human hair.",
      image: "/images/sokobeauty.png",
    },
  ];

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.3 },
    },
  };

  const card = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: easeOut } },
  };

  return (
    <section className="py-12 px-6 md:px-12 bg-white">
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-3xl font-bold text-center mb-6 tracking-wide font-montserrat text-[#918947]"
      >
        Our <span className="text-[#0f172a]">Projects</span>
      </motion.h2>

      {/* Projects Grid */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto font-poppins"
      >
        {projects.map((p, idx) => (
          <motion.div
            key={idx}
            variants={card}
            whileHover={{ scale: 1.03 }}
            className="bg-white rounded-lg overflow-hidden shadow hover:shadow-2xl transition duration-300 hover:-translate-y-1 border border-[#918947] items-stretch flex flex-col"
          >
            <Image
              src={p.image}
              alt={p.title}
              width={400}
              height={250}
              className="w-full h-64 p-6 object-contain"
            />
            <div className="p-6 bg-[#f1f1f1] flex-1 flex flex-col">
              <h3 className="text-xl font-semibold mb-2 font-montserrat text-[#0f172a]">
                {p.title}
              </h3>
              <p className="text-black">{p.desc}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

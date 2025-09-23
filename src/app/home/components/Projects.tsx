"use client";

import Image from "next/image";
import { motion, easeOut } from "framer-motion";

export default function ProjectsSection() {
  const projects = [
    {
      title: "ShopOkoa",
      desc: "Bringing water efficiency and sustainability to rural farms.",
      image: "/images/shopokoa.jpg",
    },
    {
      title: "MamaPesa",
      desc: "Empowering students in rural areas with digital skills.",
      image: "/images/mamapesa.jpg",
    },
    {
      title: "Feed a Comrade",
      desc: "Equipping young people with programming skills for the future.",
      image: "/images/feedacomrade.jpg",
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
        className="text-3xl font-bold text-center mb-6 tracking-wide font-michroma text-[#b8873d]"
      >
        Our <span className="text-[#2e318e]">Projects</span>
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
            className="bg-white rounded-lg overflow-hidden shadow hover:shadow-2xl transition duration-300 hover:-translate-y-1 border border-[#b8873d] items-stretch flex flex-col"
          >
            <Image
              src={p.image}
              alt={p.title}
              width={400}
              height={250}
              className="w-full h-64 p-6 object-contain"
            />
            <div className="p-6 bg-[#f1f1f1] flex-1 flex flex-col">
              <h3 className="text-xl font-semibold mb-2 font-michroma text-[#2e318e]">
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

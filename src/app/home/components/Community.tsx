"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function CommunityStories() {
  const stories = [
    {
      name: "Mary W.",
      role: "Farmer, Kisumu",
      story:
        "Dukatech's smart irrigation project doubled my farm yields. I can now support my family better.",
      image: "/images/story1.jpg",
    },
    {
      name: "James K.",
      role: "Student, Nairobi",
      story:
        "Through the e-learning program, I gained ICT skills that helped me land my first internship.",
      image: "/images/story2.jpg",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
      className="py-12 px-6 md:px-12 bg-[#f1f1f1]"
    >
      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold text-center mb-6 tracking-wide font-michroma text-[#b8873d]"
      >
        Community <span className="text-[#2e318e]">Stories</span>
      </motion.h2>

      {/* Stories Grid */}
      <motion.div
        variants={containerVariants}
        className="grid gap-10 md:grid-cols-2 max-w-6xl mx-auto px-6 font-poppins"
      >
        {stories.map((s, idx) => (
          <motion.div
            key={idx}
            variants={cardVariants}
            className="bg-white rounded-lg shadow hover:shadow-2xl transition duration-300 hover:-translate-y-1 p-8 flex flex-col md:flex-row gap-6 border border-[#b8873d]"
          >
            <Image
              src={s.image}
              alt={s.name}
              width={100}
              height={100}
              className="rounded-lg object-cover"
            />
            <div>
              <p className="italic text-black">“{s.story}”</p>
              <p className="mt-4 font-semibold font-michroma text-[#2e318e]">
                {s.name}
              </p>
              <p className="text-sm text-[#b8873d]">{s.role}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}

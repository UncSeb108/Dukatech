"use client";

import Image from "next/image";
import { motion, Variants, easeOut } from "framer-motion";

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

  const sectionVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: easeOut },
    },
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      variants={sectionVariants}
      className="bg-white py-20 px-6 md:px-10"
    >
      {/* Header */}
      <motion.div
        variants={itemVariants}
        className="text-center mb-16 max-w-2xl mx-auto"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold font-montserrat">
          <span className="text-[#0f172a]">Community</span>{" "}
          <span className="text-[#918947]">Stories</span>
        </h2>
        <p className="text-gray-600 mt-4 text-lg font-poppins">
          Real stories from real people whose lives have been touched by
          technology.
        </p>
      </motion.div>

      {/* Testimonials — now side-by-side */}
      <motion.div
        variants={sectionVariants}
        className="flex flex-col md:flex-row items-start justify-center gap-12 md:gap-20 max-w-5xl mx-auto"
      >
        {stories.map((s, i) => (
          <motion.div
            key={i}
            variants={itemVariants}
            className="flex flex-col items-center text-center md:text-left font-poppins flex-1"
          >
            {/* Avatar */}
            <div className="relative w-24 h-24 mb-5">
              <Image
                src={s.image}
                alt={s.name}
                fill
                className="rounded-full object-cover border-4 border-[#918947]/30 shadow-sm"
              />
            </div>

            {/* Story */}
            <p className="italic text-gray-700 text-lg leading-relaxed mb-4">
              “{s.story}”
            </p>

            {/* Name & Role */}
            <div>
              <h4 className="text-[#0f172a] font-semibold text-lg font-montserrat">
                {s.name}
              </h4>
              <p className="text-sm text-[#918947]">{s.role}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}

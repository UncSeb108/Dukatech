"use client";

import { useState } from "react";
import { ChevronRight } from "lucide-react";
import { motion, easeOut } from "framer-motion";

export default function NewsletterSignup() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Subscribed with:", email);
    setEmail("");
  };

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.3 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: easeOut } },
  };

  return (
    <section className="py-12 px-6 md:px-12 bg-[#918947] text-white text-center font-poppins">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="max-w-2xl mx-auto"
      >
        {/* Heading */}
        <motion.h2
          variants={item}
          className="text-3xl md:text-4xl font-bold mb-4 font-montserrat"
        >
          Stay <span className="text-[#000414]">Updated</span>
        </motion.h2>

        {/* Description */}
        <motion.p variants={item} className="mb-8 text-lg">
          Subscribe to get updates on our projects and community impact.
        </motion.p>

        {/* Form */}
        <motion.form
          variants={item}
          onSubmit={handleSubmit}
          className="flex flex-col justify-center items-center gap-4 max-w-xl mx-auto"
        >
          <input
            type="email"
            placeholder="Enter email to stay updated on events..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="px-4 py-3 rounded-lg w-full md:flex-1 text-black bg-white focus:outline-none border border-white focus:border-white transition"
          />

          <motion.button
            variants={item}
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative overflow-hidden group px-15 py-3 rounded-lg bg-[#ffffff] border border-[#ffffff] text-[#918947] hover:text-[#ffffff] hover:border-[#000414] font-bold font-montserrat transition-all ease-in-out duration-500"
          >
            <span className="absolute inset-0 bg-[#000414] translate-x-[-100%] group-hover:translate-x-0 transition-transform ease-in-out duration-500"></span>
            <span className="relative flex items-center gap-2">
              Subscribe
              <ChevronRight className="w-8 h-8 transition-transform duration-300 group-hover:translate-x-3" />
            </span>
          </motion.button>
        </motion.form>
      </motion.div>
    </section>
  );
}

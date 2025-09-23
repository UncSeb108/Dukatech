"use client";

import { motion } from "framer-motion";

export default function CareersCTA() {
  return (
    <section className="py-20 bg-[#b8873d] text-white text-center font-poppins">
      <div className="max-w-4xl mx-auto px-6">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-6 font-michroma"
        >
          Don&apos;t See a Role That{" "}
          <span className="text-[#2e318e]">Fits?</span>
        </motion.h2>

        {/* Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-10 max-w-2xl mx-auto text-lg leading-relaxed"
        >
          We&apos;re always looking for passionate, talented individuals to join
          our mission. Send us your CV and let&apos;s connect.
        </motion.p>

        {/* Button */}
        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="relative overflow-hidden group px-15 py-3 rounded-lg bg-[#b8873d] border border-[#ffffff] text-[#ffffff] hover:text-[#2e318e] cursor-pointer font-bold font-michroma transition-all ease-in-out duration-500"
        >
          <span className="absolute inset-0 bg-[#ffffff] translate-x-[-100%] group-hover:translate-x-0 transition-transform ease-in-out duration-500"></span>
          <span className="relative flex items-center justify-center gap-2">
            Send CV
          </span>
        </motion.button>
      </div>
    </section>
  );
}

"use client";

import { Phone, Handshake } from "lucide-react";
import { motion } from "framer-motion";

export default function CallToAction() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
      className="py-12 px-6 md:px-12 bg-[#0f172a] text-white text-center font-montserrat"
    >
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-3xl md:text-4xl font-bold mb-6"
      >
        Join us in building a{" "}
        <span className="text-[#918947]">smarter, connected Africa.</span>
      </motion.h2>

      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="flex flex-col md:flex-row justify-center gap-6"
      >
        {/* Partner Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="relative overflow-hidden group px-8 py-3 rounded-lg bg-[#ffffff] border border-[#ffffff] text-[#0f172a] hover:text-[#ffffff] hover:border-[#918947] font-bold font-montserrat transition-all ease-in-out duration-500"
        >
          <span className="absolute inset-0 bg-[#918947] translate-x-[-100%] group-hover:translate-x-0 transition-transform ease-in-out duration-500"></span>
          <span className="relative flex items-center justify-center gap-2">
            Partner with Us
            <Handshake className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-1" />
          </span>
        </motion.button>

        {/* Contact Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="relative overflow-hidden group px-8 py-3 rounded-lg bg-[#0f172a] border border-[#ffffff] text-[#ffffff] hover:text-[#918947] font-bold font-montserrat transition-all ease-in-out duration-500"
        >
          <span className="absolute inset-0 bg-[#ffffff] translate-x-[-100%] group-hover:translate-x-0 transition-transform ease-in-out duration-500"></span>
          <span className="relative flex items-center justify-center gap-2">
            Contact Us
            <Phone className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-1" />
          </span>
        </motion.button>
      </motion.div>
    </motion.section>
  );
}

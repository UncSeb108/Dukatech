"use client";

import { motion } from "framer-motion";
import { ChevronRight, MousePointerClick } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen flex flex-col justify-center items-center text-center text-white overflow-hidden bg-[#0f172a]">
      {/* Background Image - responsive, centered, subtle */}
      <motion.img
        src="/images/outlay (2).png"
        alt="Tech Background"
        initial={{ scale: 1.2, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.4 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="
          absolute inset-0 mx-auto my-auto object-contain pointer-events-none
          opacity-40
          w-[100%] sm:w-[65%] md:w-[55%] lg:w-[45%] xl:w-[40%]
        "
      />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 px-6 sm:px-8 md:px-12"
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-montserrat leading-tight mb-6">
          WE ARE CREATING THE <br />
          <span className="bg-[#918947] bg-clip-text text-transparent">
            TECH REVOLUTION
          </span>{" "}
          <br /> THAT AFRICA NEEDS!
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-base sm:text-lg md:text-xl text-gray-300 font-poppins max-w-2xl mx-auto mb-8"
        >
          Dukatech Solutions empowers Kenyan communities by delivering
          innovative, reliable, and impactful digital solutions.
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-bold font-montserrat bg-[#918947] hover:scale-105 transition-all shadow-lg"
        >
          Get Started
          <ChevronRight className="w-5 h-5" />
        </motion.button>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 flex flex-col items-center text-gray-300 z-10"
      >
        <MousePointerClick className="w-6 h-6 mb-2 animate-bounce" />
        <span className="text-xs uppercase tracking-wider font-montserrat">
          Scroll
        </span>
      </motion.div>
    </section>
  );
}

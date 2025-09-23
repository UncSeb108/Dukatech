"use client";

import { motion } from "framer-motion";
import { ChevronRight, MousePointerClick } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen text-white overflow-hidden flex items-center bg-gradient-to-br from-[#0f172a] via-[#1e1b4b] to-[#020617]">
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 w-full min-h-screen">
        
        {/* LEFT: Text */}
        <div className="flex items-center px-6 sm:px-10 md:px-20 py-20">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="space-y-6 md:space-y-8 text-center md:text-left"
          >
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold tracking-tight font-michroma leading-tight">
              Transforming Communities <br />
              <span className="bg-gradient-to-r from-[#b8873d] to-[#2e318e] bg-clip-text text-transparent">
                Through Technology
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 font-poppins max-w-lg mx-auto md:mx-0">
              Dukatech Solutions empowers Kenyan communities by delivering
              innovative, reliable, and impactful digital solutions.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-bold font-michroma 
                bg-[#b8873d] shadow-lg transition-all"
            >
              Get Started
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>

        {/* RIGHT: Full height background image */}
        <div className="relative hidden md:block">
          <img
            src="/images/mamapesa2.jpg"
            alt="Tech Background"
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Gradient overlay for blending */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/90 via-[#1e1b4b]/50 to-transparent"></div>
        </div>
      </div>
      {/* Scroll Cue */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center text-gray-300 z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <MousePointerClick className="w-6 h-6 mb-2 animate-bounce" />
        <span className="text-xs uppercase tracking-wider font-michroma">
          Scroll
        </span>
      </motion.div>
    </section>
  );
}

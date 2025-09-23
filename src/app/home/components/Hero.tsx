"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence, easeOut } from "framer-motion";
import { ChevronDown } from "lucide-react";

const images = ["/images/1.jpg", "/images/mamapesa2.jpg", "/images/d1.jpg"];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  // Auto-slide every 5s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Parent + child variants for stagger
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4, // delay between each child
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: easeOut } },
  };

  return (
    <div className="relative w-full h-[100vh] overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          className="absolute w-full h-full"
          initial={{ opacity: 0, scale: 1 }}
          animate={{ opacity: 1, scale: 1.1 }}
          exit={{ opacity: 0, scale: 1.2 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        >
          <Image
            src={images[current]}
            alt={`Hero ${current}`}
            fill
            priority
            className="object-cover"
          />
        </motion.div>
      </AnimatePresence>

      {/* Overlay with staggered text */}
      <div className="absolute inset-0 flex flex-col justify-center items-center bg-black/70 text-white text-center px-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center"
        >
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl font-extrabold mb-10 tracking-wide font-michroma"
          >
            Dukatech Solutions
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl max-w-2xl mb-10 font-poppins"
          >
            Empowering Kenyan Communities through Innovative Tech Solutions.
          </motion.p>

          <motion.button
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative overflow-hidden group px-15 py-3 rounded-lg border border-[#b8873d] text-[#b8873d] hover:text-[#2e318e] font-bold font-michroma shadow-lg transition-all ease-in-out duration-500"
          >
            <span className="absolute inset-0 bg-[#b8873d] translate-x-[-100%] group-hover:translate-x-0 transition-transform ease-in-out duration-500"></span>
            <span className="relative flex items-center gap-2">
              Learn More
              <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-1" />
            </span>
          </motion.button>
        </motion.div>
      </div>

      {/* Dots navigation */}
      <div className="absolute bottom-6 w-full flex justify-center gap-2">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-3 h-3 rounded-full transition ${
              current === idx ? "bg-white" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

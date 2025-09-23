"use client";

import { motion } from "framer-motion";

export default function TeamCulture() {
  const images = ["/images/d1.jpg", "/images/d4.jpg", "/images/d3.jpg"];

  return (
    <section className="py-20 bg-gray-50 font-poppins">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-[#b8873d] mb-12 font-michroma">
          Life at <span className="text-[#2e318e]">Dukatech</span>
        </h2>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((src, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition"
            >
              <img
                src={src}
                alt={`Team ${idx + 1}`}
                className="object-cover w-full h-64 transform hover:scale-105 transition duration-500"
              />
            </motion.div>
          ))}
        </div>

        {/* Description */}
        <p className="text-black mt-10 max-w-3xl mx-auto text-lg leading-relaxed">
          Our team is passionate about solving real problems with technology.
          We celebrate collaboration, diversity, and creativity in every project —
          making Dukatech not just a workplace, but a community.
        </p>
      </div>
    </section>
  );
}

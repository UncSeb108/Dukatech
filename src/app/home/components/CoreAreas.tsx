"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  BadgeDollarSign,
  Target,
  ShieldCheck,
  Cpu,
  Monitor,
  Gamepad2,
  Store,
  Cog,
  Headset,
} from "lucide-react";

const AREAS = [
  { id: "finance", title: "Finance", icon: BadgeDollarSign },
  { id: "marketing", title: "Marketing", icon: Target },
  { id: "cyber", title: "Cyber Security", icon: ShieldCheck },
  { id: "ai", title: "AI", icon: Cpu },
  { id: "technology", title: "Technology", icon: Monitor },
  { id: "vr", title: "Virtual Reality", icon: Gamepad2 },
  { id: "marketplace", title: "Market Place", icon: Store },
  { id: "operations", title: "Operations", icon: Cog },
  { id: "support", title: "Customer Care", icon: Headset },
];

export default function CoreAreasGrid() {
  return (
    <section className="relative bg-[#0f172a] text-white py-14 px-4">
      {/* Header */}
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-4xl font-bold font-montserrat mb-3">
          Our <span className="text-[#918947]">Core Areas</span>
        </h2>

        <div className="w-32 h-[3px] bg-[#ffffff] mx-auto mb-6 rounded-full"></div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-9 gap-8 justify-center items-start max-w-6xl mx-auto text-center">
        {AREAS.map((area, idx) => {
          const Icon = area.icon;
          return (
            <motion.div
              key={area.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center justify-start group cursor-pointer"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-full flex items-center justify-center bg-[#918947]/10 text-[#918947] mb-3 group-hover:bg-[#918947]/20 border border-[#918947]/30 transition-all duration-400">
                <Icon size={26} />
              </div>

              {/* Title */}
              <h4 className="text-base font-semibold font-montserrat mb-1 group-hover:text-[#918947] transition-all">
                {area.title}
              </h4>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

"use client";

import { useEffect, useRef, useState, JSX } from "react";
import { motion, easeOut } from "framer-motion";
import { Users, Globe, Briefcase } from "lucide-react";

interface StatItem {
  label: string;
  value: number;
  icon: JSX.Element;
  suffix?: string;
}

export default function ImpactInNumbers() {
  const stats: StatItem[] = [
    {
      label: "People Trained",
      value: 5000,
      icon: <Users className="w-10 h-10 text-[#0f172a]" />,
      suffix: "+",
    },
    {
      label: "Counties Impacted",
      value: 10,
      icon: <Globe className="w-10 h-10 text-[#0f172a]" />,
      suffix: "+",
    },
    {
      label: "Businesses Supported",
      value: 200,
      icon: <Briefcase className="w-10 h-10 text-[#0f172a]" />,
      suffix: "+",
    },
  ];

  const [counts, setCounts] = useState(stats.map(() => 0));
  const [started, setStarted] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  // IntersectionObserver to trigger animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started) {
          setStarted(true);
        }
      },
      { threshold: 0.4 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [started]);

  // Count-up effect
  useEffect(() => {
    if (!started) return;

    stats.forEach((stat, idx) => {
      let start = 0;
      const duration = 2000;
      const increment = stat.value / (duration / 30);

      const counter = setInterval(() => {
        start += increment;
        if (start >= stat.value) {
          start = stat.value;
          clearInterval(counter);
        }
        setCounts((prev) => {
          const updated = [...prev];
          updated[idx] = Math.floor(start);
          return updated;
        });
      }, 30);
    });
  }, [started]);

  // Framer Motion variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: easeOut } },
  };

  return (
    <section ref={sectionRef} className="py-12 px-6 md:px-12 bg-white">
      <h2 className="text-3xl font-bold text-center mb-3 font-montserrat text-[#0f172a] tracking-wide">
        Our Impact in <span className="text-[#918947]">Numbers</span>
      </h2>
       <div className="w-32 h-[3px] bg-[#918947] mx-auto mb-6 rounded-full"></div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={started ? "show" : "hidden"}
        className="grid gap-10 md:grid-cols-3 max-w-7xl mx-auto px-6 text-center font-poppins"
      >
        {stats.map((stat, idx) => (
          <motion.div
            key={idx}
            variants={itemVariants}
            className="flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow hover:shadow-xl border border-[#918947] transition"
          >
            <div className="mb-4">{stat.icon}</div>
            <p className="text-4xl font-bold text-[#918947] font-montserrat">
              {counts[idx]}
              {stat.suffix}
            </p>
            <p className="text-black mt-2">{stat.label}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

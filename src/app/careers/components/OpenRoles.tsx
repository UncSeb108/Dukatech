"use client";

import { motion } from "framer-motion";
import { MapPin, Briefcase } from "lucide-react";

interface Job {
  title: string;
  location: string;
  type: string;
  description: string;
}

const jobs: Job[] = [
  {
    title: "Frontend Developer",
    location: "Nairobi, Kenya",
    type: "Full-time",
    description: "Work with Next.js and React to build scalable web applications."
  },
  {
    title: "Community Manager",
    location: "Remote",
    type: "Part-time",
    description: "Engage with our community and manage social impact initiatives."
  },
];

export default function OpenRoles() {
  return (
    <section className="py-20 bg-white font-poppins">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-[#b8873d] mb-12 text-center font-michroma">
          Open <span className="text-[#2e318e]">Positions</span>
        </h2>

        {/* Jobs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {jobs.map((job, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="p-8 bg-gray-50 rounded-lg border border-gray-50 shadow-md hover:border-[#b8873d] hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >
              {/* Job Title */}
              <h3 className="text-xl font-semibold text-[#2e318e] mb-3 font-michroma">
                {job.title}
              </h3>

              {/* Location + Type */}
              <div className="flex items-center text-black text-sm mb-3 gap-4">
                <span className="flex items-center gap-1">
                  <MapPin className="w-4 h-4 text-[#b8873d]" /> {job.location}
                </span>
                <span className="flex items-center gap-1">
                  <Briefcase className="w-4 h-4 text-[#b8873d]" /> {job.type}
                </span>
              </div>

              {/* Description */}
              <p className="text-black mb-6">{job.description}</p>

              {/* Apply Button */}
              <button className="font-michroma px-6 py-2 bg-[#b8873d] text-white rounded-md hover:bg-[#a3742e] hover:scale-105 transition-all duration-300">
                Apply Now
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

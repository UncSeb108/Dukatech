"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function BlogSection() {
  const posts = [
    {
      title: "How Technology is Empowering Kenyan Farmers",
      excerpt:
        "Smart irrigation and precision farming are transforming rural livelihoods across Kenya.",
      image: "/images/smart-agriculture.jpg",
      link: "#",
    },
    {
      title: "Youth and ICT: Building Tomorrow's Innovators",
      excerpt:
        "Our bootcamps are equipping young people with skills to thrive in the digital economy.",
      image: "/images/software.jpg",
      link: "#",
    },
    {
      title: "Sustainable Tech for Communities",
      excerpt:
        "From solar-powered IoT to e-learning centers, sustainability drives our mission.",
      image: "/images/innovation.jpg",
      link: "#",
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (idx: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: idx * 0.2 },
    }),
  };

  return (
    <section className="py-12 px-6 md:px-12 bg-[#ffffff] font-poppins">
      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold text-center mb-6 tracking-wide font-montserrat text-[#918947]"
      >
        Latest <span className="text-[#0f172a]">Insights</span>
      </motion.h2>

      {/* Blog Grid */}
      <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
        {posts.map((post, idx) => (
          <motion.div
            key={idx}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            custom={idx}
            whileHover={{ scale: 1.02 }}
            className="bg-white rounded-lg overflow-hidden shadow hover:shadow-2xl transition duration-300 hover:-translate-y-1 border border-[#918947] flex flex-col h-full"
          >
            {/* Image */}
            <Image
              src={post.image}
              alt={post.title}
              width={400}
              height={250}
              className="w-full h-48 object-cover"
            />

            {/* Content */}
            <div className="p-6 flex flex-col flex-1">
              <h3 className="text-xl font-semibold mb-2 font-montserrat">
                {post.title}
              </h3>
              <p className="text-black mb-4 flex-1">{post.excerpt}</p>
              <a
                href={post.link}
                className="text-[#918947] font-semibold hover:underline font-montserrat"
              >
                Read more →
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

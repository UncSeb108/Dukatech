"use client";

import Image from "next/image";
import Link from "next/link";

export default function OurStory() {
  return (
    <section className="py-12 px-6 md:px-12 bg-white">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-4xl font-bold mb-6 text-[#b8873d] font-michroma tracking-wide">
            Our <span className="text-[#2e318e]">Story</span>
          </h2>
          <p className="text-black leading-relaxed font-poppins">
            Dukatech Solutions was founded with a mission to leverage technology
            to empower Kenyan communities. From small beginnings, we've grown
            into a trusted partner, helping individuals, organizations, and
            businesses embrace innovation for social and economic growth.
          </p>
          <p className="text-black mt-4 leading-relaxed font-poppins">
            Through training, digital transformation, and community-driven
            projects, we are redefining what technology can achieve in creating
            opportunities and solving real problems.
          </p>
        </div>
        <div className="h-64 md:h-96 flex items-center justify-center">
          <Image
            src="/images/d4.jpg"
            alt="About Us Background"
            width={500}
            height={500}
            className="object-cover rounded-lg shadow-lg"
          ></Image>
        </div>
      </div>
    </section>
  );
}

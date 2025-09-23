"use client";

import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative h-[50vh] flex items-center justify-center text-center">
      <Image
        src="/images/d1.jpg"
        alt="About Us Background"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 text-white px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 font-michroma">
          About Dukatech Solutions
        </h1>
      </div>
    </section>
  );
}

"use client";
import Image from "next/image";

export default function ProgramsHero() {
  return (
    <section className="relative h-[50vh] flex items-center justify-center text-center font-montserrat">
      <Image
        src="/images/programs.jpeg"
        alt="Dukatech Programs"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#1e1b4b]/50 to-transparent" />
      <div className="relative z-10 text-white px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-wide">Our Programs</h1>
      </div>
    </section>
  );
}

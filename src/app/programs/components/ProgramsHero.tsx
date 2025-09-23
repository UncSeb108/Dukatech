"use client";
import Image from "next/image";

export default function ProgramsHero() {
  return (
    <section className="relative h-[60vh] flex items-center justify-center text-center font-michroma">
      <Image
        src="/images/programs.jpeg"
        alt="Dukatech Programs"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 text-white px-6">
        <h1 className="text-5xl font-bold mb-4 tracking-wide">Our Programs</h1>
      </div>
    </section>
  );
}

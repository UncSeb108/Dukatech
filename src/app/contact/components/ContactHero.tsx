"use client";

import Image from "next/image";

export default function ContactHero() {
  return (
    <section className="relative h-[50vh] flex items-center justify-center text-center font-poppins">
      <Image
        src="/images/contacthero.jpg"
        alt="Contact Us"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 text-white px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 font-michroma">Contact Us</h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto">
          Get in touch with Dukatech Solutions. We'd love to hear from you.
        </p>
      </div>
    </section>
  );
}

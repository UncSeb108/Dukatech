"use client";

import { Phone } from "lucide-react";

export default function ContactCTA() {
  return (
    <section className="py-16 bg-[#b8873d] text-white text-center font-poppins">
      <h2 className="text-3xl font-bold mb-6 mt-10 font-michroma">Let's <span className="text-[#2e318e]">Connect</span></h2>
      <p className="mb-8 max-w-2xl mx-auto">
        Whether you have questions, partnership ideas, or need support, our team
        is here to help. Get in touch today.
      </p>
      <button className="relative overflow-hidden group px-15 py-3 rounded-lg bg-[#b8873d] border border-[#ffffff] text-[#ffffff] hover:text-[#2e318e] font-bold font-michroma transition-all ease-in-out duration-500">
          <span className="absolute inset-0 bg-[#ffffff] translate-x-[-100%] group-hover:translate-x-0 transition-transform ease-in-out duration-500"></span>
          <span className="relative flex items-center justify-center gap-2">
            Contact Us
            <Phone className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-1" />
          </span>
        </button>
    </section>
  );
}

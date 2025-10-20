"use client";

import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const info = [
  {
    icon: MapPin,
    href: "https://www.google.com/maps/place/Chandaria+Business+Innovation+And+Incubation/@-1.182154,36.934158,17z/data=!3m1!4b1!4m6!3m5!1s0x182f3f78ac09fe1d:0x4ccb672abfe3ea40!8m2!3d-1.182154!4d36.9367329!16s%2Fg%2F11frnw0lrb?entry=ttu&g_ep=EgoyMDI1MDkxNy4wIKXMDSoASAFQAw%3D%3D",
    title: "Address",
    text: "Chandaria Business & Innovation Center, Kenyatta University.",
  },
  {
    icon: Phone,
    href: "tel:+254743800904",
    title: "Phone",
    text: "+254-743-800904",
  },
  {
    icon: Mail,
    href: "mailto:dukatechsolutions@gmail.com",
    title: "Email",
    text: "dukatechsolutions@gmail.com",
  },
  {
    icon: Clock,
    href: "",
    title: "Business Hours",
    text: "Mon - Fri: 9am - 5pm",
  },
];

export default function ContactInfo() {
  return (
    <section className="py-20 bg-[#f1f1f1] font-poppins">
      <div
        className="
          grid gap-6 
          sm:grid-cols-2 
          lg:grid-cols-4 
          max-w-6xl mx-auto px-6 
          items-stretch
        "
      >
        {info.map((item, idx) => (
          <Link
            key={idx}
            href={item.href || "#"}
            target={item.href ? "_blank" : undefined}
            className="h-full"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="
                group h-full p-6 
                bg-white rounded-lg 
                border border-[#b8873d] 
                shadow hover:shadow-2xl 
                transition duration-300 hover:-translate-y-1 
                flex flex-col justify-between text-center
              "
            >
              <div className="flex flex-col items-center">
                <item.icon className="w-8 h-8 text-[#b8873d] group-hover:text-[#a3742e] mb-4" />
                <h3 className="text-lg font-semibold text-[#2e318e] font-montserrat">
                  {item.title}
                </h3>
              </div>
              <p className="text-black mt-4 text-sm flex-1">{item.text}</p>
            </motion.div>
          </Link>
        ))}
      </div>
    </section>
  );
}

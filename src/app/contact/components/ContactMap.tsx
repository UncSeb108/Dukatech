"use client";

import { motion } from "framer-motion";

export default function ContactMap() {
  return (
    <section className="h-[400px] w-full px-6 md:px-12 lg:px-20">
        <h2 className="text-4xl text-[#b8873d] tracking-wide font-montserrat font-bold text-center mb-5 ">Visit <span className="text-[#2e318e]">Us</span></h2>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="w-full h-full rounded-xl shadow-lg overflow-hidden"
      >
        <iframe
          title="Dukatech Solutions"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d613.6090189628437!2d36.936889512491064!3d-1.1821826373771964!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f3f78ac09fe1d%3A0x4ccb672abfe3ea40!2sChandaria%20Business%20Innovation%20And%20Incubation!5e0!3m2!1sen!2ske!4v1758545684057!5m2!1sen!2ske"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </motion.div>
    </section>
  );
}

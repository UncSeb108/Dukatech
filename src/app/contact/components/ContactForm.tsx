"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate API call
    setTimeout(() => {
      console.log("Form submitted:", formData);
      setLoading(false);
      setSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 1500);
  };

  return (
    <section className="py-12 px-6 md:px-12 bg-white font-poppins">
      <div className="max-w-4xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center text-[#b8873d] mb-12 font-montserrat tracking-wide"
        >
          Send Us a <span className="text-[#2e318e]">Message</span>
        </motion.h2>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <label className="sr-only" htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="p-4 border rounded-lg focus:ring-2 focus:ring-[#b8873d] outline-none hover:border-[#b8873d]/60 transition"
            required
          />

          <label className="sr-only" htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="p-4 border rounded-lg focus:ring-2 focus:ring-[#b8873d] outline-none hover:border-[#b8873d]/60 transition"
            required
          />

          <label className="sr-only" htmlFor="subject">Subject</label>
          <input
            id="subject"
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            className="md:col-span-2 p-4 border rounded-lg focus:ring-2 focus:ring-[#b8873d] outline-none hover:border-[#b8873d]/60 transition"
            required
          />

          <label className="sr-only" htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Your Message"
            rows={6}
            value={formData.message}
            onChange={handleChange}
            className="md:col-span-2 p-4 border rounded-lg focus:ring-2 focus:ring-[#b8873d] outline-none hover:border-[#b8873d]/60 transition"
            required
          />

          <button
            type="submit"
            disabled={loading}
            className={`md:col-span-2 py-3 rounded-lg font-semibold transition font-montserrat ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-[#b8873d] text-white hover:bg-[#a3742e] shadow"
            }`}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </motion.form>

        {submitted && (
          <p className="text-green-600 text-center mt-6 font-medium">
            Your message has been sent successfully!
          </p>
        )}
      </div>
    </section>
  );
}

"use client";

import Link from "next/link";
import { Facebook, Twitter, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();
  if (pathname === "/") return null;

  return (
    <footer className="relative bg-black text-gray-300 pt-12 pb-10 overflow-hidden font-poppins">
      <div className="max-w-7xl mx-auto px-6 grid gap-12 md:grid-cols-3">
        {/* Logo & Mission */}
        <div className="space-y-4">
          <h2 className="text-5xl font-bold text-[#b8873d] font-michroma">
            <span className="text-[#2e318e]">Duka</span>tech
          </h2>
          <p className="text-normal text-white">
            Empowering Kenyan Communities through Innovative Tech Solutions.
          </p>
        </div>
        <div className="md:col-span-2 grid gap-8 md:grid-cols-3">
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-[#b8873d] mb-4 font-michroma">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm text-white">
              <li>
                <a href="#" className="hover:text-[#b8873d] transition">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#b8873d] transition">
                  Terms and Conditions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#b8873d] transition">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#b8873d] transition">
                  Cookie Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#b8873d] transition">
                  Accessibility
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-[#b8873d] mb-4 font-michroma">
              Contact Us
            </h3>
            <ul className="text-sm space-y-3">
              <li className="flex items-center gap-3 text-[white]">
                <Mail size={18} className="text-[#b8873d]" />{" "}
                dukatechsolutions@gmail.com
              </li>
              <li className="flex items-center gap-3 text-[white]">
                <MapPin size={40} className="text-[#b8873d]" /> 2ND Floor,
                Chandaria Business & Innovation Center, Kenyatta University.
              </li>
              <li className="flex items-center gap-3 text-[white]">
                <Phone size={18} className="text-[#b8873d]" /> +254-743-800904
              </li>
            </ul>
          </div>

          {/* Social + Newsletter */}
          <div>
            <h3 className="text-lg font-semibold text-[#b8873d] mb-4 font-michroma">
              Follow Us
            </h3>
            <div className="flex gap-3 mt-4">
              {[Facebook, Twitter, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social Link"
                  className="w-10 h-10 rounded-full flex items-center justify-center border border-gray-700 text-gray-300 hover:text-white hover:bg-[#b8873d] transition duration-300"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 mt-12 pt-6 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Dukatech Solutions. All rights reserved.
      </div>
    </footer>
  );
}

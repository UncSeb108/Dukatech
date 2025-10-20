"use client";

import { Facebook, Twitter, Linkedin, Mail, MapPin } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();

  if (pathname === "/") return null;
  
  return (
    <footer className="bg-[#000414] text-gray-300 py-12 font-poppins border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-10 md:gap-0">
        {/* Brand */}
        <div className="space-y-2 text-center md:text-left">
          <h2 className="text-4xl font-bold font-montserrat">
            <span className="text-[#ffffff]">
              Duka<span className="text-[#918947]">tech</span>
            </span>
          </h2>
          <p className="text-sm text-gray-400 max-w-sm">
            Empowering Kenyan communities through innovative, reliable, and
            impactful tech solutions.
          </p>
        </div>

        {/* Contact */}
        <div className="space-y-4 text-sm text-gray-400">
          <h3 className="text-lg font-semibold text-[#918947] font-montserrat">
            Contact Us
          </h3>
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4 text-[#918947]" />
            dukatechsolutions@gmail.com
          </div>
          <div className="flex items-start gap-2">
            <MapPin className="w-4 h-4 text-[#918947] mt-1" />
            <span>
              2nd Floor, Chandaria Business & Innovation Center, Kenyatta
              University
            </span>
          </div>
        </div>

        {/* Social Icons */}
        <div className="text-center md:text-right space-y-4">
          <h3 className="text-lg font-semibold text-[#918947] font-montserrat">
            Follow Us
          </h3>
          <div className="flex gap-4 justify-center md:justify-end">
            {[Facebook, Twitter, Linkedin].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-[#918947] hover:text-white transition-all duration-300"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t border-gray-800 pt-6 text-center text-sm text-gray-500 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-6 pr-20 pl-20">
        <span>
          © {new Date().getFullYear()} Dukatech Solutions. All rights reserved.
        </span>
        <div className="flex gap-4 text-xs sm:text-sm">
          <a
            href="#"
            className="hover:text-[#918947] transition-colors duration-300"
          >
            Privacy Policy
          </a>
          <span className="text-gray-600">|</span>
          <a
            href="#"
            className="hover:text-[#918947] transition-colors duration-300"
          >
            Terms & Conditions
          </a>
        </div>
      </div>
    </footer>
  );
}

"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { label: "Home", href: "/home" },
    { label: "About", href: "/about" },
    { label: "Programs", href: "/programs" },
    { label: "Careers", href: "/careers" },
    { label: "Contact", href: "/contact" },
  ];

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  if (pathname === "/") return null;

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#000000] text-[#b8873d] z-50 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/home" className="flex items-center space-x-2">
            <span className="font-bold text-3xl tracking-wide font-michroma">
              <span className="text-[#2e318e]">Duka</span>tech
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-12">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="hover:text-[#2e318e] transition ease-in-out duration-300 font-poppins"
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="focus:outline-none">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: "0%" }}
            exit={{ x: "100%" }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="fixed top-15 right-0 w-full h-screen bg-black text-[#b8873d] px-6 pt-16 pb-4 md:hidden font-poppins"
          >
            <motion.ul
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={{
                visible: {
                  transition: {
                    when: "beforeChildren",
                    staggerChildren: 0.2,
                  },
                },
                hidden: {
                  transition: {
                    when: "beforeChildren",
                    staggerChildren: 0.2,
                    staggerDirection: -1,
                  },
                },
              }}
              className="space-y-10 text-center"
            >
              {navLinks.map(({ href, label }) => (
                <motion.li
                  key={href}
                  variants={{
                    hidden: { opacity: 0, x: 20 },
                    visible: { opacity: 1, x: 0 },
                  }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                  <Link
                    href={href}
                    onClick={closeMenu}
                    className="block hover:text-white text-lg transition"
                  >
                    {label}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

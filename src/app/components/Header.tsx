"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Company Projects", href: "#company-projects" },
  { name: "Personal Projects", href: "#personal-projects" },
  { name: "Contact", href: "#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  // Add shadow or background when scrolling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      className={`sticky w-full top-0 z-50 transition-all duration-300 
    ${
      scrolled
        ? "bg-black/80 backdrop-blur-md shadow-md border-b border-white/10"
        : "bg-transparent border-b border-white/20"
    }
  `}
      initial={{ y: -1 }}
      animate={{ y: 3 }}
      transition={{ type: "spring", stiffness: 120 }}
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <motion.div
          className="text-xl font-bold cursor-pointer text-white"
          whileHover={{ scale: 1.1 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          Akhil Panwar
        </motion.div>

        {/* Navigation */}
        <nav>
          <ul className="flex gap-6">
            {navItems.map((item) => (
              <motion.li
                key={item.name}
                whileHover={{ y: -2, scale: 1.05 }}
                className="cursor-pointer text-slate-300 hover:text-white transition-colors"
                onClick={() => {
                  const el = document.querySelector(item.href);
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
              >
                {item.name}
              </motion.li>
            ))}
          </ul>
        </nav>
      </div>
    </motion.header>
  );
}

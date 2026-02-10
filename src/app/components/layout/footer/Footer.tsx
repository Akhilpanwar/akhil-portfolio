"use client";

import { motion } from "framer-motion";
import { SOCIAL_LINKS } from "@/lib";

export default function Footer() {
  return (
    <footer id="contact" className="py-12 text-center">
      <h2 className="text-4xl font-bold mb-6">Contact Me</h2>

      <div className="flex justify-center gap-6">
        {SOCIAL_LINKS.map(({ icon: Icon, url }, i) => (
          <motion.a
            key={i}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -5, scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="text-slate-300 hover:text-white"
          >
            <Icon size={26} />
          </motion.a>
        ))}
      </div>

      <motion.p
        className="text-slate-400 mt-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        © {new Date().getFullYear()} Akhil Panwar
      </motion.p>
    </footer>
  );
}

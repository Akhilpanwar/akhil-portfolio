// contact.tsx
"use client";
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { motion } from "framer-motion";

const icons = [
  { icon: <Github />, url: "https://github.com/Akhilpanwar" },
  { icon: <Linkedin />, url: "https://www.linkedin.com/in/akhil-panwar/" },
  { icon: <Mail />, url: "mailto:panwarakhil1811@email.com" },
  { icon: <Phone />, url: "tel:+919592459890" },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 text-center">
      <h2 className="text-4xl font-bold mb-6">Contact Me</h2>

      <div className="flex justify-center gap-6">
        {icons.map(({ icon, url }, i) => (
          <motion.a
            key={i}
            href={url}
            target="_blank"
            whileHover={{ y: -5, scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {icon}
          </motion.a>
        ))}
      </div>

      <motion.p
        className="text-slate-400 mt-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        © 2026 Akhil Panwar
      </motion.p>
    </section>
  );
}
